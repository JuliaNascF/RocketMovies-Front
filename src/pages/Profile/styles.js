import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    height: 144px;
    background-color:  rgba(255, 133, 155, 0.05);
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 144px;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: -94px auto 0;
  > div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 64px;
  width: 186px;
  height: 186px;
  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;