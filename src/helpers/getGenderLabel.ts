import { ApiGender, isDefinedGender, Gender } from '@/utils/types';

export const getGenderLabel = (apiGender: ApiGender) => {
  if (!isDefinedGender(apiGender)) {
    return 'other';
  }
  return apiGender.toLocaleLowerCase() as Gender;
};
