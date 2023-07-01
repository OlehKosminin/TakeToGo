import instance from "./shop";

export const getAllHistory = async () => {
  const result = await instance.get(`/api/history/`);
  return result;
};

export const updHistory = async (data: any): Promise<any> => {
  const result = await instance.post(`/api/history/upd-history`, data);
  return result;
};

export const getHistoryByNumber = async (phone: any): Promise<any> => {
  const result = await instance.get(`/api/history/${phone}`);
  return result;
};
