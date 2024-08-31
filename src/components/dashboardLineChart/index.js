import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 

import "./index.css"  


const data = [{

    name:"6/30/2024-7/6/2024",
    sales:1404,
    orders:4,
    avgValue:351.00,
},
{
    name:"7/7/2024-7/13/2024",
    sales: 800,
    orders: 2,
    avgValue:400.00,
},
{
    name:"7/21/2024-7/27/2024",
    sales:440,
    orders:2,
    avgValue:220.00,
}

]





const DashBoardLineChart = ()=>{

    const dataFormatter = (number)=>{
        return(`${(number/1000).toString()}k`)
    }
    
    const CustomToolTip = ({active,payload,label} )=>{
        
        if (active && payload && payload.length){
            return (
                <div className="tool-tip-container">
                    <p className='tool-tip-para'>{label}</p>
                    <ul className='tool-tip-ul'>
                        <li className='orders-tool-tip'> <span className="tooltip-span">Orders - {payload[0].payload.orders} </span> </li> 
                        <li className='sales-tool-tip'> <span className="tooltip-span">Sales - {payload[0].payload.sales} </span> </li> 
                        <li className='avg-order-tool-tip'> <spav className="tooltip-span"> Avg Order Value - {payload[0].payload.avgValue} </spav></li>
                    </ul>
                </div>
            )
        }
    }

    return(
        <ResponsiveContainer width="90%" height="80%">
            <LineChart width={600} height={300} data={data} margin={{top:20,right:10,left:40,bottom:5}}> 

                <CartesianGrid strokeDasharray="3 3"/> 
                <XAxis dataKey="name"/> 
                <YAxis yAxisId="leftAxis" tickFormatter={dataFormatter}/>
                <YAxis yAxisId="rightAxis" orientation="right" /> 

                <Tooltip  content={<CustomToolTip/>}/> 
                <Legend verticalAlign='top' />   

                <Line yAxisId="rightAxis" type="monotone" dataKey="orders" stroke="rgb(247, 117, 10)" strokeWidth={2}/> 
                <Line yAxisId="leftAxis" type="monotone" dataKey="sales" stroke= "rgb(24, 166, 191)" strokeWidth={2}/>  
                
            </LineChart>
        </ResponsiveContainer>
    )



}



export default DashBoardLineChart






















