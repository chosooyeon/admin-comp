'use client'
import { useState } from "react";
import Layout from "@/components/Layout";
import { MultiButtonGroup } from '@/components/button/MultiButtonGroup'
import { SingleButtonGroup } from "@/components/button/SingleButtonGroup";
import RadioButtonGroup from '@/components/radio/Radio';
import Table from '@/components/table/Table';
import TopButton from '@/components/button/TopButton';
import { Column } from '@/components/table/Table';

export default function HomePage() {
  const [selectedHealthPreferences, setSelectedHealthPreferences] = useState<string[]>([]);
  const [selectedExerciseType, setSelectedExerciseType] = useState<string>('');

  // 옵션 데이터
  const healthOptions = [
    { id: 'diet', label: '식단 관리' },
    { id: 'exercise', label: '운동' },
    { id: 'sleep', label: '수면' },
  ];

  const exerciseOptions = [
    { id: 'cardio', label: '유산소' },
    { id: 'weight', label: '근력' },
    { id: 'stretch', label: '스트레칭' },
  ];

  // Radio Button Group 예시
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const radioOptions = [
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' },
  ];

  // Table 예시
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  
  interface DataType {
    id: string;
    name: string;
    email: string;
  }

  const columns: Column<DataType>[] = [
    { key: 'id' as keyof DataType, title: 'ID', width: '100px' },
    { key: 'name' as keyof DataType, title: '이름' },
    { key: 'email' as keyof DataType, title: '이메일' },
    {
      key: 'actions' as keyof DataType,
      title: '액션',
      render: (_, record: DataType) => (
        <button
          onClick={() => alert(`${record.name} 선택됨`)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
                     transition-colors duration-200 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:ring-offset-2"
        >
          상세보기
        </button>
      ),
    },
  ];

  const data: DataType[] = [
    { id: '1', name: '홍길동', email: 'hong@example.com' },
    { id: '2', name: '김철수', email: 'kim@example.com' },
  ];

  return (
    <Layout title="홈" hasBackButton>
      <div className="max-w-[500px] mx-auto px-4 space-y-6">

      <div>
        <h2 className="text-2xl font-bold mb-4">라디오 버튼 그룹</h2>
        <RadioButtonGroup
          options={radioOptions}
          value={selectedRadio}
          onChange={setSelectedRadio}
          name="example-radio"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">테이블</h2>
        <Table
          columns={columns}
          data={data}
          onRowClick={(record) => console.log('Row clicked:', record)}
          selectedRows={selectedRows}
          onSelectRow={setSelectedRows}
          rowKey="id"
        />
      </div>

      <TopButton />

        {/* 다중 선택 버튼 그룹 */}
        <div className="space-y-2">
          <h3 className="font-semibold">관심있는 건강 관리 분야를 선택해주세요 (최대 2개)</h3>
          <MultiButtonGroup
            options={healthOptions}
            maxSelect={2}
            onChange={(selected) => {
              setSelectedHealthPreferences(selected);
              console.log('Selected health preferences:', selected);
            }}
          />
        </div>

        {/* 단일 선택 버튼 그룹 */}
        <div className="space-y-2">
          <h3 className="font-semibold">선호하는 운동 유형을 선택해주세요</h3>
          <SingleButtonGroup
            options={exerciseOptions}
            onChange={(selected) => {
              setSelectedExerciseType(selected);
              console.log('Selected exercise type:', selected);
            }}
          />
        </div>

        {/* 선택된 값들을 보여주는 영역 */}
        {selectedHealthPreferences.length > 0 && (
          <div className="text-sm text-gray-600">
            선택된 건강 관리 분야: {selectedHealthPreferences.map(id => 
              healthOptions.find(opt => opt.id === id)?.label
            ).join(', ')}
          </div>
        )}

        {selectedExerciseType && (
          <div className="text-sm text-gray-600">
            선택된 운동 유형: {exerciseOptions.find(opt => opt.id === selectedExerciseType)?.label}
          </div>
        )}

      </div>
    </Layout>
  );
}