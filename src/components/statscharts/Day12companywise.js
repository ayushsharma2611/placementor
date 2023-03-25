import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarchartD12a = () => {
  return <div>
    <h1 style={{marginTop: '2em'}}>27 Companies in Day 1 and Day 2</h1>
 <div>
    <Bar
  data={{
   labels: ['Axxela','Exxonmobil', 'ICICI Bank', 'Innovaccer(APM Profile)', 'Paytm', 'Tata Steel', 'Standard Chartered', 'American Express', 'Barclays', 'Alfa Laval', 'ZS Associate(DSA profile)', 
            'Accenture India', 'Phonepe', 'Unacademy', 'IBM', 'Cashfree', 'Toppr', 'Testbook(APM Profile)', 'Merilytics', 'Cogoport',
           'Sandvine', 'Porter', 'Reliance Jio', 'ZS Associate', 'Testbook(Analyst Profile)', 'Testbook(ABM Profile)', 
           'Innovaccer', 'Testbook(SDE Profile)', 'Schneider Electric', 'Crisil', 'Razorpay', 'Florance Capital' ],  
   
   datasets: [
    {
     label: 'No. of selected students',
     data: [8,2,25,12,3,2,2,2,1,1,4,5,6,2,4,4,8,1,21,15,3,2,2,2,1,1,4,3,7,1,4,3],
  
     backgroundColor: 'rgba(238, 89, 152, 1)',
    }

    ]        
}}    
  height={400}
  width={600}
  options={{maintainAspectRatio: false,}}
/>


</div>
</div>}

    
export default BarchartD12a;