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
      class="pb-sm-3"
    >
      <v-col
        cols="12"
        sm="6"
        class="pa-sm-0"
      >
        <v-text-field
          v-model="search"
          solo
          clearable
          clear-icon="fas fa-times"
          color="#3d0627"
          background-color="#820F54"
          label="Search commands..."
          single-line
          hide-details
        >
          <v-icon
            slot="prepend-inner"
            color="#3d0627"
          >fas fa-search</v-icon>
        </v-text-field>
      </v-col>
    </v-row>

    <v-spacer class="pb-sm-3"></v-spacer>

    <v-row
      align="center"
      justify="center"
      class="pb-sm-3"
    >
      <v-col
        cols="12"
        sm="6"
        class="pa-sm-0"
      >
        <v-card
          color="#820F54"
          :elevation="2"
          class="px-3"
        >
          <v-row
            align="center"
            justify="center"
            class="px-1 py-4"
          >
            <v-col
              cols="5"
              sm="3"
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
              sm="3"
              class="py-0 pl-0"
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

            <v-col
              cols="7"
              sm="3"
              class="py-sm-0 pt-3 pb-0 pl-sm-0"
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
              sm="3"
              class="py-sm-0 pt-3 pb-0 pl-0"
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
    </v-row>

    <v-spacer class="pb-sm-3"></v-spacer>

    <v-row
      align="center"
      justify="center"
      class="pb-3"
    >
      <v-col
        cols="12"
        sm="6"
        class="pa-sm-0"
      >
        <CommandTile
          class="pb-3"
          ref="tiles"
          v-for="(command, i) in filteredSearch"
          :key="i"
          :id="i"
          :commandName="command.name"
          :args="command.args"
          :usage="command.usage"
          :description="command.description"
          @clicked="handleClick"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  Vue, Component, Watch, Ref,
} from 'vue-property-decorator';
import CommandTile from '@/components/commands/CommandTile.vue';
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
      ['arg1', 'arg2', 'arg3'],
    ),
    new Command(
      'command2',
      Categories.Info,
      'this is how you use this command',
      'dis command do dat',
      ['arg1'],
    ),
    new Command(
      'command3',
      Categories.Settings,
      'this is how you use this command',
      'dis command do dat',
      ['arg1', 'arg2'],
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

  @Ref() tiles!: Array<CommandTile>;

  handleClick(data: { id: number; open: boolean }) {
    if (data.open) {
      for (let i = 0; i < this.tiles.length; i += 1) {
        if (i !== data.id) this.tiles[i].expand = false;
      }
    }
  }

  created() {
    this.filteredSearch = this.commands;
  }
}
</script>
