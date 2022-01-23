import React, { useState } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import Button from 'react-bootstrap/Button';
import {Line, Pie} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


function Today() {

  // const [count, setCount] = useState({
  //             sleep: 0,
  //             work: 2,
  //             project: 0,
  //             veg: 0,
  //             exercise: 0,
  //             friends: 0,
  //             family: 0,
  //             partner: 0,
  //             goOut: 0
  // });

  const [chartState, setChartState] = useState({
      thing: ["t","h","i","n","g"],
      labels: ['Sleep','Work','Project','Veg','Exercise','Friends','Family','Partner','Go Out'],
      datasets: [ { label: 'TODAY',
                    backgroundColor: ['#B21F00','#C9DE00','#2FDE00','#00A6B4','#6800B4'],
                    hoverBackgroundColor: ['#501800','#4B5000','#175000','#003350','#35014F'],
                    data: [0,0,0,0,0,0,0,0,0]
                } ]
      });
      
  const [fakeState, setFakeState] = useState(0);  

  const almostNothing = () => {
    let newChartState = chartState;
    let newThingLetter = newChartState.thing[0] + "blablablabla";

    newChartState.thing.splice(0, 1, newThingLetter);

    setChartState({...chartState, thing: newChartState.thing});
    console.log('newChartState', newChartState);

  }

  const addSleep = () => {
    let newChartState = chartState;
    let newSleep = newChartState.datasets[0].data[0] + 1;

    newChartState.datasets[0].data.splice(0, 1, newSleep);
    setChartState(newChartState);

    //TODO WHY does this work? When a 2nd state, such as fakeState, is set, DOM DOES re render
    //if not (if these next two lines are commented) it DOES NOT RERENDER
    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    // console.log('chartState.datasets[0].data:', chartState.datasets[0].data);
   // console.log('fakeState:', fakeState);
  }
  const addWork = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newWork = newChartState.datasets[0].data[1] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(1, 1, newWork);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  const addProject = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newProject = newChartState.datasets[0].data[2] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(2, 1, newProject);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  const addVeg = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newVeg = newChartState.datasets[0].data[3] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(3, 1, newVeg);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  const addExercise = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newExercise = newChartState.datasets[0].data[4] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(4, 1, newExercise);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);
    
    setChartState(newChartState);
  }
  const addFriends = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newFriends = newChartState.datasets[0].data[5] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(5, 1, newFriends);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  const addFamily = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newFamily = newChartState.datasets[0].data[6] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(6, 1, newFamily);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  const addPartner = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newPartner = newChartState.datasets[0].data[7] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(7, 1, newPartner);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  const addGoOut = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newGoOut = newChartState.datasets[0].data[8] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(8, 1, newGoOut);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }

  const showTotals = () => {
    console.log('chart state:', chartState);
  }

  return (
    <div>
        <p>thing:{JSON.stringify(chartState.thing)}</p>
        {/* <p>chartState.datasets[0].data:{JSON.stringify(chartState.datasets[0].data)}</p> */}
        <Pie
          data={chartState} redraw
          options={{
            title:{
              display:true,
              text:'Todayyyy',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

      <h1>TODAY</h1>
      
      <Button onClick={almostNothing}>Thing Button</Button>
      <Button onClick={addSleep}>Sleep: {chartState.datasets[0].data[0]}</Button>
      <Button onClick={addWork}>Work: {chartState.datasets[0].data[1]}</Button>
      <Button onClick={addProject}>Project: {chartState.datasets[0].data[2]}</Button>
      <Button onClick={addVeg}>Veg: {chartState.datasets[0].data[3]}</Button>
      <Button onClick={addExercise}>Exercise: {chartState.datasets[0].data[4]}</Button>
      <Button onClick={addFriends}>Friends: {chartState.datasets[0].data[5]}</Button>
      <Button onClick={addFamily}>Family: {chartState.datasets[0].data[6]}</Button>
      <Button onClick={addPartner}>Partner: {chartState.datasets[0].data[7]}</Button>
      <Button onClick={addGoOut}>Go Out: {chartState.datasets[0].data[8]}</Button>

      <br>
      </br> 

      <button onClick={showTotals}>Show total counts in console</button>

    </div>
  );
}

export default Today;
