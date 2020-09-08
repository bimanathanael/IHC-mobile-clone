<template>
  <div class="row bg-white ml-4 mb-3 pt-3 mr-4 pr-2 borderBot">
      <div class="col-9" style="padding-right: 0px">
        <h5 class="card-title text-left doctorName"> {{doctor.name}}</h5>
        <div class="row">
          <div class='col-2'>
            <ion-icon style='opacity: 0.5;' name="medkit-outline"></ion-icon>
          </div>
          <div class='col' style="padding-right: 0px; padding-top: 2px">
            <p class="card-text text-left text-secondary hospital">
              {{$store.state.oneHospital.Hospital.name}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class='col-2'>
            <ion-icon name="timer-outline"></ion-icon>
          </div>
          <div class='col' style="padding-right: 0px; padding-top: 2px">
            <p class="card-text text-left text-secondary time">
              Praktik {{$store.state.oneTime.Practice_time.day}}
              {{$store.state.oneTime.Practice_time.time}}
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <img :src=doctor.photo style="width: 117%; border-radius: 65%;" />
      </div>
  </div>
</template>

<script>

export default {
  name: 'Doctor',
  props: ['doctor'],
  created() {
    if (this.doctor) {
      console.log(this.doctor.id, 'masuk');
      this.$store.dispatch('getOneHospital', this.doctor.id);
      this.$store.dispatch('getOnePracticeTime', this.doctor.id);
    }
  },
};
</script>

<style>
  .borderBot{
    border-bottom: 1px solid #e6e6e6;
  }
  .hospital{
    font-size: 11pt;
    font-weight: 800;
    margin-bottom: 5px;
    vertical-align: middle;
  }
  .time{
    font-size: 11pt;
    vertical-align: middle;
  }
  .doctorName{
    font-weight: 800;
    color: #06508d;
    font-size: 11pt;
  }
</style>
