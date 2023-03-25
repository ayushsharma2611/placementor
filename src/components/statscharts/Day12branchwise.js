import React from 'react'
 import 'chart.js/auto'
 import {Line} from 'react-chartjs-2'
const Lcchart12 = () => {
  return <div>
      <h1 style={{marginTop: '2em'}}>Branch wise placements in Day 1 and Day 2</h1>
<div>
    <Line
      data={{
       labels: ['MBA', 'M.Tech Petro','M.Tech Mech','M.Tech Power Systems', 'M.Tech Data Analytics',  'M.Tech ECE',  'M.Tech CSE',  'Integrated AGP','Integrated AGL', 'B.Tech Mineral',
        'B.Tech PE', 'B.Tech Mech',  'B.Tech Enviro',
     'B.Tech Chem','B.Tech MME', 'B.Tech Civil' , 'B.Tech Mining', 'B.Tech EP','B.Tech EIE', 'B.Tech ECE', 'B.Tech EE', 'Integrated M&C',
     'DD CSe','B.Tech CSE', ],  
       
       datasets: [
        {
         label: 'No. of selected students',
         data: [1,1,1,2,2,1,7,1,2,7,9,22,7,12,11,4,15,3,10,14,17,4,1,7],
         backgroundColor: 'black',
         borderColor: 'rgba(238, 89, 152, 1)',
        }
    
        ]        
    }}    
      height={400}
      width={600}
      
      options={{maintainAspectRatio: false,
     layout: {
        padding: {
            left: 65,
            right: 65,
            top:10,
        }
     }
    
    }}
    />

    
  </div>
  </div>
}

export default Lcchart12;