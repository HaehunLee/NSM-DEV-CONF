import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import Button from './atoms/Button';
import { IconLogo } from './atoms/icons';
import { MyStudiesState } from '../stores/studiesStore';
import { theme } from '../styles/theme';

const Header = () => {
  const router = useRouter();
  const myList = useRecoilValue(MyStudiesState);

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <Title>
      <Content>
        <IconLogo onClick={handleLogoClick} />
        <RightArea>
          <Link href='/my-list'>
            <Button design='핑쿠핑크'>{`내 강의 {${myList?.length}}`}</Button>
          </Link>
          <Link href='/list'>
            <Button>강의 목록</Button>
          </Link>
        </RightArea>
      </Content>
      <Line />
    </Title>
  );
};

export default Header;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100px;

  > svg {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
`;

const RightArea = styled.div`
  display: flex;
  gap: 12px;
`;

const Line = styled.div`
  width: 100%;
  background-color: ${theme.colors.핑쿠핑크};
  height: 1px;
`;
