import { convertToCurrency } from 'util/currency'
import { CardGrid } from './style'
interface Props {
  name: string
  image: string
  sellingPrice: number
  price: number
  index: number
}

export const ItemCart = ({
  name,
  image,
  price,
  sellingPrice,
  index,
}: Props) => {
  return (
    <CardGrid
      key={name}
      transition={{
        delay: index / 8,
        duration: 0.8,
      }}
      initial={{ display: 'none', opacity: 0, x: 300 }}
      animate={{ display: 'grid', opacity: 1, x: 0 }}
      exit={{
        display: 'none',
        opacity: 0,
      }}
    >
      <img
        src={image}
        alt=''
        width='130'
        height='130'
        style={{ border: '1px solid #a9a9a9' }}
      />
      <div>
        <h1 title={name}>{name}</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
          <h2 className='disabled'>{convertToCurrency(price)}</h2>
          <h2>{convertToCurrency(sellingPrice)}</h2>
        </div>
      </div>
    </CardGrid>
  )
}
