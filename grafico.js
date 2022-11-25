import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: todosRoutes.get,
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: todosRoutes.put,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: todosRoutes.post,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: todosRoutes.delete,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
 
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
