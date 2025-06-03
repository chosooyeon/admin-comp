import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Box from "@/components/Box";
import { Icon } from "@/components/icons";
import Chip from "@/components/Chip";
import MissionBox from "@/components/MissionBox";
import Banner from "@/components/Banner";
import OutlineBox from "@/components/OutlineBox";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";
import EmptyImage from "@/components/EmptyImage";
import SmallButton from "@/components/SmallButton";

export default function HomePage() {
  return (
    <Layout title="홈" hasBackButton>
      <div className="max-w-[500px] mx-auto px-4 space-y-6">

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
        <MissionBox variant="burning" className="space-y-4">
          
          <div>
            <span>14일째 참여중</span>
            <Chip variant="outlined">D-42</Chip>
          </div>

          <div>
            <div>
              <span>완료한 미션</span>
              <span>47/156</span>
            </div>
            <ProgressBar percent={50} variant="burning" />
          </div>
          
          <Button>
            <span>미션 달성 현황</span>
            <Icon size={12} name="chevron-right" />
          </Button>
        </MissionBox>
        <div className="space-y-4">
          <span>오늘의 미션</span>
          <Chip variant="outlined">오늘 자정까지</Chip>
          <Box className="justify-between">
            <EmptyImage variant="round" size="small" />
            <div className="ml-[-24px]">
              <span>혈압 입력하기</span>
              <div><span>기록 완료 시</span><span>40p</span></div>
            </div>
            <SmallButton>달성하기</SmallButton>
          </Box>
          <Box className="justify-between">
            <EmptyImage variant="round" size="small" />
            <div>
              <span>30분 유산소 운동하기</span>
              <div><span>기록 완료 시</span><span>40p</span></div>
            </div>
            <SmallButton>달성하기</SmallButton>
          </Box>
          <Box className="justify-between">
            <EmptyImage variant="round" size="small" />
            <div>
              <span>식사할때 국물 안먹기</span>
              <div><span>기록 완료 시</span><span>40p</span></div>
            </div>
            <SmallButton>달성하기</SmallButton>
          </Box>
          <div className="flex items-center">
            <span>전체 미션 보러가기</span>
            <Icon size={12} name="chevron-right" />
          </div>

          <Banner>
            <div>
              <div>건강 관리 꿀팁이 있으신가요?<br/>
              공유하고 정보도 얻어가세요!</div>
              <div className="flex items-center gap-1">
                <span>건강톡톡 바로가기</span>
                <Icon size={12} name="chevron-right" />
              </div>
            </div>
            <EmptyImage variant="rectangle" size="small" className="w-[60px] h-[60px]"/>
          </Banner>

          {/* <div>복약현황</div>
          <div>나의 건강 변화</div> */}
          <div>
            <div className="flex items-center justify-between">
              <span>건강 뉴스</span>
              <Icon size={12} name="chevron-right" />
            </div>
            <OutlineBox>
              <EmptyImage variant="rectangle" size="large" />
              <div>당뇨병 위험군은 이걸 줄이면
              효과를 볼 수 있어요</div>
            </OutlineBox>
          </div>
        </div>
      </div>
    </Layout>
  );
}