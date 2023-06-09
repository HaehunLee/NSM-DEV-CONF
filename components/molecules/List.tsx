import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

import useCheckMyList from '../../hooks/useCheckMyList';
import { StudyModel } from '../../interfaces';
import { theme } from '../../styles/theme';

interface ListProps {
  item: StudyModel;
}

const List = ({ item }: ListProps) => {
  const router = useRouter();

  const { isAdded, onAdded, onInAdded } = useCheckMyList(item.id);

  const handleAdded: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onAdded(item);
  };
  const handleInAdded: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onInAdded(item);
  };

  return (
    <Box onClick={() => router.push(`/detail/${item.id}`)}>
      <Title>
        <strong>{item.category}&nbsp;</strong>
        {item.name}
      </Title>
      <Content>{item.description}</Content>
      {isAdded ? (
        <MinusButton onInAdded={handleInAdded} />
      ) : (
        <PlusButton onAdded={handleAdded} />
      )}
    </Box>
  );
};

export default List;

const Box = styled.div`
  cursor: pointer;
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

const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  background-color: ${theme.colors.핑쿠핑크};
`;

const PlusButton = ({
  onAdded,
}: {
  onAdded: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <ActionButton onClick={onAdded}>
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
    </ActionButton>
  );
};

const MinusButton = ({
  onInAdded,
}: {
  onInAdded: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <ActionButton onClick={onInAdded}>
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
    </ActionButton>
  );
};
