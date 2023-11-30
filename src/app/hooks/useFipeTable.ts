import useSWR, { KeyedMutator } from 'swr';
import { fetcher } from '../lib/config';
import { ModelCurrentValue, Model } from '@app/types';

const useFipeTable = ({
  brandId,
  modelId,
  year
}: {
  brandId?: string | null;
  modelId?: string | null;
  year?: string | null;
}) => {
  const details = `${brandId ?? ''}@${modelId ?? ''}@${year ?? ''}`;

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
          brands: Array<Model> | null;
          brandModels: {
            modelos: Array<Model>;
            anos: Array<Model>;
          } | null;
          brandModelYears: Array<Model> | null;
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

export default useFipeTable;
