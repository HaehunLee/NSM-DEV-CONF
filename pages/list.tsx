import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { css } from '@emotion/react';
import Dropdown from '../components/molecules/Dropdown';
import InputGroup from '../components/molecules/Input';
import { IconSearch } from '../components/atoms/icons';
import List from '../components/molecules/List';

const ListPage = () => {
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
        CONF.
        <br />
        <strong>LIST</strong>
      </H1>
      <Content>
        <ListHeader>
          <Dropdown>
            <option>전체</option>
          </Dropdown>
          <InputGroup
            placeholder='검색하세요.'
            rightIcon={<IconSearch width='18px' height='18px' />}
          />
        </ListHeader>
        <List />
        <List />
      </Content>
    </div>
  );
};

export default ListPage;

const H1 = styled.h1`
  font-family: 'neurimbo Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 160px;
  line-height: 79%;
  /* or 126px */

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
