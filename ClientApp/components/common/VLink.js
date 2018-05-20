export default {
    props: {        
        href: {
            type: String,
            required: true
        },
        routes: {
            type: Array,
            required: true
        }
    },
    
    computed: {
        isActive() {
            return this.href === this.$root.currentRoute
        }
    },
    methods: {
        go(event) {
            event.preventDefault()
            this.$root.currentRoute = this.href
            window.history.pushState(
                null,
                this.routes[this.href],
                this.href
            )
        }
    }
}
