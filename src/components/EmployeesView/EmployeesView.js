import {Component} from 'react';
import EmployeeRow from '../EmployeeRow/EmployeeRow';
import './EmployeesView.css';


class EmployeesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      skills: [],
      employeeSkills: []
    };
  }

  componentDidMount() {
    fetch('/api/employees/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          employees: data
        });
      });
    fetch('/api/skills/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          skills: data
        });
      });
  }

  render() {
    return (
      <div className="EmployeesView">
        <h3>Employees</h3>
        {this.state.employees.map(employee => 
          <EmployeeRow 
            employee={employee} 
            skills={employee.skills}
          />)}
      </div>
    );
  }
}

export default EmployeesView;
