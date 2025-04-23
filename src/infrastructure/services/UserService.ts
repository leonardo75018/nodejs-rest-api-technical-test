import { IUser } from '../../domain/entities'
import { IUseService } from '../../domain/services/index'
import { AppError } from '../utils'
import { CreateUserTypeParams } from '../../domain/types'
import { PassService } from './PassService'
import User from '../models/User'
import { Types } from 'mongoose'
import { UpdateUserTypeParams } from '../../domain/types/UpdateUserTypeParams'

export class UserService implements IUseService {
  passService = new PassService()

  async createUser(createUserTypeParams: CreateUserTypeParams): Promise<IUser> {
    const pass = await this.passService.findPassById(
      createUserTypeParams.pass_id
    )
    if (!pass) {
      throw new AppError('Pass not found', 404)
    }

    try {
      const user = new User({ ...createUserTypeParams, pass_id: pass._id })

      await user.save()
      return user.toObject()
    } catch (err) {
      if (err instanceof AppError) {
        throw err
      }
      throw new AppError('Failed to create place', 500)
    }
  }
  async updateUser(updateUserTypeParams: UpdateUserTypeParams): Promise<IUser> {
    const { userId, pass_id, ...otherFields } = updateUserTypeParams

    const pass = await this.passService.findPassById(pass_id)
    if (!pass) {
      throw new AppError('Pass not found', 404)
    }

    const updateFields = {
      pass_id: pass._id,
      ...otherFields
    }

    const filteredFields = Object.fromEntries(
      Object.entries(updateFields).filter(([_, value]) => value !== undefined)
    )

    const user = await User.findByIdAndUpdate(userId, filteredFields, {
      new: true
    })

    if (!user) {
      throw new AppError('User not found', 404)
    }

    return user.toObject()
  }
  async deleteUser(userId: string): Promise<void> {
    const deletedUser = await User.findByIdAndDelete(userId)

    if (!deletedUser) {
      throw new AppError('User not found', 404)
    }
  }

  async findUsers(): Promise<IUser[]> {
    try {
      const users = await User.find().populate('pass_id')
      return users.map(p => p.toObject())
    } catch (err) {
      throw new AppError('Failed to retrieve users', 500)
    }
  }

  async findUserById(userId: string): Promise<IUser> {
    const user = await User.findById(userId).populate('pass_id')
    if (!user) {
      throw new AppError('Pass not found', 404)
    }
    return user.toObject()
  }
}
