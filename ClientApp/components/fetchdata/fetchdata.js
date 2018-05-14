export default {
    name: 'fetch-data',
    data: function () {
        forecasts: []
    },
    methods: {
        mounted: function () {
            fetch('api/SampleData/WeatherForecasts')
                .then(response => response.json())
                .then(data => {
                    this.forecasts = data;
                });
        }
    }
}