import { Request } from 'express'

export const parsePagination = (query: Request['query']) => {
  const { offset = '0', limit = '10' } = query as {
    offset?: string
    limit?: string
  }
  return { offset: +offset, limit: +limit }
}
