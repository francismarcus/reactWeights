import React, { Component } from 'react';
import 'components/App.css';
import Forms from 'components/Forms';

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
      <div className="App">
       <Forms Get1RM={this.Get1RM} setInitialRMValues={this.setInitialRMValues} />;
      </div>
    );
  }
}

export default App;
