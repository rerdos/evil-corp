import React from 'react';
import ReactHighcharts from 'react-highcharts';

export default ({ chartTitle, xAxisTitle, yAxisTitle, chartDataName, chartData }) => {
  const config = {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        backgroundColor: '#d7dcc9'
    },
    title: {
        text: chartTitle
    },
    xAxis: {
        title: {
            text: xAxisTitle
        }
    },
    yAxis: {
        title: {
            text: yAxisTitle
        }
    },
    series: [{
        name: chartDataName,
        color: '#829356',
        data: chartData
    }]
  };

  return (
      <ReactHighcharts config={config} />
  );
};