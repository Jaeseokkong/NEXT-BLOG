# 🧠 Jaeseok's TIL Blog

> Today I Learned – 개발하며 배운 내용을 기록하는 나만의 블로그입니다.  
> Markdown + GitHub + Next.js + Tailwind

---

## 🚀 Stack
- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Markdown**: GitHub에서 실시간 fetch
- **Deploy**: Vercel
- **TypeScript**: 타입 안정성 확보
- **기타**:
  - 다크모드 지원 🌙
  - CSR/SSR/SSG/ISR 개념 학습을 겸함
  - 카테고리 기반 사이드바 자동 구성
  - 깃허브에서 마크다운 fetch → 렌더링

---

## 📌 기능 정리
|기능|설명|
|---|---|
|📂 카테고리 자동 탐색|	GitHub에서 폴더명을 불러와 사이드바 메뉴로 구성|
|📄 마크다운 리스트|	각 폴더 안의 .md 파일 목록 출력|
|📘 마크다운 렌더링|	react-markdown으로 HTML로 변환|
|🌙 다크모드|	Tailwind + dark: 클래스 사용|
|🔁 ISR|	정적 생성 + 주기적 재생성 (revalidate: 3600s)|
|⚡ 실시간 fetch|	최신 내용 반영 가능|

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

## 🧑‍💻 만든 사람
Jaeseok Kong

---

## 🪄 하고 싶은 것들 (To-do)
 - [ ] 마크다운 내부 코드 하이라이팅

 - [ ] 검색 기능 추가

 - [ ] 태그 기반 필터링

 - [ ] GitHub 액션으로 자동 배포 설정

## 🌐 배포 주소
???