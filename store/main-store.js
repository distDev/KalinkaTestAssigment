import { defineStore } from "pinia";
import { ApartmentsApi } from "~/api/apartments.api.js";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      filters: {
        page: 1,
        sort: "price",
        price: {
          min: null,
          max: null,
        },
        types: [],
      },
      apartment: null,
      apartmentList: {
        data: null,
        totalCount: 0,
        links: 0,
        isLoading: false,
      },
      lang: "ru",
    };
  },
  actions: {
    async getApartments() {
      this.apartmentList.isLoading = true;

      const { data, totalCount, links } = await ApartmentsApi.getApartmentList({
        page: this.filters.page,
        types: this.filters.types,
        price: this.filters.price,
        sort: this.filters.sort,
      });

      this.apartmentList.data = data;
      this.apartmentList.totalCount = totalCount;
      this.apartmentList.links = links;

      this.apartmentList.isLoading = false;
    },

    async changePage(page) {
      this.filters.page = page;
      await this.getApartments();
    },

    async searchApartments(filters) {
      this.filters = filters;
      await this.getApartments();
    },

    async getApartment(id) {
      this.apartment = await ApartmentsApi.getApartment(id)
    },

    switchLang(lang) {
      this.lang = lang;
    },
  },
});
