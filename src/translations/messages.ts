import {
  messagesAcademyEn,
  messagesAcademyFr,
} from '@/academy/translations/messages.academy'
import {
  messagesAccountEn,
  messagesAccountFr,
} from '@/account/translations/messages.account'
import {
  messagesCommonEn,
  messagesCommonFr,
} from '@/common/translations/messages.common'
import {
  messagesMundusEn,
  messagesMundusFr,
} from '@/mundus/translations/messages.mundus'
import type { Paths } from 'type-fest'

export const messagesEn = {
  common: messagesCommonEn,
  account: messagesAccountEn,
  academy: messagesAcademyEn,
  mundus: messagesMundusEn,
}

export const messagesFr = {
  common: messagesCommonFr,
  account: messagesAccountFr,
  academy: messagesAcademyFr,
  mundus: messagesMundusFr,
}

export type Messages = typeof messagesEn & typeof messagesFr

export type MessagesKey = Paths<Messages, { leavesOnly: true }>
