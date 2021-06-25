<template>
  <section class="about">
    <!-- <AppBackgroundHolder :title="title"/> -->
    <div class="profile__title">
      <div class="profile__title-text ">Portfolio</div>
    </div>
    <v-container>
      <v-row justify-center align-content="center">
        <v-col sm="5" md="5">
          <v-row>
            <v-col md="5" class="about__contents-img">
              <img src="../assets/img/IMG_6093 2.jpg" alt="" class="img-fluid">
              <v-card
                class="mx-auto"
                max-width="400"
              >
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
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col sm="6" md="6" col="12">
          <v-list>
            <v-list-item>
              <div class="personal-title">
                <h2>パーソナル情報</h2>
              </div>
              <div class="parsonal-subtitle">
                <p>小笠原翔一(おがさわらよういち）</p>
              </div>
            </v-list-item>
          </v-list>
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
