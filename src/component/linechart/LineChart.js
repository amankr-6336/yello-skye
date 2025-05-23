'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const chartData = [
  { month: 'Jan', planned: 15, progress: 12 },
  { month: 'Feb', planned: 25, progress: 28 },
  { month: 'Mar', planned: 35, progress: 32 },
  { month: 'Apr', planned: 45, progress: 48 },
  { month: 'May', planned: 55, progress: 52 },
  { month: 'Jun', planned: 65, progress: 68 },
  { month: 'Jul', planned: 70, progress: 75 },
  { month: 'Aug', planned: 75, progress: 72 },
  { month: 'Sep', planned: 80, progress: 85 },
  { month: 'Oct', planned: 85, progress: 82 },
  { month: 'Nov', planned: 90, progress: 95 },
  { month: 'Dec', planned: 95, progress: 92 }
];

export default function ResponsiveLineChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="planned" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="progress" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
