import {Component} from "react"  
import {Routes,Route,Navigate} from "react-router-dom"

import Dashboard from "./components/dashboard"  
import Inventory from "./components/inventory"
import SideBar from "./components/sideBar" 

import './App.css';

class App extends Component{
  state={activeTab:"Dashboard"}

  changeActiveTabStatus = (tabValue)=>{
      this.setState({activeTab:tabValue})
  }

  header = ()=>{
    const {activeTab} = this.state
    return (
    <div className="header-container">
          <h1 className="header-title">{activeTab}</h1>
    </div> 
  )
  }

  render(){
    const {activeTab} = this.state
    return(
        <div className="whole-bg-container"> 
          <SideBar activeTab={activeTab} changeActiveTabStatus={this.changeActiveTabStatus}/> 
            <div className="header-and-routes-container">
              {this.header()}
              <Routes>
                <Route exact path="/Dashboard" element={<Dashboard/>} /> 
                <Route exact path="Inventory" element={<Inventory/>}/>
                <Route path="/" element={<Navigate to="/Dashboard"/>}/>
              </Routes>
            </div>
            
          
        </div>  
    )
  }




}



export default App;





