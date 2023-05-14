import { ApiReponse, StudyModel } from '../interfaces';
import instance from './instance';

export const getStudiesAPI = async ({
  category,
  search,
}: {
  category?: 'FE' | 'BE' | 'APP';
  search?: string;
}) => {
  try {
    const res: ApiReponse<{ meta: { total: Number } }, StudyModel> =
      await instance.get('/studies', {
        params: {
          category,
          search,
        },
      });
    return res;
  } catch (e) {
    console.log('getStudiesAPI Error:', e);
    throw e;
  }
};
