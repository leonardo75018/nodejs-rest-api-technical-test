import { IPass } from '../../domain/entities'
import { CreatePassTypeParams } from '../../domain/types'
import { IPassService } from '../../domain/services/index'
import Pass from '../models/Pass'
import { AppError } from '../utils'
import { UpdatePassTypeParams } from '../../domain/types/UpdatePassTypeParams'
import { validatePassLevel } from './validators/validatePassLevel'

import { Types } from 'mongoose'

export class PassService implements IPassService {
  async createPass(createPassparams: CreatePassTypeParams): Promise<IPass> {
    try {
      const isValidLevel = validatePassLevel(createPassparams.level)
      if (!isValidLevel) {
        throw new AppError('Pass level must be between 1 and 5', 400)
      }

      const existingPass = await Pass.findOne(createPassparams)
      if (existingPass?.level) {
        throw new AppError('A pass with this level already exists', 400)
      }

      const pass = new Pass(createPassparams)
      await pass.save()
      return pass.toObject() as IPass
    } catch (err) {
      if (err instanceof AppError) {
        throw err
      }
      throw new AppError('Failed to create pass', 500)
    }
  }

  async findAllPass(): Promise<IPass[]> {
    try {
      const passes = await Pass.find()
      return passes.map(p => p.toObject()) as IPass[]
    } catch (err) {
      throw new AppError('Failed to retrieve passes', 500)
    }
  }

  async findPassById(id: string): Promise<IPass | null> {
    const objectId = new Types.ObjectId(id)

    const pass = await Pass.findById(objectId)
    if (!pass) {
      throw new AppError('Pass not found', 404)
    }
    return pass.toObject() as IPass
  }

  async updatePass(params: UpdatePassTypeParams): Promise<IPass> {
    const { passId, level } = params

    const isValidLevel = validatePassLevel(level)
    if (!isValidLevel) {
      throw new AppError('Pass level must be between 1 and 5', 400)
    }

    const pass = await Pass.findByIdAndUpdate(passId, { level }, { new: true })
    if (!pass) {
      throw new AppError('Pass not found', 404)
    }
    return pass.toObject() as IPass
  }

  async deletePass(passId: string): Promise<void> {
    const result = await Pass.findByIdAndDelete(passId)
    if (!result) {
      throw new AppError('Pass not found', 404)
    }
  }
}
