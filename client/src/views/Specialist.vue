<template>
  <div class="home" >
    <div class="header">
      <div class="row mt-2" style="background-color:white">
        <div class="col-2 align-self-center back">
          <ion-icon @click="backHome()" name="arrow-back-outline" size="large"></ion-icon>
        </div>
        <div class="col">
          <p class="left locTitle"> Dokter di Sekitar </p>
          <h4 class="left location">
            Jakarta Selatan
            <ion-icon style="opacity: 0.5;" name="chevron-down-outline"></ion-icon>
          </h4>
        </div>
      </div>
      <div class="row search pt-3 pb-3" style="background-color:white">
        <div class="col-2 align-self-center">
          <ion-icon size="large" name="search-outline"></ion-icon>
        </div>
        <div class="col">
          <h5 class="left searchBox">
            Cari nama dokter...
          </h5>
        </div>
      </div>
    </div>
    <div class="body">
      <p class="subTitle pl-4">
        Spesialisasi Dokter
      </p>
      <specialization v-for="specialization in $store.state.allSpecializations"
      :key="specialization.id" :specialization="specialization" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import specialization from '../components/specialization.vue';

export default {
  name: 'Specialist',
  components: {
    specialization,
  },
  created() {
    this.$store.dispatch('getSpecialization');
  },
  methods: {
    backHome() {
      this.$store.dispatch('backHome');
    },
  },
};
</script>

<style>
  .body{
    background-color: #fafafa;
  }
  .subTitle{
    font-size: 15pt;
    padding-top: 6%;
    padding-bottom: 3%;
    opacity: 0.7;
  }
  .header{
    border-bottom: 1px solid #e6e6e6;
  }
  .left{
    text-align: left;
  }
  .location{
    color: #06508d;
  }
  .back{
    margin-left: 3%;
    margin-right: 0%;
    padding-right: 0%;
    opacity: 0.5;
  }
  .locTitle{
    opacity: 0.7;
    margin-bottom:0px ;
  }
  .search{
    padding-left: 6%;
    margin-right: 0%;
    padding-right: 0%;
  }
  .searchBox{
    opacity: 0.3;
  }
  ion-icon{
    font-size: 24px;
  }
</style>
