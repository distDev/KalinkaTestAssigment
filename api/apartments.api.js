export class ApartmentsApi {
  static async getApartments({ page, types, price, sort }) {
    let priceQuery = "";
    if (price.min !== null) {
      priceQuery += `price_gte=${price.min}&`;
    }
    if (price.max !== null) {
      priceQuery += `price_lte=${price.max}&`;
    }

    let typesQuery = "";
    if (types?.length) {
      typesQuery = types.map((type) => `type[0]=${type}`).join("&") + "&";
    }

    // в новой версии json server сортировка через desc/asc не работает...
    let sortQuery = "_sort=price";
    if (sort === "desc") {
      sortQuery = "_sort=-price";
    }

    return useFetch(
      `http://localhost:4000/apartments?_page=${page}&_per_page=5&${priceQuery}${typesQuery}${sortQuery}`,
    );
  }
}
