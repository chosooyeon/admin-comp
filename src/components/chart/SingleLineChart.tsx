import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';

interface DataPoint {
  name: string;
  value1: number;
}

const data: DataPoint[] = [
  { name: '월', value1: 4},
  { name: '화', value1: 37},
  { name: '수', value1: 24},
  { name: '목', value1: 7},
];

const CustomDot = (props: any) => {
  const { cx, cy, index } = props;
  const isFirstPoint = index === 1;
  const isPoint = index === 3;
  const isTargetPoint = index === 2; // n번째 점 (여기서는 3번째 점)
  
  return (
    <g>
      {isTargetPoint && (
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={cy + 100} // 아래로 내려가는 길이
          stroke="#FFD700"
          strokeWidth="2"
          strokeDasharray="3 3"
        />
      )}
      <circle 
        cx={cx} 
        cy={isFirstPoint ? cy + 50 : cy} 
        r="6" 
        fill="white" 
      />
      <circle 
        cx={cx} 
        cy={isFirstPoint ? cy + 50 : cy} 
        r="5" 
        fill="none" 
        stroke={isPoint ? "#FF9F22" : "#FFD700"}
        strokeWidth="3" 
      />
    </g>
  );
};

const SingleLineChart = () => {
  const pointsAboveLine = data.length - 1; // 첫 번째 점을 제외한 나머지 점들의 개수
  
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
          <rect
            x="20%"    // 왼쪽에서 20% 위치
            y="20%"    // 위에서 20% 위치
            width="80%" // 전체 너비의 60%
            height="30%" // 전체 높이의 60%
            fill="#F2F2F2"
          />
          {pointsAboveLine >= 2 && (
            <Line
              type="linear"
              dataKey="value1"
              stroke="#FFD700"
              strokeWidth={2}
              dot={<CustomDot />}
              activeDot={<CustomDot />}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SingleLineChart;