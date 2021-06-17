<template>
<v-col>
  <v-row class="button">
    <v-btn
      large
      color="error"
      min-width="300"
      :to="url"
    >
      {{ buttonText }}
    </v-btn>
  </v-row>
</v-col>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .button {
    text-align: center;
  }
</style>
