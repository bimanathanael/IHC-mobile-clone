import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

const BaseURL = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    allSpecializations: [],
    allDoctors: [],
    oneHospital: '',
    oneTime: '',
  },
  mutations: {
    SET_SPECIALIZATION(state, allData) {
      state.allSpecializations = allData;
    },
    SET_DOCTOR(state, allData) {
      state.allDoctors = allData;
    },
    SET_ONE_HOSPITAL(state, data) {
      state.oneHospital = data;
    },
    SET_ONE_PRACTICE_TIME(state, data) {
      state.oneTime = data;
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
    getDoctor(context) {
      return axios({
        method: 'get',
        url: `${BaseURL}/doctors`,
      })
        .then((result) => {
          console.log(result.data, 'success get data');
          context.commit('SET_DOCTOR', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOneHospital(context, doctorId) {
      return axios({
        method: 'get',
        url: `${BaseURL}/workPlaces/${doctorId}`,
      })
        .then((result) => {
          console.log(result.data, 'success get hospital');
          context.commit('SET_ONE_HOSPITAL', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOnePracticeTime(context, doctorId) {
      return axios({
        method: 'get',
        url: `${BaseURL}/practiceTimes/${doctorId}`,
      })
        .then((result) => {
          console.log(result.data, 'success get hospital');
          context.commit('SET_ONE_PRACTICE_TIME', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
