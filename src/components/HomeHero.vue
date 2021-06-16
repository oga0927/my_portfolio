<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content-text">
          <p>YOUICHI OGASAWARA</p>
          <p class="sub-title">PORTFORIO SITE</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_mixin.scss";

  .home-hero__content {
    background: url("../assets/img/nathan-anderson-L95xDkSSuWw-unsplash.jpg");
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
      color: #fff;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

      @include display_pc {
        font-size: 40px;
      }
    }
  }

  .sub-title {
    font-size: 28px;
  }
</style>
