export default {
    name: 'counter',
    data: function () {
        return {
            currentcount: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.currentcount++;
        }
    }
}