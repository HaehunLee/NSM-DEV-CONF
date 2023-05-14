import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { css } from '@emotion/react';

const List = () => {
  return (
    <Box>
      <Title>
        <strong>FE&nbsp;</strong>
        NEXT
      </Title>
      <Content>
        기본적인 프론트엔드 및 대한민국의 전반적인 리액트 트렌드를 반영한
        컨퍼런스.
      </Content>
      <PlusButton />
    </Box>
  );
};

export default List;

const Box = styled.div`
  display: flex;
  align-items: flex-end;

  padding: 12px 0;
  width: 100%;
  height: 100px;

  border-bottom: 1px dashed #ffffff;
`;

const Title = styled.h2`
  width: 500px;

  font-family: 'neurimbo Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  color: #ffffff;

  strong {
    color: ${theme.colors.핑쿠핑크};
  }
`;

const Content = styled.p`
  flex: 1;
  line-height: 140%;
  color: #ffffff;
`;

const PlusButton = () => {
  return (
    <button
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 32px;
        height: 32px;

        background-color: ${theme.colors.핑쿠핑크};
      `}
    >
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 1V15'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M1 8H15'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </button>
  );
};

const MinusButton = () => {
  return (
    <button
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 32px;
        height: 32px;

        background-color: ${theme.colors.연한쁠루블루};
      `}
    >
      <svg
        width='16'
        height='2'
        viewBox='0 0 16 2'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1H15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </button>
  );
};
