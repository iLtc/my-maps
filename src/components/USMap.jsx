import { useEffect } from 'react';

let draw = function() {
    const data = window.google.visualization.arrayToDataTable([
        ['State', {type: 'string', role: 'tooltip'}],
        ['Iowa', '2015 - 2018'],
        ['Illinois', 'Summer 2016'],
        ['California', 'Thanksgiving Break 2015, Summer 2018, and 2021 - Present'],
        ['Connecticut', 'Summer 2017'],
        ['Delaware', 'Summer 2017'],
        ['Massachusetts', 'Summer 2017'],
        ['New Jersey', 'Summer 2017 and 2019 - 2021'],
        ['New York', 'Summer 2017 and 2019 - 2021'],
        ['Pennsylvania', 'Summer 2017'],
        ['Rhode Island', 'Summer 2017'],
        ['Nevada', 'Spring Break 2017 and September 2023'],
        ['Arizona', 'September 2023'],
        ['Oregon', 'Thanksgiving 2023'],
        ['Washington', 'Thanksgiving 2023']
    ]);

    const geochart = new window.google.visualization.GeoChart(
        document.getElementById('us-map'));

    geochart.draw(data, {region: "US", resolution: "provinces"});
};

function USMap() {
    useEffect(() => {
        window.google.charts.setOnLoadCallback(draw);
    }, []);

    return (
        <div id="us-map" className="map"></div>
    );
}

export default USMap;
