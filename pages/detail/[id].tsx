import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import List from '../../components/molecules/List';
import { theme } from '../../styles/theme';
import { NextPageContext } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { getStudiesDetailAPI } from '../../apis/studies';
import { ApiReponse, StudyDetailModel } from '../../interfaces';
import { useStudiesDetail } from '../../hooks/queries/studiesQuery';
import Button from '../../components/atoms/Button';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import useCheckMyList from '../../hooks/useCheckMyList';

const DetailPage = () => {
  const { query } = useRouter();
  const id = parseInt((query?.id as string) || '');
  const { data, isLoading } = useStudiesDetail();

  const detail = data?.payload;

  const { isAdded, onAdded, onInAdded } = useCheckMyList(id);

  const handleToggle = () => {
    if (isAdded) onInAdded(detail);
    else onAdded(detail);
  };

  if (isLoading) return <div>loading...</div>;
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
        <strong>{detail.category}</strong>
        <br />
        {detail.name}
      </H1>
      <Content>
        <Button onClick={handleToggle} design='핑쿠핑크'>{`강의 ${
          isAdded ? '제거' : '담기'
        }`}</Button>
        <div
          css={css`
            width: 100%;
            height: 1px;
            background-color: #ffffff;
          `}
        />
        <Item>
          <span>소개</span>
          <span>{detail.description}</span>
        </Item>
        <Item>
          <span>시간</span>
          <span>
            {`${dayjs(detail.startDateTime).format('MM.DD HH:mm')} ~ ${dayjs(
              detail.endDateTime,
            ).format('HH:mm')}`}
          </span>
        </Item>
        <Item>
          <span>강사</span>
          <span>
            {detail.speaker.map(
              (speaker, index) =>
                `${speaker}${index !== detail.speaker.length - 1 ? ', ' : ''}`,
            )}
          </span>
        </Item>
        <Item>
          <span>기술 스택</span>
          <span>
            {detail.stack.map(
              (stack, index) =>
                `${stack}${index !== detail.stack.length - 1 ? ', ' : ''}`,
            )}
          </span>
        </Item>
      </Content>
    </div>
  );
};

export default DetailPage;

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const id = Number(context.query?.id);

  if (id) {
    await queryClient.prefetchQuery(['DETAIL', id], () =>
      getStudiesDetailAPI({ id }),
    );
  }

  const detailData = queryClient.getQueryData(['DETAIL', id]) as ApiReponse<
    null,
    StudyDetailModel
  >;

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      title:
        `${detailData.payload.category} ${detailData.payload.name}` || '강의명',
      description: detailData.payload.description || '강의설명',
      pageImage:
        'https://raw.githubusercontent.com/dus532/storage_home/main/thumb.png',
    },
  };
}

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

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  border-bottom: 1px dashed #ffffff;

  > :nth-of-type(n) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    flex: 1;
  }
  > :first-of-type {
    font-weight: 700;
    width: 100px;
    flex: initial;
  }
`;
