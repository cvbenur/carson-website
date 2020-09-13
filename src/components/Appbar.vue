<template>
  <v-app-bar
    app
    color="primary"
    dark
    :elevation="4"
    :height="80"
  >
    <div>
      <v-btn
        :to="'/'"
        color="transparent"
        depressed
        text
      >
        <v-avatar size="60" width="60" :elevation="4">
          <v-img
            alt="Carson Logo round"
            contain
            src="@/assets/carsonround.png"
            transition="scale-transition"
            aspect-ratio="1"
            href="/"
          />
        </v-avatar>

        <v-avatar width="175" height="60" tile class="ml-4">
          <v-img
            src="@/assets/ctext.png"
            contain
            alt="Carson Logo text"
            transition="scale-transition"
          />
        </v-avatar>
      </v-btn>
    </div>

    <v-toolbar-items
      class="hidden-xs-only"
    >
      <v-btn
        text
        depressed
        class="white--text text-none font-weight-black mx-2"
        style="font-size: 1rem"
        v-for="(item, i) in items"
        :key="i"
        :href="item.to"
        ripple
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>

    <v-navigation-drawer
      app
      color="primary"
      right
      v-model="sidebar"
      absolute
      temporary
    >
      <v-list>
        <v-list-item>
          <v-spacer></v-spacer>
          <span v-if="sidebar"
            class="hidden-sm-and-up my-2"
          >
            <v-btn
              icon
              @click="sidebar = false"
            >
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </span>
        </v-list-item>
        <v-list-item
          class="white--text text-none font-weight-black mx-2"
          style="font-size: 1.75rem"
          v-for="(item, i) in items"
          :key="i"
          :href="item.to"
        >
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
      to: '/commands',
    },
    {
      title: 'About',
      to: '/about',
    },
  ];
}
</script>
