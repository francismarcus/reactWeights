import React, { Component, Fragment } from 'react';
import 'components/App.css';

import Forms from 'components/Forms';
import List from 'components/List';

class App extends Component {
  state = {
    Squat1RM: '',
    BenchPress1RM: '',
    Values: false,
    InitialValues: ''
  }

  Get1RM = (Squat1RM, BenchPress1RM) => {
    this.setState({
      Squat1RM: Squat1RM,
      BenchPress1RM: BenchPress1RM,
      Values: true
    });
  }
  setInitialRMValues = (excercises) => {
    this.setState({
      InitialValues: excercises
    })
  }

  render() {
    return (
      <>
        <div className="App">
          {this.state.Values ? (
            <List
              Squat1RM={this.state.Squat1RM}
              BenchPress1RM={this.state.BenchPress1RM}
              InitialValues={this.state.InitialValues}
            />
          ) : (
            <div className="Content">
            <Forms
              Get1RM={this.Get1RM}
              setInitialRMValues={this.setInitialRMValues}
            />
          </div>
          )}

        </div>
      </>
    );
  }
}


export default App;
