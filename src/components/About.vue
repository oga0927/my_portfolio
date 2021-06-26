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
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list rounded>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
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
      </v-row>
      <div class="personal" flex>
        <v-icon xlarge color="orange darken-2" size="48">
          mdi-account
        </v-icon>
        <div class="aaa">
          <h2>パーソナル情報</h2>
        </div>
      </div>
      <v-list-item class="aaaa">
        <v-list-item-content>
          <div class="parsonal-subtitle">
            <p>小笠原翔一(おがさわらよういち)</p>
            <p>1991年2月8日</p>
          </div>
        </v-list-item-content>
      </v-list-item>

      <div class="personal" flex>
        <v-icon xlarge color="orange darken-2" size="48">
          mdi-account
        </v-icon>
        <div class="Career">
          <h2>経歴</h2>
        </div>
      </div>
      <v-list-item class="personal-Career">
        <v-list-item-content>
          <div class="parsonal-subtitle">
            <p>2011年3月 : 学校法人 三幸学園<br> 東京リゾートアンドスポーツ専門学校 卒業</p>
            <p>2012年5月 : 京急開発株式会社 就職</p>
          </div>
          <div class="personal-text-indent">
            <p>飲食店の店長として、店舗全体のマネジメント、オーダシステムの運用・改善まで幅広く担当していました。<br>
              オーダーシステムの運用・改善ではエンジニアを巻き込んでシステムの改善依頼をしたり、UIの改善についてはデザインツールを使って作り込むこともありました。
              また、店舗全体のマネジメントにおいては、年間を通じて退職率が60%で常に人手不足な状態でした。
              スタッフと会話を増やし様々な施策を実施したことで7年間で5%に改善することに成功しました。
              お客様、スタッフが何を求めているか、現状の課題は何かを常に考え提案し、行動してきたからこそ課題解決に成功したと考えております。
            </p>
          </div>
          <div class="parsonal-subtitle">
            <p>2019年5月 : 株式会社京急ビルテック 出向</p>
          </div>
          <div class="personal-text-indent">
            <p>担当した新規清掃業務物件において清掃業務のマニュアルがなく、清掃作業に一貫性がなかった。業務マニュアル作成の課題点を以下の通り分析。<br>
              作業マニュアル作成により、施設内での移動時間が20分以上短縮に成功。
              施設管理責任者の方から以前の業務体系より安心して任せれると評価を得る。<br>
              課題点を明確化するための「分析力」と周囲を巻き込みながら課題解決していく力を学びました。
            </p>
            <p>・2021年7月31日 : 退職予定</p>
            <p>・現在転職活動中</p>
          </div>
        </v-list-item-content>
      </v-list-item>
      <div class="personal" flex>
        <v-icon xlarge color="orange darken-2" size="48">
          mdi-account
        </v-icon>
        <div class="Career">
          <h2>2020年に学習したプログラミングスキル</h2>
        </div>
      </div>
      <v-list-item class="personal-Career">
        <v-list-item-content>
          <div class="parsonal-subtitle">
              <p class="red-bold">10月から現在まで1日も休むことなく学習の継続をしています。</p>
          </div>
          <div class="personal-text-indent">
            <p>10月〜: HTML,CSS</p>
          </div>
          <div class="parsonal-subtitle">
            <p>2019年5月 : 株式会社京急ビルテック 出向</p>
          </div>
          <div class="personal-text-indent">
            <p>担当した新規清掃業務物件において清掃業務のマニュアルがなく、清掃作業に一貫性がなかった。業務マニュアル作成の課題点を以下の通り分析。<br>
              作業マニュアル作成により、施設内での移動時間が20分以上短縮に成功。
              施設管理責任者の方から以前の業務体系より安心して任せれると評価を得る。<br>
              課題点を明確化するための「分析力」と周囲を巻き込みながら課題解決していく力を学びました。
            </p>
            <p>・2021年7月31日 : 退職予定</p>
            <p>・現在転職活動中</p>
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
          text: 'github'
        },
        {
          icon: 'mdi-twitter',
          text: 'twitter'
        },
        {
          icon: 'mdi-border-color',
          text: 'qiita'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_parts.scss";

.personal {
  display: flex;
}

.personal-title {
  // font-size: 24px;
  font-weight: 2;
  margin-bottom: 20px;
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

.personal-text-indent {
  line-height: 24px;
  margin: 24px 0 32px;
}

.Career {
  margin: 5px 0 0 10px;

}

.personal-Career {
  margin-left: 45px;
}

</style>
