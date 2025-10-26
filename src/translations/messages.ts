import {
  messagesAcademyEn,
  messagesAcademyFr,
} from '@/academy/translations/message.academy'
import {
  messagesAccountEn,
  messagesAccountFr,
} from '@/account/translations/messages.account'
import {
  messagesCommonEn,
  messagesCommonFr,
} from '@/common/translations/messages.common'
import type { Paths } from 'type-fest'

export const messagesEn = {
  common: messagesCommonEn,
  account: messagesAccountEn,
  academy: messagesAcademyEn,
}

export const messagesFr = {
  common: messagesCommonFr,
  account: messagesAccountFr,
  academy: messagesAcademyFr,
}

export type Messages = typeof messagesEn & typeof messagesFr

export type MessagesKey = Paths<Messages, { leavesOnly: true }>
