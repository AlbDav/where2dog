import Vue from 'vue'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import MegaMenu from 'primevue/megamenu';

Vue.use(PrimeVue, {ripple: true});
Vue.component('Button', Button);
Vue.component('MegaMenu', MegaMenu);