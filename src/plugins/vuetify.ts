import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E55050',
        secondary: '#EA524C',
        error: '#b71c1c',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
