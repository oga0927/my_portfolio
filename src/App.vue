<template>
  <v-app>
    <header>
      <v-app-bar
        app
        dark
      >

        <v-toolbar-title>MyPortfolio</v-toolbar-title>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </v-app-bar>
      <!-- temporaryはアプリケーションの一番上の層で表示させることが可能。
      サイドメニューの一部がヘッダーから隠れたりするのを防ぐ。 -->
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Skill</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>予備</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      </v-navigation-drawer>
    </header>
  </v-app>
</template>

<script>
import constants from './common/constants'

export default {
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems
    }
  }
}
</script>

<style scoped>

</style>
