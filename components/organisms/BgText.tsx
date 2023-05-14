import { css } from '@emotion/react';
import styled from '@emotion/styled';

const BgText = () => {
  return (
    <div
      css={css`
        position: absolute;
        width: 914px;
        height: 672px;
      `}
    >
      <Text
        css={css`
          left: 0px;
        `}
      >
        NSM
        <br />
        <strong>DEV</strong>
        <br />
        CONF.
      </Text>
      <Text
        css={css`
          left: 59px;
        `}
      >
        NSM
        <br />
        <strong>DEV</strong>
        <br />
        CONF.
      </Text>
      <Text
        css={css`
          left: 114px;
        `}
      >
        NSM
        <br />
        <strong>DEV</strong>
        <br />
        CONF.
      </Text>
    </div>
  );
};

export default BgText;

const Text = styled.span`
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
`;
