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
            <v-avater top>
              <img src="../assets/img/IMG_6093 2.jpg" alt="" class="img-fluid">
            </v-avater>
            <v-list></v-list>
          </v-row>
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
      title: 'About'
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
