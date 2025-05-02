import { NextFunction, Request, Response } from 'express'

type CreateCart = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<Response<any>>

type UpdateCart = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<Response<any>>

type GetCart = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<Response<any>>

type DeleteCart = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<Response<any>>

type FindCart = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<Response<any>>

export type ICartController = {
  create: CreateCart
  update: UpdateCart
  delete: DeleteCart
  find: FindCart
  get: GetCart
}
