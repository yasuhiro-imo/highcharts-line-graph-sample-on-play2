function chartIndicator() {

    Highcharts.chart('chart-indicator', {

        chart: {
            scrollablePlotArea: {
                minWidth: 700
            }
        },

        data: {
            csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
            // csvURL: 'https://stopcovid19.metro.tokyo.lg.jp/data/130001_tokyo_covid19_patients.csv',
            beforeParse: function (csv) {
                return csv.replace(/\n\n/g, '\n');
            }
        },

        title: {
            text: 'Daily sessions at www.highcharts.com'
        },

        subtitle: {
            text: 'Source: Google Analytics'
        },

        xAxis: {
            tickInterval: 7 * 24 * 3600 * 1000, // one week
            tickWidth: 0,
            gridLineWidth: 1,
            labels: {
                align: 'left',
                x: 3,
                y: -3
            }
        },

        yAxis: [
            { // left y axis
                title: {
                    text: ''
                },
                labels: {
                    align: 'left',
                    x: 3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }, { // right y axis
                linkedTo: 0,
                gridLineWidth: 0,
                opposite: true,
                title: {
                    text: ''
                },
                labels: {
                    align: 'right',
                    x: -3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }
        ],

        legend: {
            align: 'left',
            verticalAlign: 'top',
            borderWidth: 0
        },

        tooltip: {
            shared: true,
            crosshairs: true
        },

        // series: [{
        //     name: 'All sessions',
        //     lineWidth: 4,
        //     marker: {
        //         radius: 4
        //     }
        // }, {
        //     name: 'New users'
        // }]
    });





}
