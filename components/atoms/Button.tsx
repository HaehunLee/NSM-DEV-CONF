import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';

const Button = styled.button<{ design?: '핑쿠핑크' }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 16px;
  border: 2px solid #ffffff;

  color: #ffffff;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;

  ${({ design }) =>
    design === '핑쿠핑크' &&
    css`
      background-color: ${theme.colors.핑쿠핑크};
      border-color: ${theme.colors.핑쿠핑크};
    `}
`;

export default Button;
