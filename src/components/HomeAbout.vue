<template>
  <section class="home-about" id="home-about">
    <FadeIn>
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
            <h1>Profile</h1>
            <p>小笠原 翔一</p>
            <p>東京出身。
                専門卒業後、飲食店で勤務していたのがきっかけで、デザインの学習とプログラミングに興味をもつ。
                UI/UXを意識したデザインの設計からモダンなフロントエンド開発ができるエンジニアを目指し日々勉強中です。</p>
          </v-col>
        </v-row>
        <AppButton :button-text="buttonText" :url="url"/>
      </v-container>
    </FadeIn>
    <!-- ここまで追加 -->
  </section>
</template>

<script>
import AppButton from './AppButton.vue'
import FadeIn from './FadeIn.vue'

export default {
  data () {
    return {
      buttonText: '詳しくみる',
      url: '/about'
    }
  },
  components: {
    AppButton,
    FadeIn
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_parts.scss";

#home-about {
  padding: 100px 0;
  margin-top: 50px;
}
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
