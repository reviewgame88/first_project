import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import TableContent from './component/TableContent';
import AddUser from './component/AddUser';
import data from './data/testData.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusButton: true,
      dataUser: data,
      searchText: ''
    }
  }

  
  componentWillMount() {
    //console.log(111);
    if(localStorage.getItem('dataUser') === null){
      localStorage.setItem('dataUser',JSON.stringify(data));
    }
    else{
      this.setState({
        dataUser : JSON.parse(localStorage.getItem('dataUser'))
      })
    }
  }
  

  getSearchValue = (data) => {
    this.setState({
      searchText: data
    })
  }

  changeStatus = () => {
    this.setState({
      statusButton: !this.state.statusButton
    });
  }

  editUser = (value) => {
    //console.log(value);
    var data = JSON.parse(localStorage.getItem('dataUser'));
    data.forEach((item, key) => {
      if (item.id == value.id) {
        data[key].name = value.name;
        data[key].phone = value.phone;
        data[key].privilege = value.privilege;
      }
      this.setState({
        dataUser: data
      });
    });
    localStorage.setItem('dataUser',JSON.stringify(data)) ;
  }

  addUser = (name, phone, privilege) => {
    var data = JSON.parse(localStorage.getItem('dataUser'));
    let dt = {};
    dt.id = this.createUUID();
    dt.name = name;
    dt.phone = phone;
    dt.privilege = privilege;
    data.push(dt);
    localStorage.setItem('dataUser',JSON.stringify(data));
    this.setState({
      dataUser: data
    });
  }

  deleteUser = (idDelete) => {
    var dt = this.state.dataUser;
    dt = dt.filter( item => item.id != idDelete);
    
    /* console.log(idDelete);
    data.forEach( (value, key) => {
      if(value.id == idDelete){
        delete data[key];
      }
    }); */
    localStorage.setItem('dataUser',JSON.stringify(dt));
    this.setState({
      dataUser: dt
    }, () => {
    });
  }

  createUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  render() {

    let dataSearch = [];
    this.state.dataUser.forEach((item) => {
      if (item.name.toUpperCase().indexOf(this.state.searchText.toUpperCase()) !== -1) {
        dataSearch.push(item);
      }
    });
    return (
      <div className="container">
        <div className="row">
          <Header getSearchValue={(data) => this.getSearchValue(data)} statusButton={this.state.statusButton} changeStatusButton={() => this.changeStatus()} />
          <TableContent deleteUser={(id) => this.deleteUser(id)} editUser={(value) => this.editUser(value)} dataUser={dataSearch} />
          <AddUser addUser={(name, phone, privilege) => this.addUser(name, phone, privilege)} dataUser={this.state.dataUser} statusButton={this.state.statusButton} />
        </div>
      </div>
    );
  }
}

export default App;
