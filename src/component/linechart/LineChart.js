'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
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
    <div style={{ width: '100%', height: 350 }}>

      <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Monthly Progress vs Planned</h2>


      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="linear"
            dataKey="planned"
            stroke="#FF6363"
            strokeWidth={2}
            dot={{ r: 5, strokeWidth: 0, fill: '#FF6363' }}
          />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#3A59D1"
            strokeWidth={2}
            dot={{ r: 5, strokeWidth: 0, fill: '#3A59D1' }}
          />
        </LineChart>
      </ResponsiveContainer>

   
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF6363' }} />
          <span>Planned</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#3A59D1' }} />
          <span>Progress</span>
        </div>
      </div>
    </div>
  );
}
