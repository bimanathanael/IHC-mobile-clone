<template>
  <div class="home" style="background-color:white" >
    <div class="header">
      <div class="row mt-2">
        <div class="col align-self-center back d-flex justify-content-between pr-4 mr-2 mt-2">
          <ion-icon @click="backDoctorList()" name="arrow-back-outline" size="large"></ion-icon>
          <ion-icon name="share-social-outline"></ion-icon>
        </div>
      </div>
      <div class="row p-3 ml-1 mr-1">
        <div class="col-8">
          <div class="row doctorName">
            {{$store.state.oneDoctor.name}}
          </div>
          <div class="row" style="opacity: 0.6">
            {{$store.state.oneDoctor.gender}}
          </div>
        </div>
        <div class="col">
          <img :src="$store.state.oneDoctor.photo"
          style="width: 117%; border-radius: 65%;" />
        </div>
      </div>
    </div>
    <div class="body pt-3">
      <p class="subTitle pl-4">
        Jadwal Praktik Terdekat
      </p>
      <div class="row bg-white ml-4 mb-3 pt-3 mr-4 pr-2 borderBot">
        <div class="col mr-1" style="padding-right: 0px">
          <h5 class="card-title text-left hospital">
            {{$store.state.oneHospital.Hospital.name}}
          </h5>
          <p class="text-left">
            {{$store.state.oneTime.Practice_time.day}}
            {{$store.state.oneTime.Practice_time.time}}
          </p>
          <button class="btn btn-success">
            BUAT JANJI
          </button>
          <hr/>
          <button class=" text-success btn btn-link align-self-center pb-3">
            Lihat Semua
          </button>
        </div>
      </div>
      <p class="subTitle pl-4">
        Lokasi Praktik
      </p>
      <div class="row bg-white ml-4 mb-3 pt-3 mr-4 pr-2 borderBot">
        <div class="col mr-1" style="padding-right: 0px">
          <h5 class="card-title text-left hospital">
            {{$store.state.oneHospital.Hospital.name}}
          </h5>
          <div class="row mt-2" style="opacity: 0.5;">
            <div class="col-1 text-left">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div class="col text-left">
              {{$store.state.oneHospital.Hospital.fullAddress}}
            </div>
          </div>
          <hr/>
          <button class=" text-success btn btn-link align-self-center pb-3">
            Lihat Semua
          </button>
        </div>
      </div>
      <p class="subTitle pl-4">
        Keahlian
      </p>
      <div class="row bg-white ml-4 mb-3 pt-3 mr-4 pr-2 borderBot">
        <div class="col mr-1" style="padding-right: 0px">
          <div class="row mt-2" style="opacity: 0.5;">
            <div class="col text-left">
              <skill v-for="skill in $store.state.specialties"
              :key="skill.id" :skill="skill" />
            </div>
          </div>
          <hr/>
          <button class=" text-success btn btn-link align-self-center pb-3">
            Lihat Semua
          </button>
        </div>
      </div>
      <p class="subTitle pl-4">
        Penyakit Terkait
      </p>
      <div class="row bg-white ml-4 mb-3 pt-3 mr-4 pr-2 borderBot">
        <div class="col mr-1" style="padding-right: 0px">
          <div class="row mt-2" style="opacity: 0.5;">
            <div class="col text-left">
              <disease v-for="disease in $store.state.diseases"
              :key="disease.id" :disease="disease" />
            </div>
          </div>
          <hr/>
          <button class=" text-success btn btn-link align-self-center pb-3">
            Lihat Semua
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import skill from '../components/skill.vue';
import disease from '../components/disease.vue';

export default {
  name: 'DoctorDetails',
  components: {
    disease,
    skill,
  },
  created() {
    this.$store.dispatch('getOneDoctor', this.$route.params.id);
    this.$store.dispatch('getOneHospital', this.$route.params.id);
    this.$store.dispatch('getOnePracticeTime', this.$route.params.id);
    this.$store.dispatch('getSpecialties', this.$route.params.id);
    this.$store.dispatch('getDiseases', this.$route.params.id);
  },
  methods: {
    backDoctorList() {
      this.$store.dispatch('backDoctorList');
    },
  },
};
</script>

<style>
  .body{
    background-color: #fafafa;
  }
  .hospital{
    color:#06508d;
    margin-bottom: 5%;
  }
  .subTitle{
    font-size: 15pt;
    padding-top: 6%;
    padding-bottom: 0%;
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
  .btn{
    width: 100%;
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
  .doctorName{
    font-weight: 800;
    color: #06508d;
    font-size: 12pt;
  }
</style>
