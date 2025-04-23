import { IPass } from '../entities'
import { CreatePassTypeParams } from '../types'
import { UpdatePassTypeParams } from '../types'

export interface IPassService {
  createPass(CreatePassparams: CreatePassTypeParams): Promise<IPass>
  findPassById(passid: string): Promise<IPass | null>
  findAllPass(): Promise<IPass[]>
  updatePass(passId: UpdatePassTypeParams): Promise<IPass>
  deletePass(passId: string): Promise<void>
}
