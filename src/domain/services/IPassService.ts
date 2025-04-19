import { IPass } from '../entities'
import { CreatePassTypeParams } from '../types'
import { UpdatePassTypeParams } from '../types'

export interface IPassService {
  createPass(CreatePassparams: number): Promise<IPass>
  findPassById(passid: string): Promise<IPass | null>
  findAllPass(): Promise<IPass[]>
  updatePass(params: UpdatePassTypeParams): Promise<IPass>
  deletePass(passid: string): Promise<void>
}
