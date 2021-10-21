import styled, { css } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
export const Card = styled(motion.div)`
  background-color: #ffff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: flex-start;
  box-sizing: border-box;
  border-radius: 16px;
  cursor: default;
  padding: 24px 0px;
  justify-content: flex-start;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 18%);
  ${({ open }: RowProps) =>
    !open &&
    css`
      cursor: pointer;
      grid-template-rows: 1fr;
    `}
`
interface RowProps {
  open: boolean
  noBorder?: boolean
}
export const Row = styled(motion.div)`
  display: flex;
  padding: 0px 24px 16px;
  flex: 2;
  border-bottom: 1px solid #e5e5e5;
  small {
    font-weight: bold;
  }
  ${({ open }: RowProps) =>
    !open &&
    css`
      padding: 0px 24px 0px;
      border-bottom: none;
    `}
`
