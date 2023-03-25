import React from 'react'
 import 'chart.js/auto'
 import {Line} from 'react-chartjs-2'

 const Lcchart = () => {
  return (
 <div>
  <h1 style={{marginTop: '2em'}}>Branch wise placements on Day 0</h1>
  <div>
    
    <Line
      data={{
       labels: ['M.Tech CSE', 'M.Tech CSL', 'M.Tech VLSI', 'Msc. Tech AGL', 'Msc. Tech AGP', 'Integrated AGP', 'B.Tech EP', 'B.Tech Chem', 'B.Tech Enviro', 'B.tech Mineral',
    'B.Tech MME', 'B.Tech ME','B.Tech Civil', 'B.tech Mech', 'B.Tech PE', 'B.Tech EIE', 'B.tech EE','B.Tech ECE', 'Integrated Mnc', 'DD CSE', 'B.Tech CSE' ],  
       
       datasets: [
        {
         label: 'No. of selected students',
         data: [9,1,4,4,6,2,1,1,2,4,2,6,4,17,26,8,26,47,21,11,51],
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
  
  </div>)
}

export default Lcchart;



