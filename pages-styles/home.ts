import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
`;

export const H1 = styled.h1`
  margin: 0 0 0.5rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  > a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

export const dFlex = css`
  display: flex;
`;

export const justifyContentCenter = css`
  justify-content: center;
`;

export const FooterLink = styled.a`
  display: flex;
  margin: 2rem 0;
  justify-content: center;
  align-items: center;

  > span {
    display: flex;
    margin-left: 0.3125rem;
  }
`;
