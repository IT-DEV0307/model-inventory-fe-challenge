import { analysisResponse, modelsResponse } from "./mockedData";
import { delay } from "./utils";

const modelNames = modelsResponse.map((model) => model.model_name);

export const getAnalysis = async (modelName: string) => {
  let loading = true;
  let data = [];

  await delay(1000);

  console.log(modelNames, modelName, modelNames.includes(modelName));
  if (!modelNames.includes(modelName)) {
    data = [null];
    loading = false;

    return { data, loading };
  }

  data = analysisResponse;
  loading = false;

  return { data, loading };
};
