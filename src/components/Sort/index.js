import React from "react";
import './style.css'


function Sort(props) {
    const descending = () => {
        const sorted = props.emps.sort((a, b) => {
          return b.salary - a.salary;
        });
        props.handleSort(sorted);
      };
    const ascending = () => {
        const sorted = props.emps.sort((b, a) => {
          return b.salary - a.salary;
        });
        props.handleSort(sorted);
      };
    return (
      <>
        <button onClick={descending} 
          className="sortButton">Sort Descending Salaries
        </button>
        <button onClick={ascending} 
          className="sortButton">Sort Ascending Salaries
        </button>
      </>
      
    )

};

export default Sort;