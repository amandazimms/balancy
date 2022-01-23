import React, { useState } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import Button from 'react-bootstrap/Button';
import {Line, Pie} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import StarRating from '../StarRating/StarRating';
Chart.register(ArcElement);
Chart.register(ChartDataLabels);

function Today() {

  const colors = {
    sleep: '#01295F', work: '#437F97', 
    project: '#849324', exercise: '#CAA71B', veg: '#FFC800', goOut: '#FF7B0F',
    friends: '#CE1218', family: '#882134', partner: '#522A5C' 
  }

  const [chartState, setChartState] = useState({
      thing: ["t","h","i","n","g"],
      // todo delete ^ - for test only
      labels: ['Sleep','Work','Project','Exercise','Veg','Go Out','Friends','Family','Partner'],
      datasets: [ { label: 'TODAY',
                    backgroundColor: [colors.sleep, colors.work, colors.project, colors.exercise, colors.veg, colors.goOut, colors.friends, colors.family, colors.partner],
                    hoverBackgroundColor: [colors.sleep, colors.work, colors.project, colors.exercise, colors.veg, colors.goOut, colors.friends, colors.family, colors.partner],
                    data: [0,0,0,0,0,0,0,0,0],
                    datalabels: { color: '#000'}
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
  const addExercise = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newExercise = newChartState.datasets[0].data[3] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(3, 1, newExercise);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);
    
    setChartState(newChartState);
  }

  const addVeg = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newVeg = newChartState.datasets[0].data[4] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(4, 1, newVeg);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  const addGoOut = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newGoOut = newChartState.datasets[0].data[5] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(5, 1, newGoOut);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  
  const addFriends = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newFriends = newChartState.datasets[0].data[6] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(6, 1, newFriends);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  const addFamily = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newFamily = newChartState.datasets[0].data[7] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(7, 1, newFamily);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }
  const addPartner = () => {
    let newChartState = chartState;
    //todo need to not hardcode .data[whatever]
    let newPartner = newChartState.datasets[0].data[8] + 1;
    //todo need to not hardcode .splice(firstNumber
    newChartState.datasets[0].data.splice(8, 1, newPartner);

    let newFakeState = fakeState + 1;
    setFakeState(newFakeState);

    setChartState(newChartState);
  }

  const showTotals = () => {
    console.log('chart state:', chartState);
  }

  return (
    <div>
        {/* <p>thing:{JSON.stringify(chartState.thing)}</p> */}
        {/* <p>chartState.datasets[0].data:{JSON.stringify(chartState.datasets[0].data)}</p> */}
        <h1>TODAY</h1>

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
              labels: {
                color: 'rgb(255, 99, 132)'
              },
              position:'right'
            },
            plugins: {
              datalabels: {
                display: true,
                formatter: (val, ctx) => {
                  if (val>0){
                    return ctx.chart.data.labels[ctx.dataIndex];
                  } else {
                    return "";
                  }
                },
                color: '#36A2EB'
              }
            },
            animation: {
              duration: 0
            }
          }}
        />
      
        <StarRating/>

        <div className='flexCenter'> 
          {/* <Button onClick={almostNothing} style={{backgroundColor: colors.sleep}}>Thing Button</Button> */}
          <Button className='btnLogger' onClick={addSleep} style={{backgroundColor: colors.sleep}}>Sleep: {chartState.datasets[0].data[0]}</Button>
          <Button className='btnLogger' onClick={addWork} style={{backgroundColor: colors.work}}>Work: {chartState.datasets[0].data[1]}</Button>
        
          <Button className='btnLogger' onClick={addProject} style={{backgroundColor: colors.project}}>Project: {chartState.datasets[0].data[2]}</Button>
          <Button className='btnLogger' onClick={addExercise} style={{backgroundColor: colors.exercise}}>Exercise: {chartState.datasets[0].data[3]}</Button>
          <Button className='btnLogger' onClick={addVeg} style={{backgroundColor: colors.veg}}>Veg: {chartState.datasets[0].data[4]}</Button>
          <Button className='btnLogger' onClick={addGoOut} style={{backgroundColor: colors.goOut}}>Go Out: {chartState.datasets[0].data[5]}</Button>

          <Button className='btnLogger' onClick={addFriends} style={{backgroundColor: colors.friends}}>Friends: {chartState.datasets[0].data[6]}</Button>
          <Button className='btnLogger' onClick={addFamily} style={{backgroundColor: colors.family}}>Family: {chartState.datasets[0].data[7]}</Button>
          <Button className='btnLogger' onClick={addPartner} style={{backgroundColor: colors.partner}}>Partner: {chartState.datasets[0].data[8]}</Button>
        </div>       
    </div>
  );
}

export default Today;
