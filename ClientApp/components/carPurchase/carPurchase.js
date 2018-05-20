import globalRoutes from '../../routes.js';
import VLink from '../common/VLink.vue.html'
export default {
    name: 'carPurchase',
    data: function () {
        return {           
            active: false
        }
    },
    computed: {
        getGlobalRoutes: function () {
            return globalRoutes.routes;
        }
    },
    methods: {       
        open: function () {
            console.log(this.globalRoutes);
            this.active = true
        },
        close: function () {
            this.active = false
        },
        onCancel: function () {
            this.close();
        },
        
    },
    render(h) {
       console.log(this)
    },
    components: {
        VLink
    }
    
}


