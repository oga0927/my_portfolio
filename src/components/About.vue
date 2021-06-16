<template>
  <section class="about">
    <a :href="URL">リンク</a>
  </section>
</template>

<script>
export default {
  data () {
    return {
      url: '/about'
    }
  }
}
</script>
