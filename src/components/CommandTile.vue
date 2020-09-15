<template>
  <v-container fluid class="pa-0">
    <v-card
      color="#820F54"
      :elevation="2"
      @click="onClick"
      :ripple="false"
    >
      <v-card-title class="white--text">
        <v-icon color="white" class="mr-2 pr-2" size="12px">
          {{ !expand ? 'fas fa-chevron-right' : 'fas fa-chevron-down' }}
        </v-icon>

        <span>
          <strong>
            {{ commandName }}
          </strong>
           <span v-if="flags.length > 0">
            <span
              v-for="(flag, i) in flags.length"
              :key="i"
            >
              [{{ flag }}]<span v-if="i !== flags.length-1">, </span>
            </span>
          </span>
        </span>
      </v-card-title>

      <v-expand-transition>
        <div v-show="expand">
          <v-card-text class="white--text">
            {{ usage }}
          </v-card-text>

          <v-card-text class="white--text">
            {{ description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Emit,
} from 'vue-property-decorator';

@Component({})
export default class Command extends Vue {
  public expand: boolean = false;

  @Prop({ required: true })
  id!: number;

  @Prop({ required: true })
  commandName!: string;

  @Prop({ required: true })
  usage!: string;

  @Prop({ required: false, default: null })
  flags!: Array<string>;

  @Prop({ required: true })
  description!: string;

  onClick() {
    this.expand = !this.expand;
    this.submit();
  }

  @Emit('clicked')
  submit() {
    return {
      id: this.id,
      open: this.expand,
    };
  }
}
</script>
