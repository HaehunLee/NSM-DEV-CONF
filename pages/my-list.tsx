import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { css } from '@emotion/react';
import List from '../components/molecules/List';
import { useRecoilValue } from 'recoil';
import { MyStudiesState } from '../stores/studiesStore';

const MyListPage = () => {
  const myList = useRecoilValue(MyStudiesState);

  return (
    <div
      css={css`
        padding: 60px 0;

        display: flex;
        flex-direction: column;
        gap: 60px;
      `}
    >
      <H1>
        MY
        <br />
        <strong>{`CONF {${myList?.length}}`}</strong>
      </H1>
      <Content>
        {myList?.map((item) => (
          <List key={item.id} item={item} />
        ))}
      </Content>
    </div>
  );
};

export default MyListPage;

const H1 = styled.h1`
  font-family: 'neurimbo Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 160px;
  line-height: 79%;

  color: #ffffff;

  strong {
    color: ${theme.colors.핑쿠핑크};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
