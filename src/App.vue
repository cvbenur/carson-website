<template>
  <v-app style="background-color: #E55050">
    <Appbar/>

    <v-main>
      <router-view/>
    </v-main>

    <Footer/>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import Appbar from '@/components/Appbar.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Appbar,
    Home,
    Footer,
  },
})
export default class App extends Vue {
}
</script>

<style lang="css">
.v-application {
  font-family: 'Montserrat', sans-serif;
}
</style>
