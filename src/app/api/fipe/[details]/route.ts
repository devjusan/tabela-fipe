import { Model, ModelCurrentValue } from '@/src/app/types';
import urls from '@/src/constants/urls';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  context: { params: { details: string } }
) {
  const { details } = context.params;
  const [brandId, modelId, year] = details.split('@');

  if (!brandId || !modelId || !year) {
    const brands = (await fetch(urls.GET_BRANDS).then((res) =>
      res.json()
    )) as Array<Model>;

    return NextResponse.json({
      item: brands
    });
  }

  if (brandId) {
    const brandCars = (await fetch(urls.GET_BRAND_CARS(Number(brandId))).then(
      (res) => res.json()
    )) as Array<Model>;

    return NextResponse.json({
      item: brandCars
    });
  }

  if (brandId && modelId) {
    const carYear = (await fetch(
      urls.GET_CAR_YEAR(Number(brandId), Number(modelId))
    ).then((res) => res.json())) as Array<Model>;

    return NextResponse.json({
      item: carYear
    });
  }

  if (brandId && modelId && year) {
    const carValue = (await fetch(
      urls.GET_CAR_DETAILS(Number(brandId), Number(modelId), Number(year))
    ).then((res) => res.json())) as ModelCurrentValue;

    return NextResponse.json({
      item: carValue
    });
  }
}
