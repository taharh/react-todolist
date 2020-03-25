import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




/*
const jobs = [ {id :1 , isActive : true}
,              {id:2 , isActive: false}
,              {id:3 , isActive:true }
];

const activeJobs=jobs.filter(job=>job.isActive);
console.log(activeJobs);
const colors = ["red" , "blue" , "green"]
const newcolors = colors.map(color=>"<li>"+color+"</li>");
console.log(newcolors);
const obj1 = {a:1,b:2,c:3}
const obj2 = {d:4,e:5,f:6}
const obj3 = {...obj1,...obj2}
console.log(obj3);*/
