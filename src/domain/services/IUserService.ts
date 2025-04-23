import { IUser } from '../entities'
import { CreateUserTypeParams } from '../types'
import { UpdateUserTypeParams } from '../types/UpdateUserTypeParams'

export interface IUseService {
  createUser(createUserTypeParams: CreateUserTypeParams): Promise<IUser>
  findUserById(userId: string): Promise<IUser>
  findUsers(): Promise<IUser[]>
  updateUser(updateUserTypeParams: UpdateUserTypeParams): Promise<IUser>
  deleteUser(userId: string): Promise<void>
}
