import { css, Global } from '@emotion/react';
import { theme } from './theme';

const style = css`
  @font-face {
    font-family: 'neurimbo Gothic';
    font-weight: 400;
    src: url('/fonts/neurimboGothicRegular.otf') format('opentype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url('/fonts/Pretendard-Medium.otf') format('opentype');
    font-display: fallback;
  }

  /* reset.css */
  * {
    font-family: Pretendard, sans-serif;
    margin: 0;
    padding: 0;
    font: inherit;
    line-height: 100%;
    box-sizing: border-box;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
    white-space: pre-wrap;
  }
  html,
  body,
  #__next {
    height: 100%;
    font-family: Pretendard, sans-serif;
    scroll-behavior: smooth;
    background-color: ${theme.colors.쁠류블루};
    color: black;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button,
  hr {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    appearance: textfield;
  }
  textarea {
    background-color: transparent;
  }
  /* reset.css end */

  svg[fill='none'] > path[fill='current'] {
    fill: ${theme.colors.핑쿠핑크};
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
