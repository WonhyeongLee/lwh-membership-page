# 이원형 멤버쉽 후원 사이트

취준생활 힘내라고 커피 한 잔 사먹게 응원해주는 분들이 있어서 만들게 된 후원 컨셉 사이트입니다.

[AQR](https://aqr.aplx.link/) 이라는 간편하게 QR로 송금할 수 있는 서비스를 이용했습니다.

평소 관심있던 애니메이션 라이브러리인 [GSAP](https://gsap.com/)를 사용해서 사이트에 생동감과 사용자 경험을 향상시키도록 구현했습니다.

구매 해주신 분들의 혜택 제공을 위한 추가 사이트들도 구현 예정입니다 :D


## 기술스택

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![vanilla-extract](https://img.shields.io/badge/🧁-vanilla--extract-pink?style=for-the-badge&logo=custom&logoColor=white)

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 배포링크 및 로컬 실행

**[🚀 이원형 멤버쉽 사이트](https://lwh-membership-page.vercel.app/)**

```shell
git clone https://github.com/WonhyeongLee/lwh-membership-page.git
cd your-project-directory
```

```shell
npm install
npm run dev
```

```shell
npm run dev
```

## 주요 기능

## 프로젝트 개선 사항

### UI/UX 개선

- **스크롤 조정:** 각 섹션의 끝부분에서 다음 섹션으로 자연스럽게 넘어가도록 스크롤 조정 기능을 추가합니다.

### 구조 및 가독성 개선

- **재사용성:** 내용만 변경하면 누구나 쉽게 사용할 수 있도록, 프로젝트를 개선합니다.
- **섹션 이동 NavBar:** 웹사이트 내에서의 원활한 탐색을 위해 섹션 이동을 돕는 NavBar를 구현합니다. 사용자가 원하는 섹션으로 쉽게 이동할 수 있게 합니다.

### 기능 추가

- **구매자 정보 입력 폼:** 송금 전 구매자의 정보를 입력하기 위한 폼을 추가합니다. 이는 거래의 투명성과 안전성을 높이는 데 기여합니다.

### 성능 개선

- **SSG 지원 리팩토링:** 정적인 사이트기 때문에 로딩 시간 단축과 SEO(여기선 필요하진 않지만) 향상을 위해 SSG와 SSR을 지원하는 Next.js로 프로젝트를 리팩토링 합니다.


## 문제 해결 기록