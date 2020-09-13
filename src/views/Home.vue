<template>
  <v-container fluid class="pa-0">
    <v-row
      align="center"
      justify="center"
      class="mx-auto"
    >
      <v-spacer></v-spacer>
      <v-col cols="12" sm="8" class="pa-0">
        <v-img
          contain
          class="svg-bg"
          src="@/assets/bg.svg"
          max-height="500px"
          aspect-ratio="1"
        ></v-img>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="center"
      class="mx-auto go-lower"
    >
      <v-col order-sm="2" cols="12" sm="6" class="text-center">
        <div
          class="white--text font-weight-bold text-sm-left"
          style="font-size: 3rem"
        >
          ROCK YOUR STATS WITH CARSON
        </div>

        <v-spacer class="ma-5"></v-spacer>

        <v-btn
          class="font-weight-bold text-none mx-auto"
          style="font-size: 1.75rem"
          rounded
          dark
          color="secondary"
          :href="'https://discord.com/api/oauth2/authorize?client_id=696334203490664460&permissions=67497024&scope=bot'"
          :elevation="10"
          x-large
          ripple
        >
          Add to Discord
        </v-btn>
      </v-col>

      <v-col order-sm="1" cols="12" sm="6">
        <v-img
          contain
          src="@/assets/figure.svg"
          max-height="500"
        ></v-img>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="center"
      class="mx-auto"
    >
      <v-img
        contain
        src="@/assets/low.svg"
        class="svg-low"
      ></v-img>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
}
</script>

<style lang="css">
.svg-low {
}

.svg-bg {
}

.go-lower {
}
</style>
