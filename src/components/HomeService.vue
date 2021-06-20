<template>
  <section class="home-work">
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

</style>
