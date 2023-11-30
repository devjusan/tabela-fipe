import useSWR from 'swr';
import { fetcher } from '../lib/config';
import { ModelCurrentValue, Model } from '@app/types';

const useFipeTable = ({
  brandId,
  modelId,
  year
}: {
  brandId: string | null;
  modelId: string | null;
  year: number | null;
}) => {
  const details = `${brandId ?? ''}@${modelId ?? ''}@${year ?? ''}`;

  const { data, error, isLoading } = useSWR<
    { item: ModelCurrentValue | Array<Model> },
    Error
  >(`/api/fipe/${details}`, fetcher);

  if (brandId && modelId && year) {
    return {
      data,
      isLoading,
      error
    } as {
      data: { item: ModelCurrentValue } | undefined;
      isLoading: boolean;
      error: Error | undefined;
    };
  }

  return {
    data,
    isLoading,
    error
  } as {
    data: { item: Array<Model> } | undefined;
    isLoading: boolean;
    error: Error | undefined;
  };
};

export default useFipeTable;
