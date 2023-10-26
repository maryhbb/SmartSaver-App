import Link from "next/link";
import styled from "styled-components";

export const ExpenseDetailContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ExpenseDetailItem = styled.div`
  flex: 1;
  padding: 8px;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const TitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: coral;
    transform: translateY(-2px);
  }
`;