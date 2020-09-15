<template>
  <v-footer
    height="200"
    app
    color="#820F54"
    class="white--text"
    absolute
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      color="#820F54"
    >
      <v-row
        no-gutters
        align="center"
        justify="space-around"
        class="white--text"
      >
        <v-col
          cols="12"
          sm="4"
          class="text-center text-sm-left my-4"
        >
          <v-card-text style="font-size: 1.5rem">
            Your server stats, <strong>made simple</strong>.
          </v-card-text>
          <v-card-text>
        Carson is an easy to use, but <strong>very sassy</strong> StatBot for your Discord server.
          </v-card-text>
        </v-col>

        <v-col
          cols="12"
          sm="4"
          class="text-center my-4"
        >
          <v-btn
            class="font-weight-bold text-none"
            dark
            :href="'https://discord.com/api/oauth2/authorize?client_id=696334203490664460&permissions=67497024&scope=bot'"
            color="secondary"
            :elevation="3"
            x-large
            ripple
          >
            Add to Discord
          </v-btn>
        </v-col>

        <v-col
          cols="12"
          sm="4"
          class="text-center text-sm-right my-4"
        >
          <v-card-text>
            Follow Carson on social media !
          </v-card-text>

          <div class="mb-5">
            <v-btn
              v-for="(icon, i) in icons"
              :key="i"
              :href="icon.to"
              icon
              dark
              class="mx-4"
              ripple
            >
              <v-icon
                size="40px"
              >
                {{ icon.icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row
        no-gutters
        align="center"
        justify="center"
        class="white--text"
      >
        <v-col cols="12" sm="3" class="text-center my-3"><v-card-text>Colonne</v-card-text></v-col>
        <v-col cols="12" sm="3" class="text-center my-3"><v-card-text>Colonne</v-card-text></v-col>
        <v-col cols="12" sm="3" class="text-center my-3"><v-card-text>Colonne</v-card-text></v-col>

        <v-col cols="12" sm="3" class="text-center my-3">
          <v-card-text
            class="py-2"
            style="font-size: 0.75rem">
            Written by <strong style="color: #78A4FA" class="ml-1">
              <v-icon size="20px" color="#78A4FA">
                fab fa-discord
              </v-icon> Benur#1598
            </strong>
          </v-card-text>
          <v-btn
            v-for="(icon, i) in icons"
            :key="i"
            :href="icon.to"
            icon
            dark
            hover
            ripple
          >
            <v-icon
              size="20px"
            >
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-card-text
        class="py-2 white--text text-center"
        style="font-size: 0.75rem">
        &copy; 2020 - <strong>Carson the Statbot</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {
  private icons = [
    {
      title: 'GitHub',
      icon: 'fab fa-github',
      to: 'https://github.com/cvbenur',
    },
    {
      title: 'LinkedIn',
      icon: 'fab fa-linkedin',
      to: 'https://www.linkedin.com/in/ruben-nabet-9798401b6/',
    },
    {
      title: 'Twitter',
      icon: 'fab fa-twitter',
      to: '/',
    },
    {
      title: 'Discord',
      icon: 'fab fa-discord',
      to: '/',
    },
  ];
}
</script>
