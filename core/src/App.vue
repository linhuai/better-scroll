<template>
  <div id="app">
    <router-view/>
    <loading v-show="loadingState"></loading>
  </div>
</template>

<script>
import { Loading } from '@/components/common'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: { Loading },
  computed: {
    ...mapGetters(['loadingState'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
