import styled from 'styled-components'
import { motion } from 'framer-motion'
export const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  column-gap: 24px;

  div {
    h1 {
      font-size: 18px;
      font-weight: bold;
      max-width: 280px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    h2 {
      font-size: 16px;
      margin: 0;
    }
    .disabled {
      font-weight: 500;
      font-size: 14px;
      color: #a9a9a9;
    }
  }
`
