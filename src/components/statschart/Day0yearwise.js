import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarchartD02 = () => {
  return <div>
   
    <div>
    <Bar
      data={{
       labels: [2018, 2019, 2020, 2021 ],  
       
       datasets: [
        {
         label: 'Companies',
         data: [12, 16, 24, 44],
         backgroundColor: 'rgba(238, 89, 152, 1)',
        },
        {
            label: 'selections on Day 0',
            data:[73, 116, 139, 253], 
            backgroundColor: 'rgba(138, 44, 191, 1)',
        }
    
        ]        
    }}    
      height={400}
      width= {600}
      options={{maintainAspectRatio: false,
      layout: {
        padding:{
            left: 50,
           right: 50,
            top: 40,
        }
      }
    }}
    />

    
  </div>
  <h1>Year wise placement on day 0</h1>
  </div>
}

export default BarchartD02;
