<template>
  <section class="about">
    <!-- <AppBackgroundHolder :title="title"/> -->
    <div class="profile__title">
      <div class="profile__title-text">Portfolio</div>
    </div>

    <v-container>
      <v-row>
        <v-col md="5" class="about__contents-img">
          <img src="../assets/img/IMG_6093 2.jpg" alt="" class="img-fluid">
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list rounded>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :href="item.url"
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
      </v-row>

      <div class="personal" flex>
        <v-icon xlarge color="orange darken-2" size="48">
          mdi-account
        </v-icon>
        <div class="Career">
          <h2>パーソナル情報</h2>
        </div>
      </div>
      <v-list-item class="personal__career">
        <v-list-item-content>
          <div class="parsonal-subtitle">
            <p>小笠原翔一(おがさわらよういち)</p>
            <p>1991年2月8日</p>
          </div>
        </v-list-item-content>
      </v-list-item>

      <div class="personal" flex>
        <v-icon xlarge color="orange darken-2" size="48">
          mdi-escalator
        </v-icon>
        <div class="Career">
          <h2>経歴</h2>
        </div>
      </div>
      <v-list-item class="personal__career">
        <v-list-item-content>
          <div class="parsonal-subtitle">
            <p>2011年3月 : 学校法人 三幸学園<br> 東京リゾートアンドスポーツ専門学校 卒業</p>
            <p>2012年5月 : 京急開発株式会社 就職</p>
          </div>
          <div class="personal__text-indent">
            <p>飲食店の店長として、店舗予算、売上管理、従業員のマネジメント、Photoshop・Illustratorを用いてPOP、
              メニュー作成、月間イベント実施の企画立案、システム改善依頼業務を実施。
              退職率が60％という状況を、全従業員30名への1人1人とヒヤリングの実施やその他様々な打手を行い、
              在籍<span class="red-bold">7年間で5%にまで改善に成功しました。</span>
              独自の接客トークマニュアル、ドリンクイベントの実施で<span class="red-bold">年間売上げ達成率103%達成</span>しました。
            </p>
          </div>
          <div class="parsonal-subtitle">
            <p>2019年5月 : 株式会社京急ビルテック 出向</p>
          </div>
          <div class="personal__text-indent">
            <p>課題点を分析して、作業マニュアル作成により、施設内での移動時間が<span class="red-bold">20分以上短縮に成功</span>しました。
              施設管理責任者の方から以前の業務体系より<span class="red-bold">安心して任せれると評価を得る。</span><br>
              課題点を明確化するための「分析力」と周囲を巻き込みながら課題解決していく力を学びました。
            </p>
            <p>・2021年7月31日 : 退職予定</p>
            <p>・現在転職活動中</p>
          </div>
        </v-list-item-content>
      </v-list-item>
      <div class="personal" flex>
        <v-icon xlarge color="orange darken-2" size="48">
          mdi-rocket-launch
        </v-icon>
        <div class="Career">
          <h2>2020年に学習したプログラミングスキル</h2>
        </div>
      </div>
      <v-list-item class="personal__career">
        <v-list-item-content>
          <div class="parsonal-subtitle">
              <p class="red-bold">2021年6月現在まで240日以上、休むことなくを継続しています。</p>
          </div>
          <div class="personal__text-indent">
            <p>【学習言語・フレームワーク】</p>
            <ul>
              <li>HTML</li>
              <li>EJS</li>
              <li>CSS（CSS設計：FROCCS記法）</li>
              <li>Sass</li>
              <li>JavaScript（条件分岐、繰り返し処理、配列、非同期通信）</li>
              <li>jQuery</li>
              <li>Vue.js</li>
              <li>Node.js</li>
              <li>Firebase(Authentication、Realtime Database、Storage)</li>
              <li>GoogleBooksAPIの導入経験あり</li>
            </ul>
            <p>【その他】Git・GitHubを用いたチーム開発のリーダーを経験</p>
            <p>成果物についてはworkをご参照ください</p>
          </div>
        </v-list-item-content>
      </v-list-item>
      <div class="personal" flex>
        <v-icon xlarge color="orange darken-2" size="48">
          mdi-thumb-up
        </v-icon>
        <div class="Career">
          <h2>どのようなエンジニアになりたいか</h2>
        </div>
      </div>
      <v-list-item class="personal__career">
        <v-list-item-content>
          <div class="parsonal-subtitle">
            <p>飲食業界からIT企業を志した理由は<br><br>
              <span class="red-bold">「大きな変化による価値を生み出し、多くの人の役に立ちたい」」</span>からです。
            </p>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="personal__career">
        <v-list-item-content>
          <div class="parsonal-subtitle">
            <h4 class="personal-point">1.変化を起こす</h4>
          </div>
          <div class="personal__text-indent">
            <p>今まで当たり前と思われていた事を疑い、常に改善案を考え、とにかくどんどん実行していきたいです。
            新しい事に挑戦する事は非常に刺激的ですし、そこから見えてくる新しい景色があると考えています。
            それにより自分自身も大きく変化していけると思います</p>
          </div>
          <div class="parsonal-subtitle">
            <h4 class="personal-point">2.価値を生む</h4>
          </div>
          <div class="personal__text-indent">
            <p>価値とはそのサービスや商品を支持してくれる人の数だと考えています。
            私が提供するサービスにより多くの人に影響を与え、喜んで貰える事を常に意識して行動しております。
            また、ITにはそれが実現可能だと思い、ITへの道を志しました。</p>
          </div>
          <div class="parsonal-subtitle">
            <h4 class="personal-point">3.影響力を持つ</h4>
          </div>
          <div class="personal__text-indent">
            <p>私が挑戦の中で得た情報やスキルは、どんどん他者へ提供していこうと考えております。
            SNSを使って情報発信したり、技術記事を発信したりと、積極的に実行していきます。
            それにより1人でも多くの人に影響を与える事ができ、それが僕の志す変化による価値提供に必要な条件だと考えています。</p>
          </div>
        </v-list-item-content>
      </v-list-item>
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
      model: 1,
      items: [
        {
          icon: 'mdi-github',
          text: 'github',
          url: 'https://github.com/oga0927'
        },
        {
          icon: 'mdi-twitter',
          text: 'twitter',
          url: 'https://twitter.com/oga_yo'
        },
        {
          icon: 'mdi-border-color',
          text: 'qiita',
          url: 'https://qiita.com/oga0927'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_parts.scss";

.profile__title-text {
  text-align: center;
  margin-top: 20px;
  font-size: 32px;
}
.personal {
  display: flex;
}

.about__contents {
  margin-top: 20px;
  justify-content: center;

  &-img {
    text-align: center;
  }

  &-text {
    word-wrap: break-word;
  }
}

.personal__text-indent {
  line-height: 24px;
  margin: 24px 0 32px;
}

.Career {
  margin: 5px 0 0 10px;

}

.personal__career {
  margin-left: 45px;
}

.personal-point {
  border-bottom: 1px dashed #333;
  padding-bottom: 10px;
}

</style>
