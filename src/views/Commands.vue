<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="6"
      >
        <h1
          class="white--text font-weight-bold text-center"
          style="font-size: 40px"
        >Commands list</h1>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="5"
        class="pb-0"
      >
        <v-text-field
          v-model="search"
          solo
          clearable
          autofocus
          clear-icon="fas fa-times"
          prepend-inner-icon="fas fa-search"
          color="#820F54"
          background-color="#820F54"
          label="Search commands..."
          single-line
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="center"
      class="py-3"
    >
    </v-row>

    <v-row
      justify="center"
    >
      <v-col
        cols="12"
        sm="2"
        class="pr-sm-4 pa-sm-0"
      >
        <v-card
          color="#820F54"
          :elevation="2"
          class="px-3"
        >
          <v-row
            align="center"
            justify="center"
            class="px-1 pt-4"
          >
            <v-col
              cols="5"
              sm="12"
              class="py-0"
            >
              <v-btn
                block
                :color="cat === 'All' ? 'selected' : 'secondary'"
                class="text-none white--text"
                :elevation="0"
                ripple
                @click="cat = 'All'"
              >All</v-btn>
            </v-col>

            <v-col
              cols="7"
              sm="12"
              class="py-0 pl-0 pl-sm-3 pt-sm-3"
            >
              <v-btn
                block
                :color="cat === 'Settings' ? 'selected' : 'secondary'"
                class="text-none white--text"
                :elevation="0"
                ripple
                @click="cat = 'Settings'"
              >Settings</v-btn>
            </v-col>
          </v-row>

          <v-row
            align="center"
            justify="center"
            class="px-1 pt-3 pb-4"
          >
            <v-col
              cols="7"
              sm="12"
              class="py-0"
            >
              <v-btn
                block
                :color="cat === 'Info' ? 'selected' : 'secondary'"
                class="text-none white--text"
                :elevation="0"
                ripple
                @click="cat = 'Info'"
              >Info</v-btn>
            </v-col>

            <v-col
              cols="5"
              sm="12"
              class="py-0 pl-0 pl-sm-3 pt-sm-3"
            >
              <v-btn
                block
                :color="cat === 'Stats' ? 'selected' : 'secondary'"
                class="text-none white--text"
                :elevation="0"
                ripple
                @click="cat = 'Stats'"
              >Stats</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        class="pa-sm-0"
      >
        <CommandTile
          class="pb-3"
          v-for="(command, i) in filteredSearch"
          :key="i"
          :commandName="command.name"
          :flags="command.flags"
          :usage="command.usage"
          :description="command.description"
          />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import CommandTile from '@/components/CommandTile.vue';
// eslint-disable-next-line no-unused-vars
import Command, { Categories } from '@/models/command';

@Component({
  components: {
    CommandTile,
  },
})
export default class Commands extends Vue {
  public name: string = 'Commands';
  private search: string|null = null;
  private cat: string = Categories.All;
  private filteredSearch: Array<Command> = [];
  private commands: Array<Command> = [
    new Command(
      'command1',
      Categories.Stats,
      'this is how you use this command',
      'dis command do dat',
      ['flag1', 'flag2', 'flag3'],
    ),
    new Command(
      'command2',
      Categories.Info,
      'this is how you use this command',
      'dis command do dat',
      ['flag1'],
    ),
    new Command(
      'command3',
      Categories.Settings,
      'this is how you use this command',
      'dis command do dat',
      ['flag1', 'flag2'],
    ),
    new Command(
      'ziak',
      Categories.Settings,
      'this is how you use this command',
      'dis command do dat',
    ),
  ];

  @Watch('search')
  searchChanged(newVal: string) {
    this.filterSearch(newVal, this.cat);
  }

  @Watch('cat')
  categoryChanged(newVal: string) {
    this.filterSearch(this.search, newVal);
  }

  filterSearch(search: string|null, cat: string) {
    this.filteredSearch = this.commands.filter((command: Command) => (
      (search
        ? command.name.toLowerCase().includes(search.toLowerCase())
        : true)
        && (cat !== Categories.All
          ? command.category === cat
          : true)
    ));
  }

  created() {
    this.filteredSearch = this.commands;
  }
}
</script>
