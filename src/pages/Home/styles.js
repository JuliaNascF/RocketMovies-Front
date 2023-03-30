import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;
    &::-webkit-scrollbar {
      width: 6px;
     
    }
    &::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border-radius: 8px;
    }
  }
`

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
`;

export const HeaderPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
 
   button {
    max-width: 205px;
    display: flex;
    align-items:center;
    justify-content: center;
    margin-top: 20px;
   
  
   
  }
`;

export const Movies = styled.div``