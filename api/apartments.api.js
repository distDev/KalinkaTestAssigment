import { formatQuery } from "~/helpers/format-query.js";
import { parseLinkHeader } from "~/helpers/parge-link-header.js";

export class ApartmentsApi {
  static async getApartmentList({ page, types, price, sort }) {
    const searchQuery = formatQuery({ page, types, price, sort });

    try {
      const response = await $fetch.raw(searchQuery);
      const totalCount = response.headers.get("X-Total-Count");
      const linkHeader = response.headers.get("Link");
      const links = parseLinkHeader(linkHeader);
      const data = response._data;

      return {
        data,
        totalCount,
        links,
      };
    } catch (error) {
      console.error("Не удалось загрузить апартаменты:", error);
    }
  }

  static async getApartment(id) {
    try {
      const config = useRuntimeConfig();
      const searchQuery = `${config.public.apiBase}/apartments/${id}`;

      return await $fetch(searchQuery);
    } catch (error) {
      console.error("Не удалось загрузить апартаменты:", error);
    }
  }
}
