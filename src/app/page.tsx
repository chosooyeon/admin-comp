import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Box from "@/components/Box";
import { Icon } from "@/components/icons";
import Chip from "@/components/Chip";
import GrayBox from "@/components/GrayBox";
import Banner from "@/components/Banner";

export default function HomePage() {
  return (
    <Layout title="홈" hasBackButton>
      <div className="space-y-6">

        <Box className="justify-between">
          <span>나의 건강검진 결과</span>
          <div className="flex items-center gap-1">
            <Chip variant="filled">경계 항목1</Chip>
            <Icon size={18} name="chevron-right" />
          </div>
        </Box>
        <Box height="100px" className="">
          <div>
            <Chip variant="filled">1주차</Chip>
            <span>나트륨 섭취 줄이기</span>
            <div>소금 한 꼬집 줄이면, 혈압이 한 칸 내려갑니다. 혈관은 당신의 작은 실천을 기억합니다.</div>
          </div>
        </Box>
        <GrayBox>
          14일째 참여중
        </GrayBox>
        <div>
          <span>오늘의 미션</span>
          <Chip variant="outlined">오늘 자정까지</Chip>
          <Box>
            <div>혈압 입력하기</div>
          </Box>
          <Box>
            <div>30분 유산소 운동하기</div>
          </Box>
          <Box>
            <div>식사할때 국물 안먹기</div>
          </Box>
          <div className="flex items-center">
            <span>전체 미션 보러가기</span>
            <Icon size={12} name="chevron-right" />
          </div>

          <Banner>
            Your banner content goes here
          </Banner>

          <div>복약현황</div>
          <div>나의 건강 변화</div>
          
        </div>
      </div>
    </Layout>
  );
}