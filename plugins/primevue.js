import Vue from 'vue'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import Dock from 'primevue/dock';

Vue.use(PrimeVue, {ripple: true});
Vue.component('Button', Button);
Vue.component('Menubar', Menubar);
Vue.component('Dock', Dock);