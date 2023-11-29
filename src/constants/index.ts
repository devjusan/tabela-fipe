const BASE_URL = 'https://parallelum.com.br/fipe/api/v1';

export default {
  GET_CARS: `${BASE_URL}/carros/marcas`,
  GET_BRAND_CARS: (brandId: number) =>
    `${BASE_URL}/carros/marcas/${brandId}/modelos`,
  GET_CAR_YEAR: (brandId: number, modelId: number) =>
    `${BASE_URL}/carros/marcas/${brandId}/modelos/${modelId}/anos`
};
