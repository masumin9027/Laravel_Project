import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Index}
];

export default new VueRouter({ routes });
