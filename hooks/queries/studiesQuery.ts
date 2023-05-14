import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getStudiesAPI } from '../../apis/studies';

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
