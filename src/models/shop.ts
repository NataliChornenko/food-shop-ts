export interface ICardMenu {
  title: string
  icon: any
}

export interface ICardFood {
  title: string
  icon: string
  price: number
  description: string
}

export interface IOrder {
  title: string
  image: string
  price: number
  amount: number
}

export interface IMenuCardProps {
  card: ICardMenu
  active: number
  index: number
  choosePage: any
}

export interface IButton {
  content: string
  action: any
  active: boolean
}
