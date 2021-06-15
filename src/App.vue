<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <Home/>
    </v-content>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    AppFooter
  }
}
</script>
