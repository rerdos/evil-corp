import React from 'react';
import { shallow } from 'enzyme';
import ScatterChart from './ScatterChart.jsx';

const config = {
  chart: {
      type: 'scatter',
      zoomType: 'xy',
      backgroundColor: '#d7dcc9'
  },
  title: {
      text: 'Game of Thrones deaths by surprisement'
  },
  xAxis: {
      title: {
          text: 'Level of surprisement'
      }
  },
  yAxis: {
      title: {
          text: 'Number of deaths'
      }
  },
  series: [{
      name: 'Game of Thrones deaths',
      color: '#829356',
      data: [[1, 2], [2, 3]]
  }]
};

describe('Component: <ScatterChart />', () => {
  it('renders <ScatterChart /> component', () => {
    const wrapper = shallow(<ScatterChart />);
    expect(wrapper.find('HighchartsChart').length).toBe(1);
  });
  
  it('maps the correct config values', () => {
    const wrapper = shallow(<ScatterChart
      chartTitle={config.title.text}
      xAxisTitle={config.xAxis.title.text}
      yAxisTitle={config.yAxis.title.text}
      chartDataName={config.series[0].name}
      chartData={config.series[0].data} />);
    expect(wrapper.find('HighchartsChart').props().config).toEqual(config);
  });
});