<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-row>
      <v-col cols="6">
        <v-btn
          icon
          :elevation="4"
        >
          <v-img
            alt="Carson Logo round"
            contain
            src="@/assets/carsonround.png"
            transition="scale-transition"
            width="40"
          />
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Appbar extends Vue {
}
</script>
