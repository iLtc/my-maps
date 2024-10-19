import { useEffect } from 'react';

let draw = function() {
    const data = window.google.visualization.arrayToDataTable([
        ['State', {type: 'string', role: 'tooltip'}],
        ['Heilongjiang Sheng', 'Summer 2019'],
        ['Jilin Sheng', 'Summer 2019'],
        ['Zhejiang Sheng', 'Summer 2015 and Spring 2019'],
        ['Guangdong Sheng', '2012 - 2015, Winter 2018'],
        ['Beijing Shi', 'Summer 2015'],
        ['Shanghai Shi', 'Summer 2015'],
        ['HK', 'Sometime 2012'],
        ['Macao SAR', 'Sometime 2012'],
        ['Liaoning Sheng', 'Summer 2012'],
        ['Sichuan Sheng', 'Summer 2010'],
        ['Jiangsu Sheng', 'March 2010'],
        ['Shanxi Sheng', 'When I was young'],
        ['Yunnan Sheng', 'When I was young'],
        ['Jiangxi Sheng', 'When I was young'],
        ['Hunan Sheng', 'When I was young'],
        ['Hubei Sheng', 'When I was young'],
        ['Chongqing Shi', 'When I was young'],
        ['Anhui Sheng', 'Hometown']
    ]);

    const geochart = new window.google.visualization.GeoChart(
        document.getElementById('cn-map'));

    geochart.draw(data, {region: "CN", resolution: "provinces"});
};

function CNMap() {
    useEffect(() => {
        window.google.charts.setOnLoadCallback(draw);
    }, []);

    return (
        <div id="cn-map" className="map"></div>
    );
}

export default CNMap;