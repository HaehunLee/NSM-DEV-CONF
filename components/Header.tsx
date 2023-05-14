import styled from '@emotion/styled';
import { IconLogo } from './atoms/icons';
import Button from './atoms/Button';
import { theme } from '../styles/theme';
import Link from 'next/link';

const Header = () => {
  return (
    <Title>
      <Content>
        <IconLogo />
        <RightArea>
          <Link href='/my-list'>
            <Button design='핑쿠핑크'>내 강의</Button>
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
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
