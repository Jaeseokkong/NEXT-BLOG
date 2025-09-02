# 🧠 Jaeseok's TIL Blog

> Today I Learned – Next.js 15(App Router)와 Vercel을 활용해 **개발 학습 기록을 위한 블로그 플랫폼**을 직접 구축했습니다.  
> 단순 기록을 넘어서, 최신 프론트엔드 기술을 실무 수준에서 실험하고 적용하는 것이 목표입니다.

---

## 🚀 Tech Stack
- **Framework**: Next.js 15 (App Router, SSR/ISR/SSG 학습 및 적용)
- **Styling**: Tailwind CSS (다크/라이트 모드 지원)
- **Language**: TypeScript (타입 안정성 및 유지보수성 확보)
- **Deploy**: Vercel (CI/CD + ISR 배포)
- **기타**:
  - GitHub API를 통한 Markdown 실시간 fetch
  - react-markdown 기반 글 렌더링 + 코드 하이라이팅
  - 카테고리 자동 생성 및 사이드바 구성

---

## 📸 Preview
(여기에 다크모드/포스트 화면 캡처 or GIF 첨부)

---

## 📌 주요 기능
|기능|설명|
|---|---|
|📂 카테고리 자동 탐색|GitHub Repo 폴더 구조 → 사이드바 메뉴 자동 구성|
|📄 글 목록/상세|Markdown 파일 fetch & 렌더링|
|🌙 다크모드|Tailwind dark: 클래스 활용, 전환 애니메이션|
|⚡ ISR|정적 생성 + 주기적 갱신(revalidate: 3600s)|
|💬 댓글|Giscus 연동, GitHub 계정 기반 댓글 시스템|
|🔍 검색/필터링(예정)|태그 기반 글 필터링, 검색 기능 구현 예정|

---

## 🧾 커밋 컨벤션
|타입|의미|예시|
|---|---|---|
|`feat`|새로운 기능|`feat: 사이드바 카테고리 자동 구성`|
|`fix`|버그 수정|`fix: fetch 실패 시 에러 핸들링 추가`|
|`docs`|문서 수정 (README 등)|`docs: README 내용 정리 및 추가`|
|`style`|코드 스타일 변경 (로직 X)|`style: 들여쓰기 및 코드 포맷팅`|
|`refactor`|리팩토링|`refactor: fetch 함수 구조 개선`|
|`test`|테스트 관련 코드|`test: fetchCategories 테스트 추가`|
|`chore`|설정, 패키지, 기타 변경|`chore: Tailwind 초기 세팅`|

---

## 📝 프로젝트에서 배운 점
- GitHub API를 통한 데이터 fetch 과정에서 발생하는 CORS 이슈 해결 경험
- ISR을 적용하여 빌드 시간과 콘텐츠 갱신 속도의 균형 맞춤
- 다크모드 및 코드 하이라이팅으로 사용자 경험(UX) 개선
- 폴더 구조 기반 자동 라우팅/사이드바 설계 경험

---

## 🪄 향후 계획
- 🔍 검색 및 태그 기반 필터링
- 🔗 SNS 공유 기능 추가
- 📡 RSS/구독 기능
- 🖼️ 이미지 최적화 및 lazy loading
- ⚡ GitHub Action 기반 CI/CD 파이프라인 강화

---

## 🌐 배포 주소
👉 [NEXT-BLOG(HJS)](https://hjs-blog.vercel.app/)

---
