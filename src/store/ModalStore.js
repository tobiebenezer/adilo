import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
  state: () => {
    return {
      showStatus: false
    }
  },

  getters: {
    showModal(state) {
      return state.showStatus
    }
  },

  actions: {
    toggleModal() {
      this.showStatus = ! this.showStatus;
    }
  }
})