<template>
  <section class="about">
    <!-- <AppBackgroundHolder :title="title"/> -->
    <div class="product__title">
      <div class="product__title-text">Products</div>
    </div>
    <v-container>
      <v-row>
        <v-card-title class="justify-center products-title">
          Vue.js
        </v-card-title>
        <v-row justify="center" align-content="center">
          <v-col
            sm="6"
            md="6"
            col="12"
            class="about__contents-img"
          >
            <v-btn
              class="ma-2"
              color="primary"
              dark
            >
              制作したアプリのリンク
            <v-icon
              dark
              right
            >
              mdi-checkbox-marked-circle
            </v-icon>
              <a href="https://shalibo.netlify.app/"></a>
            </v-btn>
            <img
              src="../assets/img/shalibo.jpg"
              alt=""
              class="img-fluid"
            >
            </v-col>
            <v-col
              sm="6"
              md="6"
              col="12"
            >
            <div class="personal" flex>
              <v-icon
                xlarge
                color="orange darken-2"
                size="48"
              >
                mdi-account
              </v-icon>
              <div class="content__title">
                <h2>アプリの概要</h2>
              </div>
            </div>
            <v-list-item class="personal__content__title">
              <v-list-item-content>
                <div class="content-subtitle">
                  <p>本の知識を自分のものにしたい人、<br>
                  読書した内容をアウトプットしたい人のためのシンプルな
                  『読書記録アプリ』です。</p>
                </div>
              </v-list-item-content>
            </v-list-item>
            <div class="personal" flex>
              <v-icon
                xlarge
                color="orange darken-2"
                size="48"
              >
                mdi-escalator
              </v-icon>
              <div class="content__title">
                <h2>ソースコード</h2>
              </div>
            </div>
            <v-list-item class="personal__content__title">
              <v-list-item-content>
                <div class="content-subtitle">
                  <h3>
                    <v-icon>mdi-github</v-icon>
                    <a href="https://github.com/oga0927/Book_Library_Vue.js">GitHub</a>
                  </h3>
                </div>
              </v-list-item-content>
            </v-list-item>
            <div class="personal" flex>
              <v-icon
                xlarge
                color="orange darken-2"
                size="48"
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
                  <p>・検索、記録、保存の3ステップ</p>
                  <p>・読んだ本の内容を質問に答えてアウトプット</p>
                  <p>・メインビューの配色には暖色をメインに作成。</p>
                  <p>・ファーストビューは一眼でわかる画像と、何をするアプリなのかが伝わるように作成</p>
                  <p>・フォームにバリデーションを実装</p>
                  <p>・目のマークをクリックで入力したパスワードを確認。</p>
                  <p>・登録済みのアドレスはアラートでお知らせ</p>
                  <p>・再描画でLocalStorageのデータが初期化されないよう設定</p>
                  <p>・vuex-persistedstateをインストールで、vuexのstateの中身を維持</p>
                  <p>・vuex-persistedstateの設定をvuexのStoreのpluginsに設定</p>
                </div>
              </v-list-item-content>
            </v-list-item>
            <div class="personal" flex>
              <v-icon
                xlarge
                color="orange darken-2"
                size="48"
              >
                mdi-thumb-up
              </v-icon>
              <div class="content__title">
                <h2>使用技術</h2>
              </div>
            </div>
            <v-list-item class="personal__content__title">
              <v-list-item-content>
                <div class="content-subtitle">
                  <p>Vue.js / Vue/CLI / VueRouter / Vuex / Vuetify / JavaScript / CSS</p>
                  <p>API: GoogleBooksAPI</p>
                  <p>Webサーバー: Netlify</p>
                  <p>DB: WebStorage(LocalStorage)</p>
                  <p>DB(認証のみ): Firebase(Authentication)</p>
                </div>
              </v-list-item-content>
            </v-list-item>
            </v-col>
          </v-row>
      </v-row>
      <v-row>
        <v-card-title class="justify-center products-title">
          共同開発
        </v-card-title>
          <v-row justify="center" align-content="center">
            <v-col
              sm="5"
              md="6"
              col="12"
              class="about__contents-img"
            >
              <v-btn
                class="ma-2"
                color="primary"
                dark
              >
                制作したアプリのリンク
              <v-icon
                dark
                right
              >
                mdi-checkbox-marked-circle
              </v-icon>
                <a href="https://tenkuehotel-r018.netlify.app/"></a>
              </v-btn>
              <img
                src="../assets/img/hotel.jpg"
                alt=""
                class="img-fluid"
              >
            </v-col>
            <v-col
              sm="5"
              md="6"
              col="12"
            >
            <div class="personal" flex>
            <v-icon
              xlarge
              color="orange darken-2"
              size="48"
            >
              mdi-account
            </v-icon>
            <div class="content__title">
              <h2>アプリの概要</h2>
            </div>
          </div>
          <v-list-item class="personal__content__title">
            <v-list-item-content>
              <div class="content-subtitle">
                <p>・共同開発での開発フロー、コミュニケーションの取り方、
                      Git/GitHubの使い方を経験することが目的</p>
                <p>・開発期間は3週間</p>
                <p>・現役エンジニア1名＋3名で制作</p>
              </div>
            </v-list-item-content>
          </v-list-item>
          <div class="personal" flex>
            <v-icon xlarge color="orange darken-2" size="48">
              mdi-escalator
            </v-icon>
            <div class="content__title">
              <h2>ソースコード</h2>
            </div>
          </div>
          <v-list-item class="personal__content__title">
            <v-list-item-content>
              <div class="content-subtitle">
                <h3>
                  <v-icon>mdi-github</v-icon>
                  <a href="https://github.com/jojojo0501/tenkue-hotel-r018">GitHub</a>
                </h3>
              </div>
            </v-list-item-content>
          </v-list-item>
          <div class="personal" flex>
            <v-icon xlarge color="orange darken-2" size="48">
              mdi-rocket-launch
            </v-icon>
            <div class="content__title">
              <h2>こだわりのポイント</h2>
            </div>
          </div>
          <v-list-item class="personal__content__title">
            <v-list-item-content>
              <div class="content-subtitle">
                <p>・チームリーダーを担当</p>
                <p>・Trelloのガントチャートでタスク管理</p>
                <p>・メインビューの配色には暖色をメインに作成</p>
                <p>・GitHubでソースコードを管理</p>
                <p>・ブランチの作成</p>
                <p>・CSS設計：FLOCSS記法の学習</p>
                <p>・Gitコマンド（プルリク等）の操作</p>
                <p>・slackで進捗の報告</p>
              </div>
            </v-list-item-content>
          </v-list-item>
          <div class="personal" flex>
            <v-icon xlarge color="orange darken-2" size="48">
              mdi-thumb-up
            </v-icon>
            <div class="content__title">
              <h2>使用技術</h2>
            </div>
          </div>
          <v-list-item class="personal__content__title">
            <v-list-item-content>
              <div class="content-subtitle">
                <p>HTML / CSS / JavaScript / jQuery / EJS / Node.js</p>
                <p>CSS設計：FLOCSS</p>
                <p>Webサーバー: Netlify</p>
                <p>制作担当ページ: Header / ハンバーガーメニュー / Footer / AreaGuide</p>
                <p>ツール: gulp / Webpack / Trello</p>
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
}

.personal__content__title {
  margin-left: 45px;
}

.personal-point {
  border-bottom: 1px dashed #333;
  padding-bottom: 10px;
}

</style>
