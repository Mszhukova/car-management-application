export default {
    name: 'counter',
    data: function () {
        currentcount: 0
    },
    methods: {
        incrementCounter: function () {
            this.currentcount++;
        }
    }
}