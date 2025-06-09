import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';

interface DataPoint {
  name: string;
  value1: number;
  value2?: number;  // value2는 선택적
}

interface DualBarChartProps {
  data: DataPoint[];
  type: 'rounded' | 'square';  // 모서리 스타일 선택
  isDual: boolean;  // 단일/이중 바 선택
  colors?: {
    primary: string;
    secondary?: string;
  };
}

const DualBarChart = ({ 
  data, 
  type, 
  isDual,
  colors = { primary: '#BD2459', secondary: '#CCCCCC' }
}:DualBarChartProps) => {
  const getRadius = (): [number, number, number, number] => {
    return type === 'rounded' ? [4, 4, 0, 0] : [0, 0, 0, 0];
  };

  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Bar
            dataKey="value1"
            fill={colors.primary}
            radius={getRadius()}
            barSize={20}
          />
          {isDual && (
            <Bar
              dataKey="value2"
              fill={colors.secondary}
              radius={getRadius()}
              barSize={20}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DualBarChart;