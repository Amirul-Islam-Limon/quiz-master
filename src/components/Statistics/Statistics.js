import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const data = [
        {
          name: 'React',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'JavaScript',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'CSS',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Git',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        }
      ];

    return (
        <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
};

export default Statistics;