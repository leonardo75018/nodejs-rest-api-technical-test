import { IPass } from '../../../domain/entities'
import { PassService } from '../PassService'

const passService = new PassService()

async function verifyPassLevel(passId: string): Promise<number> {
  const pass = (await passService.findPassById(passId)) as IPass
  return pass.level
}

export default verifyPassLevel
