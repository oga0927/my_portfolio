<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">01. About Me</div>
    </div>
    <!-- ここから追加 -->
    <v-container>
      <v-row class="home-about__contents">
        <v-col sm="5" md="5" cols="12" class="home-about__contents-img">
          <img src="../assets/img/IMG_6093 2.jpg" alt="" class="img-fluid">
        </v-col>
        <v-col sm="5" md="5" cols="12" class="home-about__contents-text">
          <p>東京出身。
              専門卒業後、飲食店で勤務していたのがきっかけで、デザインの学習とプログラミングに興味をもつ。
              UI/UXを意識したデザインの設計からモダンなフロントエンド開発ができるエンジニアを目指し日々勉強中です。</p>
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url="url"/>
    </v-container>
    <!-- ここまで追加 -->
  </section>
</template>

<script>
import AppButton from './AppButton.vue'

export default {
  data () {
    return {
      buttonText: '詳しくみる',
      url: '/about'
    }
  },
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_parts.scss";

.home-about__contents {
  margin-top: 20px;
  justify-content: center;

  &-img {
    text-align: center;
  }

  &-text {
    word-wrap: break-word;
  }
}
</style>
