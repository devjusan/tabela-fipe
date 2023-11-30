import { Model, ModelCurrentValue } from '@/src/app/types';
import urls from '@/src/constants/urls';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  context: { params: { details: string } }
) {
  const { details } = context.params;
  const [brandId, modelId, year] = details.split('@');
  const carDetails =
    brandId &&
    brandId.length &&
    modelId &&
    modelId.length &&
    year &&
    year.length
      ? ((await fetch(urls.GET_CAR_DETAILS(brandId, modelId, year)).then(
          (res) => res.json()
        )) as ModelCurrentValue)
      : null;

  return NextResponse.json({
    carDetails
  });
}
