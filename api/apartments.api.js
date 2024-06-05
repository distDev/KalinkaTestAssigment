import { formatQuery } from "~/helpers/format-query.js";

export class ApartmentsApi {
  static async getApartmentList({ page, types, price, sort }) {
    const searchQuery = formatQuery({ page, types, price, sort });

    return $fetch(searchQuery);
  }

  static async getApartment(id) {
    const searchQuery = `http://localhost:4000/apartments/${id}`;

    return $fetch(searchQuery);
  }
}
