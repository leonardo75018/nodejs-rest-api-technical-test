import { IPass } from '../../domain/entities'
import { IPassService } from '../../domain/services/index'
import Pass from '../models/Pass'
import { CreatePassTypeParams } from '../../domain/types/index'
import { AppError } from '../utils'
import { UpdatePassTypeParams } from '../../domain/types/UpdatePassTypeParams'
import { validatePassLevel } from '../helpers'

export class PassService implements IPassService {
  async createPass(createPassparams: number): Promise<IPass> {
    console.log(createPassparams)
    try {
      const isValidLevel = validatePassLevel(createPassparams)
      if (!isValidLevel) {
        throw new AppError('Pass level must be between 1 and 5', 400)
      }

      const existingPass = await Pass.findOne({ level: createPassparams })
      if (existingPass?.level) {
        throw new AppError('A pass with this level already exists', 400)
      }

      const pass = new Pass({ level: createPassparams })
      await pass.save()
      return pass.toObject()
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
      return passes.map(p => p.toObject())
    } catch (err) {
      throw new AppError('Failed to retrieve passes', 500)
    }
  }

  async findPassById(id: string): Promise<IPass | null> {
    const pass = await Pass.findById(id)
    if (!pass) {
      throw new AppError('Pass not found', 404)
    }
    return pass.toObject()
  }

  async updatePass(params: UpdatePassTypeParams): Promise<IPass> {
    const { passId, level } = params
    const pass = await Pass.findByIdAndUpdate(passId, { level }, { new: true })
    if (!pass) {
      throw new AppError('Pass not found', 404)
    }
    return pass.toObject()
  }

  async deletePass(passId: string): Promise<void> {
    const result = await Pass.findByIdAndDelete(passId)
    if (!result) {
      throw new AppError('Pass not found', 404)
    }
  }
}
