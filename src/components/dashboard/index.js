import { PieChart} from 'react-minimal-pie-chart';
import { IoIosInformationCircleOutline } from "react-icons/io"; 

import DashBoardLineChart from "../dashboardLineChart" 



import "./index.css" 


const pieChartData = [
    {
        title:"WooCommerce Store",
        value:1484,
        color:"rgb(242, 142, 158)",
        
        
    },    
    {
        title:"Shopify Store",
        value:1175,
        color:"rgb(25, 216, 230)",
        
    }

    ]



const Dashboard = ()=>{

    const renderSalesVsOrderCard = ()=>(
        <div className="sales-and-order-card">
            <div className="sales-order-title-container">
                <h1 className="sales-order-title">Sales vs Orders</h1> 
                <IoIosInformationCircleOutline className="info-icon"/>
            </div>  
            <hr className="sales-order-horizontal-line"/> 
            <DashBoardLineChart/>
        </div>
    )


    const renderPortionOfSalesCard = ()=>(
        <div className="portion-of-sales-card">
            <div className="portion-of-sales-title-container">
                <h1 className="portion-of-sales-title">Portion of Sales</h1>
                <IoIosInformationCircleOutline className="info-icon"/>
            </div> 
            <hr className="sales-order-horizontal-line"/>  
           
            <PieChart data={pieChartData} startAngle={90} lengthAngle={-360}  totalValue={2659}
            label={({dataEntry})=>(`${(dataEntry.percentage).toFixed(1)}%`)}
            
            labelStyle={{fontSize:"3px",color:"white"}}
            labelPosition={40}
            style={{height:"400px",width:"400px"}}
            viewBoxSize={[100,100]}
            radius={35}
            
            />
            
            <ul className='pie-chart-tooltip-container'>
                <li className='woo-commerce-tooltip'><span className='woo-commerce-span'>WooCommerce Store</span></li> 
                <li className='shopify-tooltip'><span className='shopify-span'>Shopify Store</span></li>
            </ul>

        </div>
    )



    return (
        <div className="dashboard-bg-container" >
            {renderSalesVsOrderCard()} 
            {renderPortionOfSalesCard()}
        </div>
    )


}


export default Dashboard