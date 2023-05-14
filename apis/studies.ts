import instance from './instance';
import { ApiReponse, StudyDetailModel, StudyModel } from '../interfaces';

export const getStudiesAPI = async ({
  category,
  search,
}: {
  category?: 'FE' | 'BE' | 'APP';
  search?: string;
}) => {
  try {
    const res: ApiReponse<{ meta: { total: number } }, StudyModel[]> =
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

export const getStudiesDetailAPI = async ({ id }: { id: number }) => {
  try {
    const res: ApiReponse<null, StudyDetailModel> = await instance.get(
      `/studies/${id}`,
    );
    return res;
  } catch (e) {
    console.log('getStudiesDetailAPI Error:', e);
    throw e;
  }
};
