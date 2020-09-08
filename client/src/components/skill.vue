<template>
  <div class="row bg-white pb-3 pt-3 borderBot">
      <div class="col-9">
        <p class="card-title text-left desc"> {{skill.Skill.name}}</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Skill',
  props: ['skill'],
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
