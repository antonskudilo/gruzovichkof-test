require('./bootstrap');
window.Vue = require('vue');

import App from "./components/App";
import router from "./components/router/router";
import VueRouter from "vue-router";
import Navbar from "./components/parts/Navbar";
import {initialize} from "./helpers/general";
import moment from 'moment'

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD-MM-YYYY H:MM:ss')
    }
});

Vue.use(VueRouter);
initialize(router);
Vue.component('navbar', Navbar);

const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
