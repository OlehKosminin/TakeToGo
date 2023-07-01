import axios from "axios";

const instance = axios.create({
  baseURL: "https://eliftece-back-end.onrender.com",
  // baseURL: "http://localhost:3000/",
});

type ShopParam = {
  shop: string;
};

export const getProducts = async ({ shop }: ShopParam): Promise<any> => {
  const result = await instance.get(`/api/products/${shop}`);
  return result;
};

export const getProductsById = async (products: string[]): Promise<{}> => {
  const result = await instance.post(`/api/products/`, products);
  return result;
};

export default instance;
