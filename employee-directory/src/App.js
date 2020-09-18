import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import SearchBar from './components/SearchBar'
import API from './components/utils/API';


class App extends React.Component {
  state={
    employees: [],
    searchValue: "",
    ascending: true
  }
 componentDidMount(){
    API.getUsers()
    .then(res => this.setState({employees: res.data.results}))
    .catch(err => console.log(err))
 }

  filterSearch = (str) => {
    this.setState({searchValue:str})
  }

  orderEmployees = () => {
    if(this.state.ascending){
      this.state.employees.sort((a, b) => {
        return a.name.last  > b.name.last ? 1 : -1
      })
    }else{
      this.state.employees.sort((a, b) => {
        return a.name.last > b.name.last ? -1 : 1
        
      })
    }
    this.setState({ascending: !this.state.ascending})
  }


  render(){
  return (
    <Wrapper>
      <Title>Employee List</Title>
      
      <main className="container">
      <SearchBar filterSearch={this.filterSearch}/>
      <div className="row">
      <div className="img-container col-2" >
        Image
      </div>
      <div className="col-3" onClick = {() => this.orderEmployees()}>
          Name
      </div>
      <div className="col-2">
        Phone
      </div>
      <div className="col-3">
         Email
        </div>
      <div className="col-2">
         DOB
        </div>
    </div>
      {this.state.employees.filter(item => item.name.first.startsWith(this.state.searchValue) || item.name.last.startsWith(this.state.searchValue)).map((employee) => (<EmployeeCard key={employee.id.value} name={employee.name.first + " " + employee.name.last} image={employee.picture.medium} email={employee.email} phone={employee.cell} dob={employee.dob.date} />))}
      </main>
    </Wrapper>
  );
  }
}

export default App;
