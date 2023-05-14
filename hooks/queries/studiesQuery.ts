import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getStudiesAPI, getStudiesDetailAPI } from '../../apis/studies';

export const useStuides = () => {
  const { query } = useRouter();

  const category = (query?.category as 'FE' | 'BE' | 'APP') || undefined;
  const search = (query?.search as string) || undefined;

  return useQuery(['STUDIES', category, search], () =>
    getStudiesAPI({
      search,
      category,
    }),
  );
};

export const useStudiesDetail = () => {
  const { query } = useRouter();

  const id = Number(query?.id);

  return useQuery(['DETAIL', id], () =>
    getStudiesDetailAPI({
      id,
    }),
  );
};
