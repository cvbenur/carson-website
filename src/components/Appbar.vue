<template>
  <v-app-bar
    app
    color="primary"
    dark
    :elevation="4"
    :height="80"
  >
    <div class="mr-3 ml-2">
      <v-btn
        width="auto"
        height="auto"
        :to="'/'"
        icon
        color="transparent"
        :elevation="4"
      >
        <v-avatar size="60">
          <v-img
            alt="Carson Logo round"
            contain
            src="@/assets/carsonround.png"
            transition="scale-transition"
            width="60"
            aspect-ratio="1"
          />
        </v-avatar>
      </v-btn>
    </div>

    <v-avatar size="200">
      <v-img
        src="@/assets/ctext.png"
        contain
        alt="Carson Logo text"
        transition="scale-transition"
      />
    </v-avatar>

    <v-navigation-drawer
      color="primary"
      right
      v-model="sidebar"
      app
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar-items
        class="hidden-xs-only"
      >
        <v-btn
          text
          depressed
          class="text-none"
          v-for="item in items"
          :key="item.title"
          :to="item.to"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <span v-if="!sidebar"
        class="hidden-sm-and-up"
      >
        <v-btn
          icon
          @click="sidebar = true"
        >
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
      </span>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Appbar extends Vue {
  private sidebar: boolean = false;

  private items = [
    {
      title: 'Add to Discord',
      to: 'https://discord.com/api/oauth2/authorize?client_id=696334203490664460&permissions=67497024&scope=bot',
    },
    {
      title: 'Commands',
      to: '',
    },
  ];
}
</script>
