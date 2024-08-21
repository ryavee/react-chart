// Donut.js
import React, { useState } from 'react';
import './Donut.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data, total }) => (
  <div className="donut-chart-container">
    <Doughnut data={data} />
    <div className="donut-total">{total} Total</div>
  </div>
);

const Card = ({ title, data, total, onRemove }) => (
  <div className="card">
    <h2 className="card-title">{title}</h2>
    <div className="card-body">
      <div className="donut-chart-wrapper">
        <DonutChart data={data} total={total} />
      </div>
    </div>
    {/* "X" button that appears on hover */}
    <button className="remove-widget" onClick={onRemove}>x</button>
  </div>
);

const Donut = () => {
  const [widgets, setWidgets] = useState([
    {
      id: 1,
      title: 'Cloud Accounts',
      data: {
        labels: ['Connected', 'Not Connected'],
        datasets: [
          {
            data: [2, 2],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384']
          }
        ]
      },
      total: 4
    },
    {
      id: 2,
      title: 'Cloud Account Risk Assessment',
      data: {
        labels: ['Failed', 'Warning', 'Not Available', 'Passed'],
        datasets: [
          {
            data: [1689, 681, 36, 7253],
            backgroundColor: ['#FF6384', '#FFCE56', '#FF9F40', '#4BC0C0'],
            hoverBackgroundColor: ['#FF6384', '#FFCE56', '#FF9F40', '#4BC0C0']
          }
        ]
      },
      total: 9659
    }
  ]);

  // Remove a widget
  const removeWidget = (id) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  return (
    <div className="donut">
      <h1 className="donut-title">CSPM Executive Donut</h1>
      <div className="cards-container">
        {widgets.map(widget => (
          <Card
            key={widget.id}
            title={widget.title}
            data={widget.data}
            total={widget.total}
            onRemove={() => removeWidget(widget.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Donut;
