import { createContext, ReactNode, useState } from 'react'
interface ICart {
  totalCard: number
  open: boolean
  openModal: () => void
  closeModal: () => void
}
interface IProps {
  children: ReactNode
}
export const CartContext = createContext<ICart>({} as ICart)

export const CartProvider = ({ children }: IProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [totalItemsInCart, setTotalCart] = useState(0)

  function openModal() {
    setOpen(true)
  }
  function closeModal() {
    setOpen(false)
  }
  return (
    <CartContext.Provider
      value={{ open, totalCard: totalItemsInCart, openModal, closeModal }}
    >
      {children}
    </CartContext.Provider>
  )
}
