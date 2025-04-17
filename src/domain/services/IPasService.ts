import { IPass } from '../entities'

export interface IPassService {
  createPass(): Promise<IPass>
  findPassById(): Promise<IPass>
  findAllPass(): Promise<IPass[]>
  updatePass(): Promise<IPass>
  deletePass(): Promise<void>
}
