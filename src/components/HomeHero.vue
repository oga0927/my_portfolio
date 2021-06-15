<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content-text">
          <p>Welcome to my website.</p>
          <p>OGA Portfolio</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_mixin.scss";

  .home-hero__content {
    background: url("../assets/img/starfish-on-summer-sunny-beach-at-ocean-background-travel-vacation-concepts_1423-276.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 50vh;

    @include display_pc {
      height: 90vh;
    }

    &-text {
      font-size: 28px;
      padding-left: 50px;
      color: #232323;

      @include display_pc {
        font-size: 40px;
      }
    }
  }
</style>
