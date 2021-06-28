<template>
  <section class="about">
    <!-- <AppBackgroundHolder :title="title"/> -->
    <div class="product__title">
      <div class="product__title-text">Other</div>
    </div>
    <v-container>
      <v-row>
        <v-card-title class="justify-center products-title">
          もくもく会主催
        </v-card-title>
          <v-row justify="center" align-content="center">
            <v-col
              sm="5"
              md="6"
              cols="12"
              class="about__contents-img"
            >
              主催したオンラインもくもく会の集合写真
              <img src="../assets/img/もくもく会主催.png" alt="" class="img-fluid">
            </v-col>
            <v-col
              sm="5"
              md="6"
              cols="12"
            >
          <div class="personal" flex>
            <v-icon
              xlarge
              color="orange darken-2"
              size="48"
              class="contents-icon"
            >
              mdi-rocket-launch
            </v-icon>
            <div class="content__title">
              <h2>こだわりのポイント</h2>
            </div>
          </div>
          <v-list-item class="personal__content__title">
            <v-list-item-content>
              <div class="content-subtitle">
                <p>・週に２〜3でもくもく会に参加し、その後もくもく会を主催</p>
                <p>・2時間のもくもく会、20分は質問タイム、活発に意見交換を行う</p>
                <p>・現役エンジニアとのコミュニケーションを形成</p>
                <p class="red-bold">物怖じしない性格、企画力、実行力、コミュニケーション能力があります</p>
              </div>
            </v-list-item-content>
          </v-list-item>
          </v-col>
        </v-row>
      </v-row>
      <v-row class="mt-10">
        <v-card-title class="justify-center products-title">
          LT登壇
        </v-card-title>
          <v-row justify="center" align-content="center">
            <v-col
              sm="6"
              md="6"
              cols="12"
              class="about__contents-img"
            >
              オンラインLT登壇に参加
              <img src="../assets/img/LT登壇.jpg" alt="" class="img-fluid">
            </v-col>
            <v-col
              sm="6"
              md="6"
              cols="12"
            >
          <div class="personal" flex>
            <v-icon
              xlarge
              color="orange darken-2"
              size="48"
              class="contents-icon"
            >
              mdi-rocket-launch
            </v-icon>
            <div class="content__title">
              <h2>こだわりのポイント</h2>
            </div>
          </div>
          <v-list-item class="personal__content__title">
            <v-list-item-content>
              <div class="content-subtitle">
                <p>・テーマは「なぜエンジニアを目指したのか」</p>
                <p>・LT大会に5分間の紹介/10分質問タイム</p>
              </div>
            </v-list-item-content>
          </v-list-item>
          </v-col>
        </v-row>

      </v-row>
    <v-row class="mt-10">
    <v-card-title class="justify-center products-title">
      ロゴ作成
    </v-card-title>
      <v-row justify="center" align-content="center">
        <v-col
          sm="6"
          md="6"
          cols="12"
          class="about__contents-img"
          >
            企業ロゴ作成
          <v-icon
            dark
            right
          >
            mdi-checkbox-marked-circle
          </v-icon>
          <img src="../assets/img/別案①WEB用.png" alt="" class="img-fluid">
          <img src="../assets/img/Nfamiliar.jpg" alt="">
        </v-col>
        <v-col
          sm="6"
          md="6"
          cols="12"
        >
      <div class="personal" flex>
        <v-icon
          xlarge
          color="orange darken-2"
          size="48"
          class="contents-icon"
        >
          mdi-rocket-launch
        </v-icon>
        <div class="content__title">
          <h2>こだわりのポイント</h2>
        </div>
      </div>
      <v-list-item class="personal__content__title">
        <v-list-item-content>
          <div class="content-subtitle">
            <p>・インスタグラムにてロゴコンペに参加</p>
            <p>・要件定義に基づいて２社ロゴを制作</p>
            <p>・N familiar様に作成したロゴが採用されました！</p>
            <p class="red-bold">独学でデザインツールを習得</p>
            <p class="red-bold">初のロゴ作成、何事もチャレンジすることを心がけています</p>
          </div>
        </v-list-item-content>
      </v-list-item>
      </v-col>
    </v-row>
    </v-row>
    </v-container>
  </section>
</template>
<script>
// import AppBackgroundHolder from './AppBackgroundHolder.vue'
export default {
  components: {
    // AppBackgroundHolder
  },
  data () {
    return {
      title: 'About',
      selectedItem: 1,
      model: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_parts.scss";

.personal {
  display: flex;
}

.products-title {
  width: 300px;
  margin: 30px auto;
  background: #fff8e8;
  border-left: 10px solid #ffc06e;
  color: grey;
}

.product__title-text {
  text-align: center;
  margin-top: 20px;
  font-size: 32px;
  font-weight: 500;
  color: #757575;
  letter-spacing: 5px !important;
}

.content__title {
  color: grey;
  // padding-left: 10px;
}

.personal__text-indent {
  line-height: 24px;
  margin: 24px 0 32px;
}

.content__title {
  margin: 5px 0 0 10px;
}

.content-subtitle {
  color: #616161 !important;
  line-height: 1.2;
  font-size: 16px;
  // padding-left: 40px;
}

.personal__content__title {
  margin-left: 45px;
}

.personal-point {
  border-bottom: 1px dashed #333;
  padding-bottom: 10px;
}

.contents-icon {
  padding-left: 30px;
}

</style>
