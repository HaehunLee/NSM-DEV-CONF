import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { IconSearch } from '../components/atoms/icons';
import Dropdown from '../components/molecules/Dropdown';
import InputGroup from '../components/molecules/InputGroup';
import List from '../components/molecules/List';
import Spinner from '../components/molecules/Spinner';
import { useStuides } from '../hooks/queries/studiesQuery';
import { theme } from '../styles/theme';

const ListPage = () => {
  const { data, isLoading } = useStuides();
  const { query, push } = useRouter();

  const category = (query?.category as 'FE' | 'BE' | 'APP') || undefined;
  const search = (query?.search as string) || '';

  const timerRef = useRef<number>(null);
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

  const handleSearch = useCallback(() => {
    push({
      pathname: '/list',
      query: {
        ...query,
        search: keyword,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      handleSearch();
    }, 250);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [handleSearch, keyword]);

  return (
    <Wrapper>
      <h1>
        CONF.
        <br />
        <strong>LIST</strong>
      </h1>
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
            onClick={handleSearch}
            rightIcon={<IconSearch width='18px' height='18px' />}
          />
        </ListHeader>
        {isLoading ? (
          <Spinner size='50px' />
        ) : (
          data?.payload?.map((item) => <List key={item.id} item={item} />)
        )}
      </Content>
    </Wrapper>
  );
};

export default ListPage;

const Wrapper = styled.div`
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  gap: 60px;

  > h1 {
    font-family: 'neurimbo Gothic';
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

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
