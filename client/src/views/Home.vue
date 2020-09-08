<template>
  <div class="home" >
    <div class="container">
      <div class="row">
        <img class="logo" src="../assets/logo_ihc.png"/>
      </div>
      <div>
        <div class="row">
          <h4 class="fontBlue"> Selamat Datang di IHC Mobile </h4>
          <p class="subTitle">
            Kami memberikan pelayanan komprehensif dan
            terpadu dengan standar pelayanan terakreditas.
          </p>
        </div>
        <div class="row">
          <div class="card" style="width: 100%" @click="goToSpecialist">
            <div class="row">
              <div class="col-4 align-self-center">
                <img src="../assets/fastBook.png" style="width: 86%" />
              </div>
              <div class="col-6 noPadding align-self-center">
                <h5 class="fontBlue cardTitle">
                  Booking Cepat
                </h5>
                <p class="cardDetails">
                  Pesan dokter langganan
                </p>
              </div>
              <div class="col-2 align-self-center">
                <ion-icon name="play-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card" style="width: 100%" @click="goToSpecialist">
            <div class="row">
              <div class="col-4 align-self-center">
                <img src="../assets/fasker.png" style="width: 95%" />
              </div>
              <div class="col-6 noPadding align-self-center">
                <h5 class="fontBlue cardTitle">
                  Cari Faskes
                </h5>
                <p class="cardDetails">
                  Rumah sakit dan klinik
                </p>
              </div>
              <div class="col-2 align-self-center">
                <ion-icon name="play-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card" style="width: 100%" @click="goToSpecialist">
            <div class="row">
              <div class="col-4 align-self-center">
                <img src="../assets/findDoc.png" style="width: 106%" />
              </div>
              <div class="col-6 noPadding align-self-center">
                <h5 class="fontBlue cardTitle">
                  Cari Dokter
                </h5>
                <p class="cardDetails">
                  Umum dan Spesialis
                </p>
              </div>
              <div class="col-2 align-self-center">
                <ion-icon name="play-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row footer">
      <div class="col-3">
        <ion-icon class="footerIcon" name="home-outline"></ion-icon>
        <p>
          Home
        </p>
      </div>
      <div class="col-3">
        <ion-icon class="footerIcon" name="calendar-outline"></ion-icon>
        <p>
          Jadwal
        </p>
      </div>
      <div class="col-3">
        <ion-icon class="footerIcon" name="card-outline"></ion-icon>
        <p>
          Bayar
        </p>
      </div>
      <div class="col-3">
        <ion-icon class="footerIcon" name="person-outline"></ion-icon>
        <p>
          Profil
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import routers from '../router';

export default {
  name: 'Home',
  methods: {
    goToSpecialist() {
      this.$store.dispatch('toSpecialist');
      // routers.push('/specialist');
    },
  },
};
</script>

<style>
  .logo{
    margin-top: 2%;
    margin-bottom: 10%;
    width: 26%;
    margin-left: -1%;
  }
  .container{
    padding: 0% 10%;
  }
  .subTitle{
    text-align: left;
    font-size: 12pt;
  }
  .fontBlue{
    color: #06508d;
  }
  .card{
    margin-bottom: 2%;
    padding: 5%;
  }
  .cardTitle{
    color: #06508d;
    font-size: 12pt;
    font-weight: 800;
    text-align: left;
  }
  .cardDetails{
    font-size: 11pt;
    opacity: 0.6;
    margin-bottom: 0px;
  }
  .noPadding{
    padding-left: 0px;
    padding-right: 0px;
  }
  .footer{
    margin-top: 10%;
    padding-top: 4%;
    background-color: white;
    opacity: 0.7;
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
  ion-icon{
    font-size: 24px;
  }
</style>
