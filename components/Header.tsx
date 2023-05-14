import styled from '@emotion/styled';
import { IconLogo } from './atoms/icons';
import Button from './atoms/Button';

const Header = () => {
  return (
    <Title>
      <IconLogo />
      <RightArea>
        <Button design='핑쿠핑크'>내 강의</Button>
        <Button>강의 목록</Button>
      </RightArea>
    </Title>
  );
};

export default Header;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100px;

  padding: 0 160px;
`;

const RightArea = styled.div`
  display: flex;
  gap: 12px;
`;
