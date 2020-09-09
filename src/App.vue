<template>
  <v-app style="background-color: #E55050">
    <Appbar/>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import Appbar from '@/components/Appbar.vue';

@Component({
  components: {
    Appbar,
    Home,
  },
})
export default class App extends Vue {
}
</script>
