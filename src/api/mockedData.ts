export const modelsResponse = [
  {
    model_version: 1,
    ts_start: 1703091540.9751942,
    ts_end: 1703091934.965811,
    num_categorical: 0,
    job_id: "126897e6-9f59-ab67",
    model_type: "Regression",
    num_continuous: 4,
    model_name: "Cortana",
    sk: "MD#2AB9E28F-4549-BFBF",
    ts_updated: 1703091934.965811,
    pk: "1",
  },
  {
    model_version: 1,
    ts_start: 1702662316.8783634,
    ts_end: 1702680209.9394238,
    num_categorical: 0,
    job_id: "b507c0bc-9b71-9e37",
    model_type: "Classification",
    num_continuous: 10,
    model_name: "Jarvis",
    sk: "MD#3778AF46-487D-B908",
    ts_updated: 1702680209.9394238,
  },
  {
    model_version: 1,
    ts_start: 1702662316.8783634,
    ts_end: 1702680209.9394238,
    num_categorical: 0,
    job_id: "b507c0bc-9b71-asd9",
    model_type: "Classification",
    num_continuous: 10,
    model_name: "Copilot",
    sk: "MD#3778AF46-487D-B909",
    ts_updated: 1702680209.9394238,
  },
];

export const analysisResponse = [
  [
    {
      origin: "dd",
      value: ["SepalLengthCm", "SepalWidthCm", "PetalLengthCm", "PetalWidthCm"],
      insight_name: "feature_list",
      name: "dd_feature_list",
    },
    {
      origin: "sd_cm",
      value: {
        PetalWidthCm: 0.35805864148438127,
        SepalWidthCm: 0.06840044886502064,
        PetalLengthCm: 0.36509329889013475,
        SepalLengthCm: 0.20844761076046325,
      },
      insight_name: "variable_ranking",
      name: "sd_cm_variable_ranking",
    },
    {
      origin: "td_cm",
      value: {
        PetalWidthCm: 0.30667604501235934,
        SepalWidthCm: 0.14623438697581495,
        PetalLengthCm: 0.37298511548927343,
        SepalLengthCm: 0.17410445252255233,
      },
      insight_name: "variable_ranking",
      name: "td_cm_variable_ranking",
    },
    {
      origin: "td",
      value: {
        PetalWidthCm: 0.5031687260884115,
        SepalWidthCm: 0,
        PetalLengthCm: 0.49683127391158854,
        SepalLengthCm: 0,
      },
      insight_name: "variable_ranking",
      name: "td_variable_ranking",
    },
  ],
];
