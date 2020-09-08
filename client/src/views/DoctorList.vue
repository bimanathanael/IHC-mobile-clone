<template>
  <div class="home" >
    <div class="header">
      <div class="row mt-2" style="background-color:white">
        <div class="col-2 align-self-center back">
          <ion-icon @click="backSpecialist()" name="arrow-back-outline" size="large"></ion-icon>
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
        <div class="col noPadding">
          <button class="btn btn-light rounded">
            Semua
          </button>
          <button class="btn btn-link rounded">
            Praktik hari ini
          </button>
          <button class="btn btn-link rounded">
            Booking online
          </button>
        </div>
      </div>
    </div>
    <div class="body pt-3">
      <doctor v-for="doctor in $store.state.allDoctors"
      :key="doctor.id" :doctor="doctor" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import doctor from '../components/doctor.vue';

export default {
  name: 'Specialist',
  components: {
    doctor,
  },
  created() {
    this.$store.dispatch('getDoctor');
  },
  methods: {
    backSpecialist() {
      this.$store.dispatch('toSpecialist');
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
  .btn-light{
    color:#06508d;
    font-weight: 600;
    background-color: #ecf5ec;
  }
  .btn-link{
    font-weight: 600;
    color:grey
  }
  .rounded{
    border-radius: 20px !important;
    border: 1px solid #e2dfdf;
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
  .noPadding{
    padding-left: 0px;
    padding-right: 0px;
  }
  .btn{
    font-size: 11pt;
  }
  ion-icon{
    font-size: 24px;
  }
</style>
