import { modelsResponse } from "./mockedData";
import { delay } from "./utils";

export const getModels = async () => {
  let loading = true;
  let data = [];

  await delay(1000);
  data = modelsResponse;
  loading = false;

  return { data, loading };
};
