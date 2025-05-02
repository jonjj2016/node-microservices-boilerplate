type Create = (input: any) => Promise<{}>
type Update = (input: any) => Promise<{}>
type Delete = (input: any) => Promise<{}>
type Find = (input: any) => Promise<{}>
type Get = (input: any) => Promise<{}>

export type IOrderRepository = {
  create: Create
  update: Update
  delete: Delete
  find: Find
  get: Get
}
