import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Larceny',
    valor: 900,
    color: '#509dc1',
  },
  {
    name: 'MV Theft',
    valor: 700,
    color: '#509dc1',
  },
  {
    name: 'Bulgary',
    valor: 400,
    color: '#509dc1',
  },
  {
    name: 'Robbery',
    valor: 350,
    color: '#509dc1',
  },
  {
    name: 'Agg. Assault',
    valor: 200,
    color: '#509dc1',
  },
  {
    name: 'Other',
    valor: 50,
    color: '#509dc1',
  },
];

export const Chart1 = () => (
  <ResponsiveContainer width="100%" height={250}>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="valor" fill="#82ca9d">
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
