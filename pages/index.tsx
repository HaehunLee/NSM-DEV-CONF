import BgText from '../components/organisms/BgText';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const IndexPage = () => (
  <Wrapper>
    <TitleArea>
      <div>
        <h1>
          MEET
          <br />
          <strong>NEW</strong>
          <br />
          DEVELOP
        </h1>
      </div>
      <Col>
        <h5>
          NSM
          <br />
          23.05.14 16:00
          <br />
          <br />
          <strong>상금 100,000원</strong>
        </h5>
      </Col>
    </TitleArea>
    <BgText />
  </Wrapper>
);

export default IndexPage;

const Wrapper = styled.div`
  position: relative;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;

  position: absolute;
  top: 100px;

  color: #ffffff;
  font-family: 'neurimbo Gothic';
  font-weight: 400;

  h1 {
    font-size: 160px;
    line-height: 79%;
    strong {
      color: ${theme.colors.핑쿠핑크};
    }
  }

  h5 {
    font-size: 32px;
    line-height: 100%;
    strong {
      font-size: 18px;
      line-height: 100%;
    }
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
