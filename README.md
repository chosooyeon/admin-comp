# Admin Component Library

관리자 페이지 구축을 위한 컴포넌트 라이브러리입니다. Next.js 15와 TypeScript를 기반으로 제작되었으며, 재사용 가능한 관리자 UI 컴포넌트들을 제공합니다.

## 기술 스택

- Next.js 15
- TypeScript
- Tailwind CSS
- React
- ESLint

## 시작하기

개발 서버 실행:

```bash
npm run dev
# or
yarn dev
```

http://localhost:3000 에서 결과를 확인할 수 있습니다.

## 주요 기능

- 반응형 디자인
- 접근성 고려
- 다크모드 지원
- TypeScript 기반 타입 안정성

## TODO List

### 디자인 시스템
- [ ] 컬러 시스템 정의
- [ ] 타이포그래피 시스템 구축
- [ ] 공통 컴포넌트 스타일 가이드 작성

### 컴포넌트 개발
- [ ] 사이드바 네비게이션
  - [ ] 접힘/펼침 기능
  - [ ] 활성 메뉴 하이라이트
  - [ ] 서브메뉴 지원
- [ ] 인증 시스템
  - [ ] 로그인 페이지
  - [ ] 회원가입 페이지
  - [ ] 비밀번호 재설정
- [ ] 데이터 테이블
  - [ ] 정렬 기능
  - [ ] 필터링
  - [ ] 페이지네이션
- [ ] 대시보드 위젯
  - [ ] 차트 컴포넌트
  - [ ] 통계 카드
  - [ ] 알림 시스템

### 기능 개발
- [ ] 권한 관리 시스템
- [ ] 다국어 지원
- [ ] 테마 커스터마이징
- [ ] API 연동 구조 설계

### 성능 최적화
- [ ] 컴포넌트 lazy loading
- [ ] 이미지 최적화
- [ ] 번들 사이즈 최적화

### 문서화
- [ ] 컴포넌트 사용 가이드
- [ ] API 문서
- [ ] 스토리북 구축

## 기여하기

버그 리포트, 기능 제안, 풀 리퀘스트를 환영합니다.

## 라이선스

MIT License



# Component Usage Guide

## Basic Components

### Layout
기본 레이아웃 컴포넌트
```tsx
<Layout title="페이지 제목" hasBackButton={true}>
  {/* 내용 */}
</Layout>
```

### Box
기본 박스 컴포넌트
```tsx
<Box className="justify-between" height="100px">
  {/* 내용 */}
</Box>
```

### MissionBox
미션 정보를 표시하는 박스 컴포넌트
```tsx
<MissionBox variant="burning" className="space-y-4">
  {/* 미션 관련 내용 */}
</MissionBox>
```

### OutlineBox
테두리가 있는 박스 컴포넌트
```tsx
<OutlineBox>
  {/* 내용 */}
</OutlineBox>
```

### Banner
배너 형태의 컴포넌트
```tsx
<Banner>
  {/* 배너 내용 */}
</Banner>
```

## Form Components

### Input
입력 필드 컴포넌트
```tsx
<Input
  label="이메일"
  type="email"
  value={email}
  onChange={setEmail}
  placeholder="이메일을 입력하세요"
  required
  error={emailError}
/>
```

### Select
선택 컴포넌트
```tsx
<Select
  options={[
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
  label="선택"
/>
```

### Checkbox
체크박스 컴포넌트
```tsx
<Checkbox
  label="이용약관에 동의합니다"
  checked={isChecked}
  onChange={setIsChecked}
/>
```

### Toggle
토글 스위치 컴포넌트
```tsx
<Toggle
  checked={isChecked}
  onChange={setIsChecked}
  label="활성화"
/>
```

### Calendar
날짜 선택 캘린더 컴포넌트
```tsx
<Calendar
  selectedDate={selectedDate}
  onChange={setSelectedDate}
/>
```

## UI Components

### Button
기본 버튼 컴포넌트
```tsx
<Button>
  <span>버튼 텍스트</span>
  <Icon size={12} name="chevron-right" />
</Button>
```

### SmallButton
작은 크기의 버튼 컴포넌트
```tsx
<SmallButton>달성하기</SmallButton>
```

### Chip
칩 컴포넌트
```tsx
<Chip variant="filled" className="text-[11px] font-[bold]">텍스트</Chip>
<Chip variant="outlined">D-42</Chip>
```

### Icon
아이콘 컴포넌트
```tsx
<Icon size={18} name="chevron-right" />
```

### ProgressBar
진행 상태 표시 컴포넌트
```tsx
<ProgressBar percent={50} variant="burning" />
```

### EmptyImage
이미지 플레이스홀더 컴포넌트
```tsx
<EmptyImage variant="round" size="small" />
<EmptyImage variant="rectangle" size="large" />
```

## Popup Components

### Popup (Full Screen)
전체 화면 팝업 컴포넌트
```tsx
<Popup
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
  title="알림"
>
  {/* 팝업 내용 */}
</Popup>
```

### Popover
작은 팝업 컴포넌트
```tsx
<Popover
  trigger={<Button>클릭</Button>}
  content={<div>팝업 내용</div>}
  placement="bottom"
/>
```

## 주요 Props 설명

- `variant`: 컴포넌트의 스타일 변형 ("filled", "outlined", "burning" 등)
- `className`: 추가 스타일링을 위한 CSS 클래스
- `size`: 컴포넌트 크기 ("small", "large" 등)
- `onChange`: 값 변경 시 호출되는 함수
- `checked`: 체크박스/토글의 선택 상태
- `error`: 에러 메시지 표시
- `required`: 필수 입력 필드 여부
- `placement`: 팝업 위치 지정


### Chart (recharts)
1. 원의 테두리 추가
```ts
dot={{
  fill: '#BD2459',
  r: 6,
  stroke: '#FFFFFF',
  strokeWidth: 2
}}
```

2. 선 스타일 변경
```ts
strokeDasharray="5 5"  // 점선 간격 조정
strokeWidth={3}        // 선 굵기 조정
```

3. 차트 여백 조정

```tsx
<LineChart
  data={data}
  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
>
```

4. 격자 추가
```tsx
<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
```

5. 툴팁 커스터마이징
```tsx
<Tooltip
  contentStyle={{
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px'
  }}
/>
```

6. 그리드 간격 조정
```tsx
<YAxis
  ticks={[0, 20, 40, 60, 80, 100]} // 원하는 눈금값 직접 지정
/>
```

7.그리드 스타일 추가 커스터마이징
```tsx
<CartesianGrid
  strokeDasharray="2 3"
  stroke="#CCCCCC"
  strokeOpacity={0.5}
  strokeWidth={1}
/>
```

8. Y축레이블 포맷팅
```tsx
<YAxis
  tickFormatter={(value) => `${value}%`} // 값 포맷팅
/>
```