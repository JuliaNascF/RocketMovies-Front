import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;


  svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    width: 20px;
   
  }
`