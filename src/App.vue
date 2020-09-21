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
import Appbar from '@/components/app/Appbar.vue';
import Footer from '@/components/app/Footer.vue';

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

.v-main {
  background-image: url('./assets/img/bg.svg');
  background-repeat: repeat;
  background-size: 50rem;
  background-position-x: -30%;
  background-position-y: 0%;
}
</style>
