import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home')
    },

    {
        path: '/about',
        component: require('./views/About')
    },

    {
        path: '/contact',
        component: require('./views/Contact')
    },
    {
        path: '/test',
        component: require('./views/Test')
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});
