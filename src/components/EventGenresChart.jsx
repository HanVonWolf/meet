import React, { useState, useEffect } from 'react';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  // You might need Tooltip and Legend depending on your full chart setup,
  // but they aren't used in the provided code snippet.
  // Tooltip,
  // Legend
} from 'recharts';

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  useEffect(() => {
    // Standard way to watch for changes in the events array
    setData(getData());
  }, [events]); // <-- Changed dependency to [events]

  const getData = () => {
    const data = genres.map((genre) => {
      // Filter events by checking if the summary includes the genre name
      // Case-insensitive check might be better: event.summary.toLowerCase().includes(genre.toLowerCase())
      const filteredEvents = events.filter((event) => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      };
    });

    // Filter out genres with 0 events if you don't want them in the chart
    return data.filter(entry => entry.value > 0);
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    const name = data[index].name; // Get the name from the data entry

    return percent ? (
      <text
        x={x}
        y={y}
        fill="#000" // Changed fill to black for better visibility against the slice
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    // ResponsiveContainer will now manage the size based on its parent (.charts-container)
    <ResponsiveContainer width="100%" height={400}> {/* Use 100% width */}
      {/* Removed width={730} and height={250} from PieChart */}
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={130}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          cx="50%"
          cy="50%"
        />
        {/* Optional: Add Tooltip and Legend if needed */}
        {/* <Tooltip /> */}
        {/* <Legend /> */}
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenresChart;