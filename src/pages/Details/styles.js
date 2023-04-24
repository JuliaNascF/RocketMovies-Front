import styled from 'styled-components'


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
      width: 8px;
    }
    &::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border-radius: 8px;
    }

    p{
        margin-bottom: 15px
    }

    .buttonText{
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
`;

export const Tagline = styled.div`
  margin: 40px 0;
  
`;

export const HeaderMovie = styled.div`
  .TitleRating {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 25px;
    span {
      margin-right: 15px;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      font-size: 20px;
    }
  }
  .UserData {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;
    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;