import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { css } from '@emotion/react';
import { StudyModel } from '../../interfaces';
import { useEffect, useState } from 'react';

interface ListProps {
  item: StudyModel;
}

const List = ({ item }: ListProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdded = () => {
    setIsAdded(true);
  };
  const handleInAdded = () => {
    setIsAdded(false);
  };

  useEffect(() => {
    const strPrevList = localStorage.getItem('myList');
    if (strPrevList) {
      let prevList = JSON.parse(strPrevList);

      if (prevList) {
        const prev = prevList.find((prevItem) => prevItem.id === item.id);
        if (prev) {
          setIsAdded(true);
        }
      }
    }
  }, []);

  return (
    <Box>
      <Title>
        <strong>{item.category}&nbsp;</strong>
        {item.name}
      </Title>
      <Content>{item.description}</Content>
      {isAdded ? (
        <MinusButton item={item} onInAdded={handleInAdded} />
      ) : (
        <PlusButton item={item} onAdded={handleAdded} />
      )}
    </Box>
  );
};

export default List;

const Box = styled.div`
  display: flex;
  align-items: flex-end;

  padding: 12px 0;
  width: 100%;
  height: 100px;

  border-bottom: 1px dashed #ffffff;
`;

const Title = styled.h2`
  width: 500px;

  font-family: 'neurimbo Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  color: #ffffff;

  strong {
    color: ${theme.colors.핑쿠핑크};
  }
`;

const Content = styled.p`
  flex: 1;
  line-height: 140%;
  color: #ffffff;
`;

const PlusButton = ({
  item,
  onAdded,
}: {
  item: StudyModel;
  onAdded: () => void;
}) => {
  const handleClick = () => {
    const strPrevList = localStorage.getItem('myList');
    let prevList = [];
    if (strPrevList) {
      prevList = JSON.parse(strPrevList);

      if (prevList) {
        prevList.push(item);
      } else {
        prevList = [item];
      }
    } else {
      prevList = [item];
    }

    localStorage.setItem('myList', JSON.stringify(prevList));
    onAdded();
  };
  return (
    <button
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 32px;
        height: 32px;

        background-color: ${theme.colors.핑쿠핑크};
      `}
      onClick={handleClick}
    >
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 1V15'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1 8H15'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

const MinusButton = ({
  item,
  onInAdded,
}: {
  item: StudyModel;
  onInAdded: () => void;
}) => {
  const handleClick = () => {
    const confirmed = confirm('담은 강의를 취소하시겠습니까?');
    if (confirmed) {
      const strPrevList = localStorage.getItem('myList');
      let prevList = [];
      if (strPrevList) {
        prevList = JSON.parse(strPrevList);

        if (prevList) {
          const newList = prevList.filter((prev) => prev.id !== item.id);
          localStorage.setItem('myList', JSON.stringify(newList));
          onInAdded();
        }
      }
    }
  };

  return (
    <button
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 32px;
        height: 32px;

        background-color: ${theme.colors.연한쁠루블루};
      `}
      onClick={handleClick}
    >
      <svg
        width='16'
        height='2'
        viewBox='0 0 16 2'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1H15'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};
