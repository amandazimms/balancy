import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import Button from 'react-bootstrap/Button';


function Today() {

  let count = {
    sleep: 0,
    work: 0,
    project: 0,
    veg: 0,
    exercise: 0,
    friends: 0,
    family: 0,
    partner: 0,
    goOut: 0
  }

  const addSleep = () => {
    count.sleep++;
  }
  const addWork = () => {
    count.work++;
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
  }

  return (
    <div>
      <h1>TODAY</h1>
      
      <Button onClick={addSleep}>Sleep</Button>
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
