<template>
  <section class="home-service">
    <div class="section__title">
      <div class="section__title-text">03. My Service</div>
    </div>
    <v-container>
      <v-row class="home-service__contents">
        <v-col md="3">
          <v-card
            to="/service#direction"
            hover
          >

            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/shalibo.jpg" alt="ディレクション">
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            to="/service#coding"
            hover
          >

            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/HOTELトップ画.png" alt="コーディング">
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            to="/service#design"
            hover
          >

            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/別案①WEB用.png" alt="">
            </div>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style  lang="scss" scoped>
@import "@/assets/sass/_parts.scss";
@import "@/assets/sass/_mixin.scss";

.home-service__contents {
  margin-top: 20px;
  justify-content: center;
}

.home-serice__card-img {
  text-align: center;
  padding: 20px;
}

.v-window {
  height: 300px !important;

  @include display_pc {
    height: 500px !important;
  }
}
</style>
