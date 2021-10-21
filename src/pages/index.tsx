import { Modal } from 'components/modal'
import { NextPage } from 'next'
import { ItemCart } from 'components/itemCart'
import acima10 from 'mock/acima10.json'
import { AnimatePresence, motion } from 'framer-motion'
import { CartContext } from 'context/cart'
import { useContext } from 'react'
import { Container } from 'components/container'
import { Button } from 'components/button'
import { convertToCurrency } from 'util/currency'
import { Ship } from 'components/ship'
const Home: NextPage = () => {
  const { open } = useContext(CartContext)
  return (
    <>
      <Modal>
        <AnimatePresence>
          <motion.div
            initial={{
              display: 'none',
              width: 'auto',
            }}
            animate={{
              display: 'flex',
              flexDirection: 'column',
              padding: open ? '24px' : '0',
              gap: '24px',
              width: 'auto',
            }}
            exit={{
              display: 'none',
              width: 'auto',
            }}
          >
            {open &&
              acima10.items.map(
                ({ id, name, imageUrl, price, sellingPrice }, index) => {
                  return (
                    <ItemCart
                      index={index}
                      key={id}
                      name={name}
                      image={imageUrl}
                      price={price}
                      sellingPrice={sellingPrice}
                    />
                  )
                }
              )}
          </motion.div>
        </AnimatePresence>
        {open && (
          <>
            <Container style={{ paddingBottom: '0' }}>
              <h1>Total</h1>
              <h1>{convertToCurrency(acima10.totalizers[0].value)}</h1>
            </Container>
            <Container
              style={{
                borderTop: 'none',
                justifyContent: 'center',
                padding: 0,
                paddingBottom: '16px'
              }}
            >
              <Ship>Parabéns, sua compra tem frete grátis!</Ship>
            </Container>
            <Container  style={{ paddingBottom: '0' }}>
              <Button>Finalizar compra</Button>
            </Container>
            
          </>
        )}
      </Modal>
    </>
  )
}

export default Home
