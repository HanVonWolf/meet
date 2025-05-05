import React, { useState, useEffect } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer // Make sure this is imported
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, [events]); // <-- Corrected dependency array

  const getData = () => {
    // Map through all locations to get city name and event count
    const data = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).length;
      // Extract city name from location string
      const city = location.split(/, | - /)[0];
      return { city, count };
    });

    // Filter out cities with 0 events if you don't want them on the chart
    return data.filter(entry => entry.count > 0);
  };

  return (
    // ResponsiveContainer will manage the size based on its parent (.charts-container)
    <ResponsiveContainer width="100%" height={400}> {/* Changed width to 100% */}
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 60, // Increased bottom margin slightly for rotated labels
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis
          type="category"
          dataKey="city"
          name="City"
          angle={60} // Keep angle if needed for long city names
          interval={0} // Show all labels
          tick={{ dx: 20, dy: 40, fontSize: 14 }} // Adjust tick position and style
          // Optional: Add tickLine={false} axisLine={false} if you want cleaner look
        />
        <YAxis
          type="number"
          dataKey="count"
          name="Number of Events"
          allowDecimals={false}
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Events per City" data={data} fill="#8884d8" /> {/* Changed name prop */}
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default CityEventsChart;