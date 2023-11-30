import { Model } from '@/src/app/types';
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
      ? ((await fetch(urls.GET_BRAND_CARS(brandId)).then((res) =>
          res.json()
        )) as {
          modelos: Array<Model>;
          anos: Array<Model>;
        })
      : null;
  const brandModelYears =
    brandId && brandId.length > 0 && modelId && modelId.length > 0
      ? ((await fetch(urls.GET_CAR_YEAR(brandId, modelId)).then((res) =>
          res.json()
        )) as Array<Model>)
      : null;

  return NextResponse.json({
    brands,
    brandModels,
    brandModelYears
  });
}
