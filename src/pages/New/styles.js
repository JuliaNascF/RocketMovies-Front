import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
  main {
    grid-area: content;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 6px;
    }
   
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border-radius: 100px;
    }
    ::-webkit-scrollbar-button:start:decrement {
      height: 100px;
    
    }
  }
`;

export const Form = styled.form`
  max-width: 1130px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .InputGroup {
    display: flex;
    gap: 40px;  
  }
  .Tags {
    width: 100%;
    > span {
      display: block;
      font-size: 20px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-bottom: 24px;
    }
    .MoviesTags {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 16px;
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      border-radius: 8px;
    }
  }
  
  .button {
      display: flex;
      gap: 20px;

    > :first-child{
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
    }
`;



