<template>
  <v-footer
    app
    color="#820F54"
    class="white--text"
    abslolute
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      color="#820F54"
    >
      <v-card-title>
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <p
              class="white--text flex-nowrap"
              style="font-size: 0.8rem;"
            >With <strong>Carson</strong>, your insights are just a command away.</p>
          </v-col>
          <v-col cols="12" sm="6" class="">
            <p
              class="white--text flex-nowrap"
              style="font-size: 0.8rem;"
            >
              Carson and this website were both written by
               <strong style="color: #78A4FA">Benur#1598</strong>.
            </p>
            <v-btn
              v-for="icon in icons"
              :key="icon.title"
              icon
              dark
              :href="icon.to"
              target="_blank"
            >
              <v-icon>{{ icon.icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center" style="font-size: 0.75rem">
        <p>© 2020 - <strong>Carson the Statbot</strong></p>
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
  ];
}
</script>
