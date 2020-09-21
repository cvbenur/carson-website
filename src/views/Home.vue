<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row
      align="center"
      justify="center"
      class="mx-auto go-lower"
    >
      <v-col cols="12" sm="10">
        <v-row
          align="center"
          justify="space-around"
          class="mx-auto"
        >
          <v-col order-sm="2" cols="12" sm="6" class="text-center">
            <span
              class="white--text"
              style="font-size: 3rem; font-weight: 900;"
            >
              ROCK YOUR STATS WITH CARSON
            </span>

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
              hover
            >
              Add to Discord
            </v-btn>
          </v-col>

          <v-col order-sm="1" cols="12" sm="6">
            <v-img
              contain
              src="@/assets/img/figure.svg"
              max-height="500"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <Low class="low"/>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Low from '@/components/home/Low.vue';

@Component({
  components: {
    Low,
  },
})
export default class Home extends Vue {
}
</script>

<style scoped>
.go-lower {
  margin-bottom: -17vh;
}

.low {
  margin-bottom: -2.5vh;
}
</style>
