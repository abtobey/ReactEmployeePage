import React, {useState, useEffect} from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import SearchBar from './components/SearchBar'
import API from './components/utils/API';
// import employeeList from "./employees.json";
import Header from './components/Header';


function App() {
  const [employeeState, setEmployeeState]= useState ({
    employees: [],
    searchValue: "",
    ascending: false
  });

//this is for testing purposes so it doesn't call the API every time in development, don't forget to comment this out.
  // useEffect(() => {
  //   const empList=employeeList.results;
  //   empList.sort((a, b) => {
  //     return a.name.last  > b.name.last ? 1 : -1
  //   })
  //   setEmployeeState({...employeeState, employees: empList})
  // },[])

 useEffect(()=>{
    API.getUsers()
    .then(res => {
    const empList=res.data.results;
    empList.sort((a, b) => {
      return a.name.last  > b.name.last ? 1 : -1
    })
      setEmployeeState({...employeeState,employees: empList})
  })
    .catch(err => console.log(err))
 },[]);

   const filterSearch = (str) => {
    setEmployeeState({...employeeState, searchValue:str})
  }

  const orderEmployees = () => {
    if(employeeState.ascending){
      employeeState.employees.sort((a, b) => {
        return a.name.last  > b.name.last ? 1 : -1
      })
    }else{
      employeeState.employees.sort((a, b) => {
        return a.name.last > b.name.last ? -1 : 1
        
      })
    }
    setEmployeeState({...employeeState, ascending: !employeeState.ascending})
  }

  const clearSearch = (event) => {
    event.preventDefault();
    setEmployeeState({ ...employeeState, searchValue: ""})
  }

  return (
    <>
      <Title>Employee Directory</Title>
      <Wrapper> 
      <main className="container">
      <SearchBar filterSearch={filterSearch} clearSearch={clearSearch} str={employeeState.searchValue}/>
    <Header orderEmployees={orderEmployees} direction={employeeState.ascending}/>
      {employeeState.employees.filter(item => item.name.first.includes(employeeState.searchValue) || item.name.last.includes(employeeState.searchValue)).map((employee) => (<EmployeeCard key={employee.id.value} name={employee.name.first + " " + employee.name.last} image={employee.picture.medium} email={employee.email} phone={employee.cell} dob={employee.dob.date} />))}
      </main>
    </Wrapper>
    </>
  );

}

export default App;
