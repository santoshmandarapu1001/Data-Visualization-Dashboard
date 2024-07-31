import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then(response => response.json())
      .then(data => {
        // Process data for Chart.js
        const intensity = data.map(item => item.intensity);
        const year = data.map(item => item.year);
        
        setChartData({
          labels: year,
          datasets: [{
            label: 'Intensity',
            data: intensity,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        });
      });
  }, []);

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
}

export default ChartComponent;
