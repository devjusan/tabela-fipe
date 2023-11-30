import { Model, ModelCurrentValue } from '@/src/app/types';
import urls from '@/src/constants/urls';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  context: { params: { details: string } }
) {
  const { details } = context.params;
  const [brandId, modelId, year] = details.split('@');

  const brands = (await fetch(urls.GET_BRANDS).then((res) =>
    res.json()
  )) as Array<Model>;

  const brandModels =
    brandId && brandId.length > 0
      ? ((await fetch(urls.GET_BRAND_CARS(Number(brandId))).then((res) =>
          res.json()
        )) as {
          modelos: Array<Model>;
          anos: Array<Model>;
        })
      : null;
  const brandModelYears =
    brandId && brandId.length > 0 && modelId && modelId.length > 0
      ? ((await fetch(urls.GET_CAR_YEAR(Number(brandId), Number(modelId))).then(
          (res) => res.json()
        )) as Array<Model>)
      : null;
  const carDetails =
    brandId &&
    brandId.length &&
    modelId &&
    modelId.length &&
    year &&
    year.length
      ? ((await fetch(
          urls.GET_CAR_DETAILS(Number(brandId), Number(modelId), Number(year))
        ).then((res) => res.json())) as ModelCurrentValue)
      : null;

  return NextResponse.json({
    brands,
    brandModels,
    brandModelYears,
    carDetails
  });
}
