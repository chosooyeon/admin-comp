'use client'
import { useState } from "react";
import Layout from "@/components/Layout";
import { MultiButtonGroup } from '@/components/button/MultiButtonGroup'
import { SingleButtonGroup } from "@/components/button/SingleButtonGroup";

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

  return (
    <Layout title="홈" hasBackButton>
      <div className="max-w-[500px] mx-auto px-4 space-y-6">
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