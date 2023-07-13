import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Larceny',
    value: 4000,
    color: '#509dc1',
  },
  {
    name: 'MV Theft',
    value: 3000,
    color: '#509dc1',
  },
  {
    name: 'Bulgary',
    value: 2000,
    color: '#509dc1',
  },
  {
    name: 'Robbery',
    value: 2780,
    color: '#509dc1',
  },
  {
    name: 'Agg. Assault',
    value: 1890,
    color: '#509dc1',
  },
  {
    name: 'Other',
    value: 2390,
    color: '#509dc1',
  },
];

export const Chart2 = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      layout="vertical"
      width={200}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <Bar dataKey="value" fill="#82ca9d">
        {data.map((entry, index) => (
          <Cell
            cursor="pointer"
            fill={entry.color || '#509dc1'}
            key={`cell-${index}`}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);
