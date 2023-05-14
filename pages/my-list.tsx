import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import List from '../components/molecules/List';
import Spinner from '../components/molecules/Spinner';
import useMounted from '../hooks/useMounted';
import { MyStudiesState } from '../stores/studiesStore';
import { theme } from '../styles/theme';

const MyListPage = () => {
  const mounted = useMounted();
  const myList = useRecoilValue(MyStudiesState);

  if (!mounted) return <Spinner size='50px' />;
  return (
    <Wrapper>
      <h1>
        MY
        <br />
        <strong>{`CONF {${myList?.length}}`}</strong>
      </h1>
      <Content>
        {myList?.length === 0 ? (
          <div>없는데요?</div>
        ) : (
          myList?.map((item) => <List key={item.id} item={item} />)
        )}
      </Content>
    </Wrapper>
  );
};

export default MyListPage;

const Wrapper = styled.div`
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  gap: 60px;

  > h1 {
    font-family: 'neurimbo Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 160px;
    line-height: 79%;

    color: #ffffff;

    strong {
      color: ${theme.colors.핑쿠핑크};
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
