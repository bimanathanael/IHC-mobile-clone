import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

const BaseURL = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    allSpecializations: [],
  },
  mutations: {
    SET_SPECIALIZATION(state, allData) {
      state.allSpecializations = allData;
    },
  },
  actions: {
    getSpecialization(context) {
      return axios({
        method: 'get',
        url: `${BaseURL}/types`,
      })
        .then((result) => {
          console.log(result.data, 'success get data');
          context.commit('SET_SPECIALIZATION', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
