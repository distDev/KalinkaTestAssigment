// stores/counter.js
import { defineStore } from "pinia";
import { ApartmentsApi } from "~/api/apartments.api.js";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      filters: {
        page: 1,
        sort: 'price',
        price: {
          min: null,
          max: null,
        },
        types: [],
      },
      apartments: {
        data: null,
        isLoading: false,
      },
      lang: "ru",
    };
  },
  actions: {
    async getApartments() {
      const data = await ApartmentsApi.getApartmentList({
        page: this.filters.page,
        types: this.filters.types,
        price: this.filters.price,
        sort: this.filters.sort
      });

      this.apartments.data = data;
    },

    async changePage(page) {
      this.filters.page = page;
      await this.getApartments()
    },

    async searchApartments(filters) {
      this.filters = filters
      await this.getApartments()
    }
  },
});
