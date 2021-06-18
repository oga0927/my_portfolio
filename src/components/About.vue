<template>
  <section class="about">
    <AppBackgroundHolder :title="title"/>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
export default {
  components: {
    AppBackgroundHolder
  },
  data () {
    return {
      title: 'About'
    }
  }
}
</script>
