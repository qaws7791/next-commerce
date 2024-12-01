This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- (https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template)[https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template]
- (https://github.com/vercel/commerce)[https://github.com/vercel/commerce]
- (https://dev.to/bespoyasov/clean-architecture-on-frontend-4311)[https://dev.to/bespoyasov/clean-architecture-on-frontend-4311]
- (https://profy.dev/article/react-architecture-api-client)[https://profy.dev/article/react-architecture-api-client]

## Architecture

Presentation(Web) -> Application(UseCase) -> Domain(Entity) -> Infrastructure(Repository)

### 1. Presentation(Web) 레이어

프레젠테이션 레이어는 사용자와 상호작용하는 방법을 정의한다. 주요 구성 요소는 다음과 같다.

- 컴포넌트: UI를 정의
- 페이지: 라우팅을 정의
- 라우터: 페이지 간의 이동을 정의
- 상태 관리: 클라이언트 측에서 상태를 관리

### 2. Application 레이어

애플리케이션 레이어는 애플리케이션의 비즈니스 로직을 정의한다. 주요 구성 요소는 다음과 같다.

- 유스케이스: 애플리케이션의 비즈니스 로직을 정의

### 3.Domain 레이어

엔티티는 애플리케이션에서 사용되는 데이터의 구조를 정의한다. 주요 구성 요소는 다음과 같다.

- 엔티티: 데이터의 구조를 정의

### 4. Infrastructure 레이어

인프라스트럭처 레이어는 애플리케이션의 데이터를 저장하고 관리하는 방법을 정의한다. 주요 구성 요소는 다음과 같다.

- 리포지토리: 데이터를 저장하고 관리하는 방법을 정의(예: 데이터베이스, API, 파일 시스템 등)
