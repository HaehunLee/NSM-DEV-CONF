import { css } from '@emotion/react';
import styled from '@emotion/styled';

const BgText = () => {
  return (
    <Wrapper>
      <Text>
        NSM
        <br />
        <strong>DEV</strong>
        <br />
        CONF.
      </Text>
      <Text left='59px'>
        NSM
        <br />
        <strong>DEV</strong>
        <br />
        CONF.
      </Text>
      <Text left='114px'>
        NSM
        <br />
        <strong>DEV</strong>
        <br />
        CONF.
      </Text>
    </Wrapper>
  );
};

export default BgText;

const Wrapper = styled.div`
  position: absolute;
  width: 914px;
  height: 672px;
`;

const Text = styled.span<{ left?: string }>`
  position: absolute;
  width: 800px;
  height: 672px;

  font-family: 'neurimbo Gothic';
  font-weight: 400;
  font-size: 280px;
  line-height: 80%;

  color: #ffffff;

  mix-blend-mode: overlay;
  opacity: 0.15;

  strong {
    color: black;
  }

  ${({ left }) =>
    left
      ? css`
          left: ${left};
        `
      : css`
          left: 0px;
        `}
`;
