import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { css } from '@emotion/react';
import Dropdown from '../components/molecules/Dropdown';
import InputGroup from '../components/molecules/Input';
import { IconSearch } from '../components/atoms/icons';
import List from '../components/molecules/List';
import { useStuides } from '../hooks/queries/studiesQuery';
import { useRouter } from 'next/router';
import { ChangeEventHandler, useEffect, useState } from 'react';

const ListPage = () => {
  const { data, isLoading } = useStuides();
  const { query, push } = useRouter();

  const category = (query?.category as 'FE' | 'BE' | 'APP') || undefined;
  const search = (query?.search as string) || undefined;

  const [timer, setTimer] = useState<number | null>(null);
  const [keyword, setKeyword] = useState(search);

  const handleCategoryChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    push({
      pathname: '/list',
      query: {
        category: e.currentTarget.value,
      },
    });
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.currentTarget.value);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      window.setTimeout(() => {
        push({
          pathname: '/list',
          query: {
            ...query,
            search: keyword,
          },
        });
        setTimer(null);
      }, 250),
    );
  }, [keyword]);

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
          <Dropdown onChange={handleCategoryChange} value={category}>
            <option value=''>전체</option>
            <option value='FE'>FE</option>
            <option value='BE'>BE</option>
            <option value='APP'>APP</option>
          </Dropdown>
          <InputGroup
            placeholder='검색하세요.'
            value={keyword}
            onChange={handleSearchChange}
            rightIcon={<IconSearch width='18px' height='18px' />}
          />
        </ListHeader>
        {isLoading ? (
          <div>loading..</div>
        ) : (
          data?.payload?.map((item) => <List key={item.id} item={item} />)
        )}
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
