import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ED6964',
        secondary: '#EA524C',
        error: '#b71c1c',
      },
    },
  },
});
