# 이원형 멤버쉽 후원 사이트

취준생활 힘내라고 커피 한 잔 사먹게 응원해주는 분들이 있어서 만들게 된 후원 컨셉 사이트입니다.

[AQR](https://aqr.aplx.link/) 이라는 간편하게 QR로 송금할 수 있는 서비스를 이용했습니다.

평소 관심있던 애니메이션 라이브러리인 [GSAP](https://gsap.com/)를 사용해서 사이트에 생동감과 사용자 경험을 향상시키도록 구현했습니다.

현재 반응형 스타일링과 구매 해주신 분들의 현황파악과 혜택 제공을 위한 백오피스 형태의 추가 페이지를 구현하고 있습니다 :D


## 기술스택

![Next.js](https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MSW](https://img.shields.io/badge/MSW-FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=black)

![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![vanilla-extract](https://img.shields.io/badge/🧁-vanilla--extract-pink?style=for-the-badge&logo=custom&logoColor=white)

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)



## 배포링크 및 로컬 실행

**[🚀 이원형 멤버쉽 사이트](https://lwh-membership.vercel.app/)**

```shell
git clone https://github.com/WonhyeongLee/lwh-membership-page.git
cd your-project-directory
```

```shell
npm install
npm run mock // mocking server 실행해야 합니다
npm run dev
```
```shell
npm run build
npm run start
```

## 주요 내용

### MSW을 활용해 백엔드API가 없다고 가정한 시나리오로 진행

### GSAP을 사용한 스크롤 이벤트 사이트로 제작

### React에서 Next.js 14로 마이그레이션

## 프로젝트 개선 사항

### UI/UX 개선

- **섹션 이동:** 각 섹션의 끝부분에서 다음 섹션으로 자연스럽게 넘어가도록 스크롤 조정 기능을 추가합니다.
- **Navbar 구현:** 각 섹션을 이동하기 쉽도록 네비게이션 바를 구현합니다.
- **반응형 구현:** 모바일에도 보기 쉽도록 여러 크기에 맞춰 반응형으로 구현합니다.

### 성능 개선

- **이미지와 폰트 추가 최적화 진행**

## 트러블슈팅 기록

- **MSW 에서 데이터를 한글 사용 시 content-length가 짤리는 문제 해결**
- 
- **새로고침 시 FOUC 현상**
