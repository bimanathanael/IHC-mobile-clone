<template>
  <div class="row bg-white pl-5 pb-3 pt-3 borderBot">
      <div class="col-9">
        <h5 class="card-title text-left"> {{specialization.name}}</h5>
        <p class="card-text text-left text-secondary desc">{{specialization.description}}</p>
      </div>
      <div class="col align-self-center">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Specialization',
  props: ['specialization'],
};
</script>

<style>
  .borderBot{
    border-bottom: 1px solid #e6e6e6;
  }
  .desc{
    font-size: 11pt;
  }
</style>
