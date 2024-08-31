import {Link} from "react-router-dom" 
import "./index.css"


const tabNames = [
    {   id:1,
        displayText:"Dashboard"
    },
    {   id:2,
        displayText:"Inventory"
    },
    {   id:3,
        displayText:"Order"
    },
    {   id:4,
        displayText:"Returns"
    },
    {   id:5,
        displayText:"Customers"
    },
    {   id:6,
        displayText:"Shipping"
    },
    {   id:7,
        displayText:"Channel"
    },
    {   id:8,
        displayText:"Integrations"
    },  
    {   id:9,
        displayText:"Calculators"
    },
    {   id:10,
        displayText:"Reports"
    },
    {   id:11,
        displayText:"Accounts"
    },

]


const SideBar = (props)=>{
    const {activeTab,changeActiveTabStatus} = props

    const onClickSideBarButton = (event)=>{
        changeActiveTabStatus(event.target.value) 
        
    }

    const sideBarItem = (details)=>{
        const selectSideBar = details.displayText === activeTab? "selected-side-bar": "";
        return(
        <Link to={`/${details.displayText}`} className="side-bar-link" >
            <button className={`side-bar-button ${selectSideBar}`} value={details.displayText} onClick={onClickSideBarButton}>
                {details.displayText}
            </button>
        </Link>
    )
    }

    return(
            <div className="side-bar-container">
                <ul className="side-bar-ul">
                    {tabNames.map((eachTab) => (
                        <li key={eachTab.id}>
                            {sideBarItem(eachTab)}
                        </li>
                    )) }
                </ul>
            </div>  
                
)
} 


export default SideBar
