<template>
  <section class="background-holder">
  <v-container fluid fill-height class="background-holder__content">
    <v-row>
      <v-col class="background-holder__content-text">
        <p>{{ title }}</p>
      </v-col>
    </v-row>
  </v-container>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style  lang="scss" scoped>
@import "@/assets/sass/_mixin.scss";

.background-holder__content {
  background: url("../assets/img/starfish-on-summer-sunny-beach-at-ocean-background-travel-vacation-concepts_1423-276.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 30vh;
  padding: 10px;

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>
