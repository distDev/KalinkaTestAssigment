export const formatQuery = ({ page, types, price, sort }) => {
  const config = useRuntimeConfig();

  let priceQuery = "";
  if (price.min) {
    priceQuery += `price_gte=${price.min}&`;
  }
  if (price.max) {
    priceQuery += `price_lte=${price.max}&`;
  }

  let typesQuery = "";
  if (types?.length) {
    typesQuery = types.map((type) => `type=${type}`).join("&") + "&";
  }

  return `${config.public.apiBase}/apartments?_page=${page}&_limit=5&${priceQuery}${typesQuery}_sort=${sort}`;
};
