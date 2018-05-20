export default {
    routes:[
        { path: '/', component: require('./components/home/home.vue.html') },
        { path: '/counter', component: require('./components/counter/counter.vue.html') },
        { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') },
        { path: '/helloWorld', component: require('./components/helloWorld/helloWorld.vue.html') },
        { path: '/carList', component: require('./components/carList/carList.vue.html') },
        { path: '/carPurchase', component: require('./components/carPurchase/carPurchase.vue.html') },
        { path: '/carsDropList', component: require('./components/carsDropList/carsDropList.vue.html') }
    ]
}