<template>
  <section class="home">
    <HomeHero/>
    <HomeAbout/>
    <homeWork/>
  </section>
</template>
<script>
import HomeHero from './HomeHero.vue'
import HomeAbout from './HomeAbout.vue'
import homeWork from './HomeWork.vue'

export default {
  components: {
    HomeHero,
    HomeAbout,
    homeWork
  }
}
</script>
<style lang="scss" scoped>

.home {
  padding-bottom: 50px;
}
</style>
