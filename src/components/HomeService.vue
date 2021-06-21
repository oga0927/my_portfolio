<template>
  <section class="home-service">
    <div class="section__title">
      <div class="section__title-text">03. My Service</div>
    </div>
    <v-cantainer>
      <v-row class="home-service__contents">
        <v-col md="3">
          <v-card
            to="/service#direction"
            hover
          >
            <div class="home-service__card-title">
              <h3>ディレクション</h3>
            </div>
            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/shalibo.jpg" alt="">
            </div>
            <div class="home-serice__card-text">
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            to="/service#direction"
            hover
          >
            <div class="home-service__card-title">
              <h3>ディレクション</h3>
            </div>
            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/HOTELトップ画.png" alt="">
            </div>
            <div class="home-serice__card-text">
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            to="/service#direction"
            hover
          >
            <div class="home-service__card-title">
              <h3>ディレクション</h3>
            </div>
            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/別案①WEB用.png" alt="">
            </div>
            <div class="home-serice__card-text">
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-cantainer>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_parts.scss";
@import "@/assets/sass/_mixin.scss";

.home-service__contents {
  margin-top: 20px;
  justify-content: center;
}

.home-service__card-title {
  text-align: center;
  padding: 20px 10px 10px;
}

.home-serice__card-img {
  text-align: center;
  padding: 20px;
}
.home-serice__card-text {
  padding: 10px 20px;
}

.v-window {
  height: 300px !important;

  @include display_pc {
    height: 500px !important;
  }
}
</style>
