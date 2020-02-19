import React, { useState } from "react";
import './style.css'


function Sort(props) {
   
    const [ salary, setSalary ] = useState([]);
    const sortBySalary = () => {
        const sorted = props.tomemployees.sort((a, b) => {
          return b.salary - a.salary;
        });
        props.handleSort(sorted);
      };
      return (
        <button onClick={sortBySalary} className="sortButton">Sort Descending Salaries</button>
        
      )

};

export default Sort;