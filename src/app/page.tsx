'use client'
import { useState, useEffect } from "react";

import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Box from "@/components/box/Box";
import { Icon } from "@/components/icons";
import Chip from "@/components/chip/Chip";
import MissionBox from "@/components/box/MissionBox";
import Banner from "@/components/banner/Banner";
import OutlineBox from "@/components/box/OutlineBox";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/button/Button";
import EmptyImage from "@/components/EmptyImage";
import SmallButton from "@/components/button/SmallButton";
import Checkbox from "@/components/checkbox/Checkbox";
import Calendar from "@/components/calendar/Calendar";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import Popup from "@/components/popup/FullPopup";
import Popover from "@/components/popup/Popover";
import Toggle from "@/components/toggle/Toggle";
import BottomModal from "@/components/modal/BottomModal";
import DualLineChart from '@/components/chart/DualLineChart';

export default function HomePage() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('이메일을 입력해주세요.');
    } else if (!emailRegex.test(email)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else {
      setEmailError('');
    }
  };

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);
  const [isToggleChecked, setIsToggleChecked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Layout title="홈" hasBackButton>
      <div className="max-w-[500px] mx-auto px-4 space-y-6">

      <DualLineChart />
      <Checkbox
        label="이용약관에 동의합니다"
        checked={isChecked}
        onChange={setIsChecked}
      />

      {selectedDate && (
        <Calendar
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />
      )}

      <Input
        label="이메일"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="이메일을 입력하세요"
        required
        error={emailError}
      />


        <Select
          options={[
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          label="선택"
        />

        {/* <Popup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          title="알림"
        >
          <div>팝업 내용</div>
        </Popup> */}

        {/* <BottomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="모달 제목"
          onConfirm={() => {
            // handle confirmation
            setIsOpen(false);
          }}
        >
          <div>모달 내용</div>
        </BottomModal> */}

        <Popover
          trigger={<Button>클릭</Button>}
          content={<div>팝업 내용</div>}
          placement="bottom"
        />

        <Toggle
          checked={isChecked}
          onChange={setIsChecked}
          label="활성화"
        />

        <Box className="justify-between">
          <span>나의 건강검진 결과</span>
          <div className="flex items-center gap-1">
            <Chip variant="filled" className="text-[11px] font-[bold]">경계 항목1</Chip>
            <Icon size={18} name="chevron-right" />
          </div>
        </Box>
        <Box height="100px">
          <div>
            <div className="flex items-center mb-2">
              <Chip variant="filled" className="text-[11px] font-[bold] mr-2">1주차</Chip>
              <div className="font-bold">나트륨 섭취 줄이기</div>
            </div>
            <div className="text-[#777D88] text-[13px]">소금 한 꼬집 줄이면, 혈압이 한 칸 내려갑니다. 혈관은 당신의 작은 실천을 기억합니다.</div>
          </div>
        </Box>
        <MissionBox variant="burning" className="space-y-4">
          
          <div>
            <span className="font-semibold text-xl">14일째 참여중</span>
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
          <Chip variant="outlined" className="text-[11px] font-[bold]">오늘 자정까지</Chip>
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