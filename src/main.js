import { createApp } from 'vue';
import App from './App.vue';
import vuetify from '../resources/js/plugins/vuetify';
import { loadFonts } from '../resources/js/plugins/webfontloader';

loadFonts();

createApp(App).use(vuetify).mount('#app');
