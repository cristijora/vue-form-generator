import Vue from "vue";
import VueFormGenerator from "../../src";
import VueRouter from "vue-router";
Vue.use(VueFormGenerator);
Vue.use(VueRouter);

import routes from "./routes"
const router = new VueRouter({
    routes,
    linkActiveClass: "active"
});

import App from "./app.vue"
new Vue({
    el: '#app',
    router,
    render: h => h(App),
})