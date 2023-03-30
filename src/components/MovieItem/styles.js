import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;
  > button {
    border: none; 
    background: none;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
  > input {
    width: 100%;
    height: 56px;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;