export default {
    name: "carsDropList",
    data: function () {
        return {
            selected: ''
        }
    },
    mounted: function () {
        fetch('api/ToDo')
            .then(response => response.json())
            .then(data => {
                this.selected = data;
            });
    }
}

