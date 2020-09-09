import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#99B9EC',
        secondary: '#129E8E',
        accent: '#E46060',
        error: '#b71c1c',
      },
    },
  },
});
