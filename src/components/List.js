import React, { useState, useEffect, Fragment } from 'react';

/**
 * @props {Number} Squat1RM - State passed from components/forms 
 * @props {Number} BenchPress1RM - State passed from components/forms 
 * @props {Array} InitialValues - {name, ratio}
 * @InitialValues {string} name - Name of the excercise
 * @InitialValues {number} ratio - 1RM of the excercise
 */
export default function List(props) {

    const [Squat1RM, setSquat1RM] = useState();
    const [BenchPress1RM, setBenchPress1RM] = useState();

    useEffect(() => {
        console.log(props)
        setSquat1RM(props.Squat1RM)
        setBenchPress1RM(props.BenchPress1RM)

        if (BenchPress1RM && Squat1RM !== '')
        console.log(BenchPress1RM, Squat1RM)
    })

   function renderList() {
        return props.InitialValues.map((IV) => {
          return (
          <>
            <tr>
            <td>{IV.name}</td>
            <td>{Math.round(IV.ratio)}</td>
            <td>{Math.round(IV.ratio * 0.87)}</td>
            <td>{Math.round(IV.ratio * 0.80)}</td>
            <td>{Math.round(IV.ratio * 0.70)}</td>
            </tr>
            </>
            )
        })
    }
            
    return (
          <>
            <div class="ui container">
            <table class="ui celled table">
                <tbody>
                <tr>
                    <th>Excercise</th>
                    <th>1RM</th>
                    <th>5RM</th>
                    <th>8RM</th>
                    <th>12RM</th>
                </tr>
                {renderList()}
                </tbody>
            </table>
            </div>
          </>
      );     
}
