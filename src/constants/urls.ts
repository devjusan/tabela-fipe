const BASE_URL = 'https://parallelum.com.br/fipe/api/v1';

export default {
  GET_BRANDS: `${BASE_URL}/carros/marcas`,
  GET_BRAND_CARS: (brandId: string) =>
    `${BASE_URL}/carros/marcas/${brandId}/modelos`,
  GET_CAR_YEAR: (brandId: string, modelId: string) =>
    `${BASE_URL}/carros/marcas/${brandId}/modelos/${modelId}/anos`,
  GET_CAR_DETAILS: (brandId: string, modelId: string, year: string) =>
    `${BASE_URL}/carros/marcas/${brandId}/modelos/${modelId}/anos/${year}`
};
