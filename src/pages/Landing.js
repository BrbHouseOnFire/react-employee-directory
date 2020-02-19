import React, { useState } from "react";
import eeData from "../utils/emps.json";

import EmployeeCard from "../components/employeeCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Sort from "../components/Sort/index.js";
import Navbar from "../components/Navbar";
import "./style.css";




function Landing() {

  const [ employees, setEmployees] = useState(eeData);
  const [ search, setSearch] = useState('');

  //    State Handler
  const handleInputChange = event => {
    setSearch(event.target.value);
  }
  //   viewable employee filter
  const results = employees.filter(employee =>
    employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )
  const handleSort = (newOrder) => {
    // update the state with the reordered list
    setEmployees([...newOrder])
  }

    return (
        <>
            <Navbar />
            <div className="flex jcsb">
              <Sort emps={employees} handleSort={handleSort}/>
              <SearchBar searchChange={handleInputChange}/>
            </div>
            <div className="flex jcse">
              {results.map(employee => (
                  <EmployeeCard
                      id={employee.id}
                      key={employee.id} 
                      name={employee.name}
                      department={employee.department}
                      image={employee.image}
                      position={employee.position}
                      salary={employee.salary}
                  />
              ))}
            </div>
        </>
      );
    
  };
  
  export default Landing;