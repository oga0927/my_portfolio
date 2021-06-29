<template>
  <section class="home-service" id="home-service">
    <div class="section__title">
      <div class="section__title-text">02. My Portfolio</div>
    </div>
    <v-container>
      <v-row class="home-service__contents">
        <v-col md="3" cols="12">
          <v-card
            to="/work"
            hover
          >
            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/shalibo.jpg" alt="">
            </div>
          </v-card>
        </v-col>
        <v-col md="3" cols="12">
          <v-card
            to="/work"
            hover
          >
            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/hotel.jpg" alt="">
            </div>
          </v-card>
        </v-col>
        <v-col md="3" cols="12">
          <v-card
            to="/work"
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

#home-service {
  background-color: #f5f5f5;
  padding: 100px 0;
  margin-top: 50px;
}
.home-service__contents {
  margin-top: 20px;
  justify-content: center;
}

img {

  @include display_pc {
    height: 220px;
  }
}

.v-window {
  height: 300px !important;

  @include display_pc {
    height: 500px !important;
  }
}
</style>
