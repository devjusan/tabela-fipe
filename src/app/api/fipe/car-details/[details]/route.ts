import { Model, ModelCurrentValue } from '@/src/app/types';
import urls from '@/src/constants/urls';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  context: { params: { details: string } }
) {
  const { details } = context.params;
  const [brandId, modelId, year] = details.split('@');
  const carDetails = (await fetch(
    urls.GET_CAR_DETAILS(brandId, modelId, year)
  ).then((res) => res.json())) as ModelCurrentValue;

  return NextResponse.json({
    carDetails
  });
}
