<template>
  <v-container fluid class="pa-0">
    <v-card
      color="#820F54"
      :elevation="2"
    >
      <v-card-title class="white--text">
        {{ commandName }}
      </v-card-title>

      <v-card-text
        v-if="flags"
        class="white--text"
      >
        {{ flags }}
      </v-card-text>

      <v-card-text class="white--text">
        {{ usage }}
      </v-card-text>

      <v-card-text class="white--text">
        {{ description }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Command extends Vue {
  @Prop({ required: true })
  commandName!: string;

  @Prop({ required: true })
  usage!: string;

  @Prop({ required: false, default: null })
  flags!: Array<string>;

  @Prop({ required: true })
  description!: string;
}
</script>
