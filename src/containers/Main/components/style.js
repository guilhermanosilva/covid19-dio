import styled from 'styled-components'
import { Card, Typography, CardContent } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`
export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${ ({color}) => color || '#5d78ff' };
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 150px; 
`

export const CardPainelStyled = styled(Card)`
  margin: 0 8px 0 8px;
  margin-bottom: 24px;
`

export const PainelEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`
export const PainelStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
