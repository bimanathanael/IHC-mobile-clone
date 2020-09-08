import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const BaseURL = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    allSpecializations: [],
    allDoctors: [],
    oneHospital: '',
    oneTime: '',
    oneDoctor: '',
    specialties: [],
    diseases: [],
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
    SET_ONE_DOCTOR(state, data) {
      state.oneDoctor = data;
    },
    SET_SPECIALTIES(state, data) {
      state.specialties = data;
    },
    SET_DISEASES(state, data) {
      state.diseases = data;
    },
  },
  actions: {
    getSpecialization(context) {
      return axios({
        method: 'get',
        url: `${BaseURL}/types`,
      })
        .then((result) => {
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
          context.commit('SET_ONE_PRACTICE_TIME', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOneDoctor(context, doctorId) {
      return axios({
        method: 'get',
        url: `${BaseURL}/doctors/${doctorId}`,
      })
        .then((result) => {
          context.commit('SET_ONE_DOCTOR', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSpecialties(context, doctorId) {
      return axios({
        method: 'get',
        url: `${BaseURL}/specialties/${doctorId}`,
      })
        .then((result) => {
          context.commit('SET_SPECIALTIES', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDiseases(context, doctorId) {
      return axios({
        method: 'get',
        url: `${BaseURL}/diseases/${doctorId}`,
      })
        .then((result) => {
          context.commit('SET_DISEASES', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    backDoctorList() {
      router.push({ name: 'DoctorList' });
    },
    backHome() {
      router.push({ name: 'Home' });
    },
    toSpecialist() {
      router.push({ name: 'Specialist' });
    },
    toDoctorList() {
      router.push({ name: 'DoctorList' });
    },
    toDoctorDetail(context, doctorId) {
      router.push({ path: `/doctorDetails/${doctorId}` });
    },
  },
  modules: {
  },
});
