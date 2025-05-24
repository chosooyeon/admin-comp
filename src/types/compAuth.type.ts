/*
ANY       : 모든 요청에 대해 접근 가능
SELECT    : 조회
UPDATE    : 수정
DELETE    : 삭제
CREATE    : 생성
DOWNLOAD  : 다운로드
UPLOAD    : 업로드
*/
export type CompAuthType =
  | 'ANY'
  | 'SELECT'
  | 'UPDATE'
  | 'DELETE'
  | 'CREATE'
  | 'DOWNLOAD'
  | 'UPLOAD'
