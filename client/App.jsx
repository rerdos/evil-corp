import React, { Component } from 'react';
import { LoadingSpinner, Notification, ScatterChart } from './components';
import getReport from './services/api/getReport/getReport';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
          potentialSharePrices: [],
          isLoading: true,
          fetchError: false
        };
    }

    updateState(data) {
      this.setState(Object.assign(
        {},
        this.state,
        data
      ));
    }

    componentWillMount() {
      getReport()
        .then(potentialSharePrices =>
          this.updateState({ potentialSharePrices, isLoading: false }))
        .catch(() =>
          this.updateState({ fetchError: true, isLoading: false }));
    }

    render() {
        return (
            <div>
              {
                !this.state.isLoading && !this.state.fetchError &&
                  <ScatterChart
                    chartTitle="Potential share prices of companies in 2018 predicted by EvilCorp"
                    xAxisTitle="Number of employees"
                    yAxisTitle="Share price (GBX)"
                    chartDataName="London based companies"
                    chartData={this.state.potentialSharePrices} />
              }
              {
                this.state.isLoading &&
                  <LoadingSpinner />
              }
              { this.state.fetchError &&
                  <Notification
                    type="error"
                    message="Sorry, EvilCorp cannot serve you the requested data!" />
              }
            </div>
        );
    }
}