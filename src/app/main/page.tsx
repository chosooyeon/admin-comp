'use client'

import Layout from "@/components/Layout"
import StepCircles from '@/components/medicine/StepCircle';

export default function MainPage() {
    return (
        <Layout title="홈" hasBackButton>
            <div className="max-w-[500px] mx-auto px-4 space-y-6">

            {/* 8주는 56일, 12주는 84일 */}
            <StepCircles 
            startDate={new Date('2025-06-01')} 
            duration={56}
            progressData={[0, 1, 2, 3, 4]} // 각 주차별 진행도 (0-4)
            onDateSelect={(date) => {
                console.log('Selected date:', date);
            }}
            />
                            
            </div>
        </Layout>
    )
}