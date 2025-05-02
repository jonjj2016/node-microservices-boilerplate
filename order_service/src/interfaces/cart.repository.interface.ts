type Create = (input: any) => Promise<{}>
type Update = (input: any) => Promise<{}>
type Delete = (input: any) => Promise<{}>
type Find = (limit: number, offset: number) => Promise<{}>
type Get = (id: number) => Promise<{}>

export type ICartRepository = {
  create: Create
  update: Update
  delete: Delete
  find: Find
  get: Get
}
