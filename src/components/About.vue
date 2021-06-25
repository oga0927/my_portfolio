<template>
  <section class="about">
    <!-- <AppBackgroundHolder :title="title"/> -->
    <div class="profile__title">
      <div class="profile__title-text ">Portfolio</div>
    </div>
    <v-container>
      <v-row>
        <v-col md="5" class="about__contents-img">
          <img src="../assets/img/IMG_6093 2.jpg" alt="" class="img-fluid">
          <v-list flat>
            <v-list-item-group
              v-model="model"
              color="indigo"
            >
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col sm="6" md="6" col="12">
          <v-list-item>
              <v-avatar>
                <v-icon xlarge color="orange darken-2" size="48">
                  mdi-account
                </v-icon>
              </v-avatar>
            <v-list-item-content>
              <div class="personal">
                <div class="personal-title">
                  <h2>パーソナル情報</h2>
                </div>
                <div class="parsonal-subtitle">
                  <p>小笠原翔一(おがさわらよういち)</p>
                </div>
                <div class="age">
                  <p>1991年2月8日</p>
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
              <v-avatar>
                <v-icon xlarge color="orange darken-2" size="48">
                  mdi-account
                </v-icon>
              </v-avatar>
            <v-list-item-content>
              <div class="personal">
                <div class="personal-title">
                  <h2>経歴</h2>
                </div>
                <div class="parsonal-subtitle">
                  <p>2011年3月:学校法人 三幸学園 東京リゾートアンドスポーツ専門学校 卒業</p>
                  <p>2012年5月:京急開発株式会社 就職</p>
                </div>
              </div>
              <div class="personal-text-indent">
                <p></p>
              </div>
            </v-list-item-content>
          </v-list-item>

        </v-col>
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
      items: [
        {
          icon: 'mdi-github',
          text: 'github',
          link: 'https://github.com/oga0927'
        },
        {
          icon: 'mdi-twitter',
          text: 'twitter'
        },
        {
          icon: 'mdi-qiita',
          text: 'qiita'
        }
      ],
      model: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_parts.scss";
  .flex {
    display: flex;
}
.top_info {
  font-size: 24px;
  font-weight: 2;
  margin-bottom: 10px;
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
