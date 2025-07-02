import type { mailjetEmail } from '../.aeria/out/collections/collections.js'
import { ACError, type Context, type ContractToFunction } from '@aeriajs/types'
import { contracts } from '../.aeria/out/index.js'

export const send: ContractToFunction<typeof contracts.MailjetEmailSend, Context<typeof mailjetEmail.description>> = async (payload, context) => {
  console.log(payload)
  await context.collection.model.insertOne(payload)

  return context.error(400, {
    code: ACError.UnknownError,
  })
}

