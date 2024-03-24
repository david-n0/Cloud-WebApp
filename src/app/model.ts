export class User {
  id: string = ''
  name: string = ''
  surname: string = ''
  username: string = ''
  password: string = ''
  permissions: string[] = []
}

export interface JwtWrapper {
  jwt: string,
  permissions: string
}

export interface Node {
  id: string
  name: string
  status: string
  createdAt: Date
}

export interface ErrorMessage {
  id: number,
  nodeId: number,
  message: string,
  status: string,
  date: Date
}
