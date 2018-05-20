import './css/site.css';
import 'bootstrap';
import routes from './routes.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


const app = new Vue({
    el: '#app-root',
    router: new VueRouter({
        mode: 'history', routes: routes.routes
    }),
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            var me = this;
            var matchingView =
                this.$router.options.routes
                    .find(function (item) {
                        return me.currentRoute == item.path;
                    })
            return matchingView ? matchingView.component : require('./components/home/home.vue.html');
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
});


window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})

