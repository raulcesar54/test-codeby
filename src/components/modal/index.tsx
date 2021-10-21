import { Card, Row } from './style'
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai'
import { CartContext } from 'context/cart'
import { useContext, useEffect } from 'react'
export const Modal = ({ children }: { children: React.ReactNode }) => {
  const { open, openModal, closeModal } = useContext(CartContext)
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      width: 'auto',
      opacity: 1,
      transition: {
        stiffness: 50,
      },
    },
    open: {
      scale: 1,
      opacity: 1,
      width: '600px',
    },
  }
  return (
    <>
      <Card
        open={open}
        onClick={openModal}
        animate={open ? 'open' : 'visible'}
        initial='hidden'
        variants={variants}
      >
        <Row open={open} style={{ justifyContent: 'space-between' }}>
          <AiOutlineShoppingCart />
          {open && <small>Meu Carrinho</small>}
          {open && (
            <AiOutlineClose
              style={{ cursor: 'pointer' }}
              onClick={(event) => {
                event.stopPropagation()
                closeModal()
              }}
            />
          )}
        </Row>
        {children}
      </Card>
    </>
  )
}
