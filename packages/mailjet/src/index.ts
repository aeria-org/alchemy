export * from '../.aeria/out/index.js'
import { contracts, extendMailjetEmailCollection } from '../.aeria/out/index.js'
import { send } from './send.js'

export const mailjetEmail = extendMailjetEmailCollection({
  functions: {
    send,
  },
  contracts: {
    send: contracts.MailjetEmailSend,
  }
})

