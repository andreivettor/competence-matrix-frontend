import React from 'react';
import './EmployeeRow.css';


const EmployeeRow = ({employee, skills}) => {
  return (
    <div className="EmployeeRow" key={employee._id}>
      <p className="employee-name">{employee.name}</p>
      <div className="skill-container">
        {
        skills.map(skill => 
          <div key={skill.ref._id} className={"skill " + skill.level.toLowerCase()}>
            {/* <div>{skill.ref.name + " " + skill.level}</div> */}
          </div>)
        }    
      </div>
    </div>
  );
};

export default EmployeeRow;
