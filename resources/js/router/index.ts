import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/layout/Main'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Main}
];

export default new VueRouter({ routes });
