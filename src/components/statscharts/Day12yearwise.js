import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarchartD12b = () => {
  return <div>
      <h1 style={{marginTop: '2em'}}>Year wise placements in Day 1 and Day 2 </h1>
<div>
    <Bar
      data={{
       labels: [2018, 2019, 2020, 2021 ],  
       
       datasets: [
        {
         label: 'Companies',
         data: [11, 16, 21, 27],
         backgroundColor: 'rgba(238, 89, 152, 1)',
        },
        {
            label: 'Selections in Day 1 + Day 2',
            data:[75, 116, 105, 161], 
            backgroundColor: 'rgba(138, 44, 191, 1)',
        }
    
        ]        
    }}    
      height={400}
      width= {600}
      options={{maintainAspectRatio: false,
      layout: {
        padding:{
            left: 65,
           right: 65,
            top: 10,
        }
      }
    }}
    />

    
  </div>
  </div>
}

export default BarchartD12b;