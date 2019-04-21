import React, { useState, Fragment } from 'react';

export default function Forms(props) {

    const [SquatReps, setSquatReps] = useState('');
    const [SquatWeight, setSquatWeight] = useState('');

    const [BenchReps, setBenchReps] = useState('');
    const [BenchWeight, setBenchWeight] = useState('');

    const [Squat1RM, setSquat1RM] = useState('');
    const [BenchPress1RM, setBenchPress1RM] = useState('');

    // Todo: MOVE ELSEWHERE
    const excercises = [
        {
            name: 'Bench Press (from Bench 1RM',
            ratio: BenchPress1RM * 1.0,
        }, {
            name: 'Close-Grip Bench Press',
            ratio: BenchPress1RM * 0.90,
        }, {
            name: 'Push Press',
            ratio: BenchPress1RM * 0.85,
        }, {
            name: 'Incline Bench Press',
            ratio: BenchPress1RM * 0.80,
        }, {
            name: 'Military Press (standing, strict)',
            ratio: BenchPress1RM * 0.60,
        }, {
            name: 'Dip (bodyweight included)',
            ratio: BenchPress1RM * 1.05,
        }, {
            name: 'Chin-up (bodyweight included)',
            ratio: BenchPress1RM * 0.90,
        }, {
            name: 'Barbell Row',
            ratio: BenchPress1RM * 0.70,
        }, {
            name: 'Preacher Curl',
            ratio: BenchPress1RM * 0.40,
        }, {
            name: 'Standing Reverse Curl',
            ratio: BenchPress1RM * 0.35,
        }, {
            name: 'Deadlift',
            ratio: Squat1RM * 1.2,
        }, {
            name: 'Squat',
            ratio: Squat1RM * 1.0,
        }, {
            name: 'Front Squat',
            ratio: Squat1RM * 0.85,
        }, {
            name: 'Clean & Jerk',
            ratio: Squat1RM * 0.80,
        }, {
            name: 'Snatch',
            ratio: Squat1RM * 0.66,
        }, {
            name: 'Power Clean',
            ratio: Squat1RM * 0.68,
        }, {
            name: 'Power Snatch',
            ratio: Squat1RM * 0.54,
        },
        ]

    const handleSquatWeightChange = event => {
        setSquatWeight(event.target.value);
    }
    const handleSquatRepsChange = event => {
        setSquatReps(event.target.value);
    }

    const handleBenchWeightChange = event => {
        setBenchWeight(event.target.value);
    }
    const handleBenchRepsChange = event => {
        setBenchReps(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        
        if (Squat1RM && BenchPress1RM !== '')
      setProps();
     else setRM();
    }
    const setProps = () => {
        props.Get1RM(Squat1RM, BenchPress1RM);
        props.setInitialRMValues(excercises)
    }
    const setRM = () => {
        setSquat1RM(Math.round(SquatWeight * (1 + SquatReps / 30)));
        setBenchPress1RM(Math.round(BenchWeight * (1 + BenchReps / 30)))
    }

    const handleReset = event => {
        setSquat1RM('')
        setBenchPress1RM('')
    }

    return (
          <>
            {BenchPress1RM && Squat1RM !== "" ? (
              <div>
                <div class="ui segment">
                  <h4 class="ui header">Your Squat 1RM is:</h4>
                  <p>{Squat1RM}</p>
                  <h4 class="ui header">Your Bench Press 1RM is:</h4>
                  <p>{BenchPress1RM}</p>
                </div>
                <button class="ui labeled icon button" onClick={handleReset}>
                  <i class="left arrow icon" />
                  Back
                </button>
      
                <button class="ui right labeled icon button" onClick={handleSubmit}>
                  <i class="right arrow icon" />
                  Next
                </button>
              </div>
            ) : (
              <form class="ui form" onSubmit={handleSubmit}>
                <div class="two fields">
                  <div class="field">
                    <label>I squat </label>
                    <input
                      type="number"
                      placeholder="e.g. 120"
                      value={SquatWeight}
                      onChange={handleSquatWeightChange}
                    />
                  </div>
      
                  <div class="field">
                    <label>for </label>
                    <input
                      type="number"
                      placeholder="Amount of repetitions"
                      value={SquatReps}
                      onChange={handleSquatRepsChange}
                    />
                  </div>
                </div>
      
                <div class="two fields">
                  <div class="field">
                    <label>I benchpress </label>
                    <input
                      type="number"
                      placeholder="e.g. 120"
                      value={BenchWeight}
                      onChange={handleBenchWeightChange}
                    />
                  </div>
      
                  <div class="field">
                    <label>for</label>
                    <input
                      type="number"
                      placeholder="Amount of repetitions"
                      value={BenchReps}
                      onChange={handleBenchRepsChange}
                    />
                  </div>
                </div>
                <button class="ui right labeled icon button" onClick={handleSubmit}>
                  <i class="right arrow icon" />
                  Submit
                </button>
              </form>
            )}
          </>
      );
      









}