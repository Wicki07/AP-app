import './bootstrap';
import { createApp } from 'vue';
import router from './router';
// import vuetify from './plugins/vuetify';
import { createVuetify } from 'vuetify';
import { loadFonts } from './plugins/webfontloader';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import TheNav from './components/TheNav.vue';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

loadFonts();

const app = createApp({});
const vuetify = createVuetify({
  components,
  directives,
});

app.use(router).use(vuetify);
app.component('TheNav', TheNav);
app.mount('#app');

