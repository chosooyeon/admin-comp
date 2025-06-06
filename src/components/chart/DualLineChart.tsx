import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';

interface DataPoint {
  name: string;
  value1: number;
  value2: number;
}

const data: DataPoint[] = [
  { name: '월', value1: 4, value2: 70 },
  { name: '화', value1: 37, value2: 61 },
  { name: '수', value1: 24, value2: 80 },
  { name: '목', value1: 7, value2: 48 },
  { name: '금', value1: 48, value2: 85 },
  { name: '토', value1: 26, value2: 48 },
  { name: '일', value1: 8, value2: 40 },
];

const DualLineChart = () => {
  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid 
            horizontal={true}
            vertical={false}
            strokeDasharray="2 3"
            stroke="#CCCCCC"
            strokeWidth={1}
          />
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8"
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#94a3b8"
            axisLine={false}
            tickLine={false}
            tickCount={5}
            tick={{
              fontSize: 12,
              fill: '#666'
            }}
          />
          <Line
            type="linear"
            dataKey="value1"
            stroke="#BD2459"
            strokeWidth={2}
            dot={{
              fill: '#BD2459',
              r: 6,
              strokeWidth: 0
            }}
            activeDot={{
              r: 8,
              fill: '#BD2459',
              strokeWidth: 0
            }}
            strokeDasharray="0"
          />
          <Line
            type="linear"
            dataKey="value2"
            stroke="#CCCCCC"
            strokeWidth={2}
            strokeDasharray="3 3"
            dot={{
              fill: '#FFD700',
              r: 6,
              strokeWidth: 0
            }}
            activeDot={{
              r: 8,
              fill: '#FFD700',
              strokeWidth: 0
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DualLineChart;