export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
};

const baseURL = "https://target1.p.rapidapi.com/";

export const getCategoriesList = () => `${baseURL}categories/list`;

export const getSelectedCategoryData = (category) => {
  console.log(`${baseURL}categories/list?category=${category}`);
  return `${baseURL}categories/list?category=${category}`;
};

export const getProductsList = (category) =>
  `${baseURL}products/v2/list?store_id=911&category=${category}&default_purchasability_filter=true&sort_by=relevance`;

export const getProductDetails = (tcin) =>
  `${baseURL}products/v3/get-details?tcin=${tcin}&store_id=911`;

export const getSearchedProductsList = (keyword) =>
  `${baseURL}products/v2/list?store_id=911&keyword=${keyword}&default_purchasability_filter=true&sort_by=relevance`;
