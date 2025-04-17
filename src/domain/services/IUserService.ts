import { IUser } from '../entities'

export interface IUseService {
  createUser(): Promise<IUser>
  findUserById(): Promise<IUser>
  findUsers(): Promise<IUser[]>
  updateUser(): Promise<IUser>
  deleteUser(): Promise<void>
}
