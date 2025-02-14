This is a project with Rick and Morty cards built with [Next.js](https://nextjs.org/). Use a Custom hook to fetch the api and useReducer hook to update the data to set page.

## Demo 
Demo with the app deployed in Vercel [here](https://rick-and-morty-cards-three.vercel.app/).

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


## Development

Based in scalable folder structure by [React.js Architecture Pattern](https://www.knowledgehut.com/blog/web-development/react-js-architecture)

```
rick-and-morty-cards
├── public
├── src
│   app
|   ├── components
|   |   ├── [+] card
|   |   ├── [+] footer
|   |   ├── [+] navbar
|   |   ├── [+] pagination
│   │   └── [+] skeleton
|   ├── core
|   |   ├── [+] constants
│   │   └── [+] interfaces
│   ├── hooks
│   │   └── use-custom-hook-fetch-character.ts
|   ├── favicon.ico
|   ├── layout.tsx
|   ├── page.module.css
|   ├── page.tsx
│   ├── styles
│   │   ├── global.css
│       └── not-found.module.scss
└── ...
```


## Deploy on Vercel

This app was deployed in [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
