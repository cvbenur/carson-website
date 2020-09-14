<template>
  <v-container fluid>
    <h1
      class="white--text font-weight-bold text-center"
      style="font-size: 40px"
    >Command list</h1>

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
      align="top"
      justify="center"
    >
      <v-col cols="12" sm="4" class="pa-0 pr-4">
        <v-card
          color="#820F54"
          :elevation="2"
        >
          <div class="d-flex flex-wrap justify-center px-2 pt-2">
            <v-btn
              v-for="(cat, i) in categories"
              block
              :key="i"
              color="secondary"
              class="text-none mb-2"
              :elevation="0"
              ripple
            >{{ cat }}</v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" class="pa-0">
        <CommandTile
          class="pb-3"
          v-for="(command, i) in filteredSearch"
          :key="i"
          :commandName="command.name"
          :category="command.category"
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
import Command from '@/models/command';

@Component({
  components: {
    CommandTile,
  },
})
export default class Commands extends Vue {
  public name: string = 'Commands';
  private search: string|null = null;
  private categories: Array<string> = [
    'All',
    'Settings',
    'Info',
    'Stats',
  ];

  private commands: Array<Command> = [
    new Command(
      'command1',
      'general',
      'this is how you use this command',
      'dis command do dat',
      ['flag1', 'flag2', 'flag3'],
    ),
    new Command(
      'command2',
      'info',
      'this is how you use this command',
      'dis command do dat',
      ['flag1'],
    ),
    new Command(
      'command3',
      'settings',
      'this is how you use this command',
      'dis command do dat',
      ['flag1', 'flag2'],
    ),
    new Command(
      'ziak',
      'settings',
      'this is how you use this command',
      'dis command do dat',
    ),
  ];

  @Watch('search')
  searchChanged(newVal: string) {
    this.filteredSearch = (
      this.search == null
        ? this.filteredSearch = this.commands
        : this.filteredSearch = this.commands.filter(
          c => c.name.toLowerCase().includes(newVal.toLowerCase()),
        )
    );
  }

  private filteredSearch: Array<Command> = [];

  created() {
    this.filteredSearch = this.commands;
  }
}
</script>
