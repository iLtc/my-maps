import { useEffect } from 'react';

let draw = function() {
    const data = window.google.visualization.arrayToDataTable([
        ['State', {type: 'string', role: 'tooltip'}],
        ['China', '1994 - Present'],
        ['United States', '2015 - 2018 and 2019 - Present'],
        ['France', 'Summer 2013'],
        ['Italy', 'Summer 2013'],
        ['Switzerland', 'Summer 2013'],
        ['Canada', 'June 2024']
    ]);

    const geochart = new window.google.visualization.GeoChart(
        document.getElementById('world-map'));

        window.google.visualization.events.addListener(geochart, 'select', function () {
        let selection = geochart.getSelection();

        if (selection.length > 0) {
            let country = data.getValue(selection[0].row, 0);

            if (country === 'China') {
                window.location.hash = 'cn';
            } else if (country === 'United States') {
                window.location.hash = 'us';
            }
        }
    });

    geochart.draw(data);
};

function WorldMap() {
    useEffect(() => {
        window.google.charts.setOnLoadCallback(draw);
    }, []);

    return (
        <div id="world-map" className="map"></div>
    );
}

export default WorldMap;