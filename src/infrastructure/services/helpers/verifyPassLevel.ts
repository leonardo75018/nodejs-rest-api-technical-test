import { Types } from 'mongoose'
import { IPass } from '../../../domain/entities'
import { PassService } from '../PassService'

const passService = new PassService()

async function verifyPassLevel(passId: Types.ObjectId): Promise<number> {
  const pass = (await passService.findPassById(passId._id.toString())) as IPass
  return pass.level
}

export default verifyPassLevel
