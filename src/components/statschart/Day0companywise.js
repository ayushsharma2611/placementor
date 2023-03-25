import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarchartD01 = () => {
  return  <div>
   
    <div>
    <Bar
  data={{
   labels: ['Amazon','Accenture japan', 'Atalssian', 'Bjaj Auto', 'Google', 'ONGC', 'Flipkart', 'Microsoft', 'Goldman Sachs', 'New Zera', 'Sprinkler', 
            'Indeed', 'Walmart', 'Intel', 'Money forward', 'Meesho', 'Oracle', 'Tata Electronics Pvt Ltd', 'Navi Technology', 'Udaan',
           'Ceramorphic', 'Texas Instruments', 'Flipkart(BD)', 'Myntra', 'Reliance Jio', 'Cairn', 
           'Deutsche Bank', 'Future First', 'Inmobi', 'Morgan Stanley', 'Jaguar Landrover', 'Swiggy', 'Arista','Mathworks', 'Samsung', 'Optum', 'Zomato', 'Sliceit', ],  
   
   datasets: [
    {
     label: 'No. of Selected students',
     data: [9,5,5,3,6,29,10,19,6,2,1,1,6,5,6,15,4,5,5,2,1,1,9,6,30,8,3,9,6,2,4,1,3,3,12,4,5,2],
     backgroundColor: 'rgba(238, 89, 152, 1)',
    }

    ]        
}}    
  height={400}
  width={600}
  options={{maintainAspectRatio: false,}}
/>


</div>
<h1>38 Companies on day 0</h1>
</div>
}

    
export default BarchartD01;



