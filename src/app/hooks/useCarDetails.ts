import useSWR, { KeyedMutator } from 'swr';
import { fetcher } from '../lib/config';
import { ModelCurrentValue, Model } from '@app/types';

const useCarDetails = (details: string) => {
  const { data, error, isLoading, mutate } = useSWR<
    { item: ModelCurrentValue | Array<Model> },
    Error
  >(`/api/fipe/${details}`, fetcher);

  return {
    data,
    isLoading,
    error,
    mutate
  } as {
    data:
      | {
          carDetails: ModelCurrentValue | null;
        }
      | undefined;
    isLoading: boolean;
    error: Error | undefined;
    mutate: KeyedMutator<{
      item: ModelCurrentValue | Array<Model>;
    }>;
  };
};

export default useCarDetails;
