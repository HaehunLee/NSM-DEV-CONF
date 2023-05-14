import BgText from '../components/organisms/BgText';
import Button from '../components/atoms/Button';
import { IconSearch } from '../components/atoms/icons';
import Dropdown from '../components/molecules/Dropdown';
import InputGroup from '../components/molecules/Input';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { css } from '@emotion/react';

const IndexPage = () => (
  <div
    css={css`
      position: relative;
    `}
  >
    <TitleArea>
      <div>
        <h1>MEET</h1>
        <h1>
          <strong>NEW</strong>
        </h1>
        <h1>DEVELOP</h1>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h5>
          NSM
          <br />
          23.05.14 16:00
        </h5>
        <h6>
          <br />
          상금 100,000원
        </h6>
      </div>
    </TitleArea>
    <BgText />
  </div>
);

export default IndexPage;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;

  position: absolute;
  top: 100px;

  color: #ffffff;

  h1 {
    font-family: 'neurimbo Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 160px;
    line-height: 79%;

    strong {
      color: ${theme.colors.핑쿠핑크};
    }
  }

  h5 {
    font-family: 'neurimbo Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
  }
  h6 {
    font-family: 'neurimbo Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
  }
`;
