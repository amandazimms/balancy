import React, { useState } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import Button from 'react-bootstrap/Button';
import {Line, Pie} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


function Today() {

  const [count, setCount] = useState({
              sleep: 0,
              work: 2,
              project: 0,
              veg: 0,
              exercise: 0,
              friends: 0,
              family: 0,
              partner: 0,
              goOut: 0
  });

  const [chartState, setChartState] = useState({
      labels: ['Sleep','Work','Project','Veg','Exercise','Friends','Family','Partner','Go Out'],
      datasets: [ { label: 'TODAY',
                    backgroundColor: ['#B21F00','#C9DE00','#2FDE00','#00A6B4','#6800B4'],
                    hoverBackgroundColor: ['#501800','#4B5000','#175000','#003350','#35014F'],
                    data: [count.sleep, count.work, count.project, count.veg, count.exercise, count.friends, count.family, count.partner, count.goOut]
                } ]
    });

  const addSleep = () => {
    let newCount = count;
    let newSleep = newCount.sleep+1;

    newCount = {...newCount, sleep: newSleep}
    setCount(newCount);

    let newChartState = chartState;
    newChartState.datasets[0].data.splice(0, 1, newSleep);
    console.log('newchartState: ', newChartState);

    setChartState(newChartState);
  }
  const addWork = () => {
    let newCount = count;
    newCount = {...newCount, work: newCount.work+1}
    setCount(newCount);
  }
  const addProject = () => {
    count.project++;
  }
  const addVeg = () => {
    count.veg++;
  }
  const addExercise = () => {
    count.exercise++;
  }
  const addFriends = () => {
    count.friends++;
  }
  const addFamily = () => {
    count.family++;
  }
  const addPartner = () => {
    count.partner++;
  }
  const addGoOut = () => {
    count.goOut++;
  }

  const showTotals = () => {
    console.log("counts:", count);
    console.log('chart state:', chartState);
  }

  return (
    <div>
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
      
      <Button onClick={addSleep}>Sleep: {count.sleep} / {chartState.datasets[0].data[0]}</Button>
      <Button onClick={addWork}>Work</Button>
      <Button onClick={addProject}>Project</Button>
      <Button onClick={addVeg}>Veg</Button>
      <Button onClick={addExercise}>Exercise</Button>
      <Button onClick={addFriends}>Friends</Button>
      <Button onClick={addFamily}>Family</Button>
      <Button onClick={addPartner}>Partner</Button>
      <Button onClick={addGoOut}>Go Out</Button>

      <br>
      </br> 

      <button onClick={showTotals}>Show total counts in console</button>

    </div>
  );
}

export default Today;
