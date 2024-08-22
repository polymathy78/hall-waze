import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

const DataGraph = ({ records }) => {
  const [data, setData] = useState([]);
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    if (records.length > 0) {
      processGraphData(records);
    }
  }, [records]);

  const processGraphData = (records) => {
    // Prepare data for Line and Bar charts
    const lineAndBarData = records.map((record) => ({
      name: record.Name,
      departureTime: new Date(
        record.DepartureTime
      ).toLocaleTimeString(),
      destination: record.Destination,
    }));

    // Prepare data for Pie chart
    const destinationCounts = records.reduce((acc, record) => {
      acc[record.Destination] = (acc[record.Destination] || 0) + 1;
      return acc;
    }, {});

    const pieChartData = Object.keys(destinationCounts).map(
      (key) => ({
        name: key,
        value: destinationCounts[key],
      })
    );

    setData(lineAndBarData);
    setPieData(pieChartData);
  };

  // Colors for the Pie Chart
  const COLORS = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff8042',
    '#8dd1e1',
    '#a4de6c',
  ];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h2>Student Data Visualization</h2>

      {/* Line Chart */}
      <div
        style={{ width: '100%', height: 400, marginBottom: '40px' }}
      >
        <h3>Student Departure Times</h3>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="departureTime" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="name" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div
        style={{ width: '100%', height: 400, marginBottom: '40px' }}
      >
        <h3>Distribution by Destination</h3>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div style={{ width: '100%', height: 400 }}>
        <h3>Student Count by Destination</h3>
        <ResponsiveContainer>
          <BarChart
            data={pieData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataGraph;
