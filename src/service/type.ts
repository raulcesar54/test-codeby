export interface Response {
  label: string
  value: string | number
}
export interface Make {
  ID: number
  Name: string
}
export interface Model {
  MakeID: number
  ID: number
  Name: string
}
export interface Vehicle {
  ID: number
  Make: string
  Model: string
  Version: string
  Image: string
  KM: number
  Price: string
  YearModel: number
  YearFab: number
  Color: string
}
