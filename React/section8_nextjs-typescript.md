# 8. Next.js 와 TypeScript

## Next.js

### Next.js란?

React의 SSR(Server side Rendering)을 쉽게 구현할 수 있게 도와주는 간단한 프레임워크이다.

리액트로 개발할 때 SPA(Single Page Application)을 이용하며 CSR(Client Side Rendering)을 하기 때문에 장점도 있지만 검색엔진 최적화 (SEO) 부분에 단점이 있다. Cliend Side Rendering을 하면 첫 페이지에서 빈 html을 가져와서 JS파일을 해석하여 화면을 구성하기 때문에 포털 검색에 거의 노출될 일이 없다.

하지만 Next.js에서는 Pre-Rendering을 통해서 미리 렌더링하며 완성된 HTML을 가져오기 때문에 사용자와 검색 엔진 크롤러에게 바로 렌더링 된 페이지를 전달할 수 있게 된다.

리액트에서도 SSR을 지원하지만 구현하기에 굉장히 복잡하기 때문에 Next.js를 통해서 이 문제를 해결해주게 된다.

### Server Side Rendering

- 클라이언트 대신 서버에서 페이지를 준비하는 원리이다.
- 원래 리액트에서는 클라이언트 사이드 렌더링하기 때문에 서버에 영향을 미치지 않고, 서버에서 클라이언트로 응답해서 보낸 html도 거의 비어있다.
  - 이 방식은 서버에서 데이터를 가져올 때 지연 시간 발생으로 UX 측면에서 좋지 않을 수 있다.
  - 검색 엔진에 검색 시 웹 크롤링이 동작할 때 내용을 제대로 가져와 읽을 수 없기에 검색 엔진 최적화에 문제가 된다.
- Next.js에서는 서버 사이드 렌더링을 이용하므로 사용자와 검색 엔진 크롤러에게 바로 렌더링 된 페이지를 전달할 수 있어서 검색 엔진 최적화에 좋은 영향을 준다.

### 설치 방법

`npx create-next-app ./` 명령어 입력 후

- Yes
  - TypeScript
  - ESLint
- No
  - Tailwind CSS
  - ‘src/’ directory
  - App Router
  - import alias

## **NextJS 기본 파일 구조**

### pages

- 이 폴더 안에 페이지들을 생성한다.
- index.tsx가 처음 “/“ 페이지로 된다.
- \_app.tsx는 공통되는 레이아웃을 작성한다. 모든 페이지에 공통으로 들어가는 걸 넣어준다. (url을 통해 특정 페이지에 진입하기 전 통과하는 인터셉터 페이지이다)

### public

- 이미지 같은 정적(static) 에셋들을 보관한다.

### styles

- 스타일링을 처리해주는 폴더이다.
- 모듈 css는 컴포넌트 종속적으로 스타일링하기 위한 것이며, 확장자 앞에 module을 붙여줘야 한다.

### next.config.js

- Next.js는 웹 팩을 기본 번들러로 사용한다. 웹 팩에 관한 설정을 이 파일에서 한다.

## **Pre-rendering**

NextJS는 모든 페이지를 pre-render한다. pre-render는 모든 페이지를 위한 HTML을 Client 사이드에서 자바스크립트로 처리하기 전 사전에 생성한다는 것이고, 이렇게 하기 때문에 SEO 검색 엔진 최적화가 좋아진다.

### Pre-render테스트

https://developer.chrome.com/docs/devtools/javascript/disable?hl=ko

react 사이트에서 javascript disabled를 하면 화면이 나타나지 않고 nextjs 사이트에서 하면 화면이 출력된다.

## Data Fetching

### Nextjs에서 데이터를 가져오는 방법

보통 리액트에서는 데이터를 가져올 때 useEffect 안에서 가져온다. Nextjs에서는 여러 가지의 방법이 있고 애플리케이션의 사용 용도에 따라서 다른 방법을 사용해주면 된다.

### getStaticProps

Static Generation으로 빌드할 때 마다 데이터를 불러온다.

getStaticProps 함수를 async로 export하면, getStaticProps에서 리턴되는 props를 가지고 페이지를 pre-render 한다. build time에 페이지를 렌더링한다.

useEffect로 데이터를 가져왔을 때 보다 훨씬 빠르게 가져오게 된다.

### **getStaticProps를 사용해야 할 때**

- 페이지를 렌더링 하는데 필요한 데이터를 사용자의 요청보다 먼저 build 시간에 가져올 수 있을 때
- 데이터를 headless CMS에서 가져올 때
- 모든 사용자에게 같은 데이터를 보여줄 때
- 페이지는 미리 렌더링되어야 하고 (SEO의 경우) 매우 빨라야 할 때 (getStaticProps는 성능을 위해 CDN에서 캐시할 수 있는 HTML 및 JSON 파일을 생성한다.)

### getStaticPaths

Static Generation으로 데이터에 기반하여 pre-render시 특정한 동적 라우팅 구현

동적 라우팅이 필요할 때 getStaticPaths로 경로 리스트를 정의하고, HTML에 build 시간에 렌더된다.

Nextjs는 pre-render에서 정적으로 getStaticPaths에서 호출하는 경로들을 가져온다.

**paths**

- 어떠한 경로가 pre-render 될지를 결정한다.
- 만약 pages/posts/[id].js 라는 이름의 동적 라우팅을 사용하는 페이지가 있다면
  1. 빌드하는 동안 /posts/1과 /posts/2 를 생성하게 된다.
  2. 이렇게 경로가 생성되면 getStaticProps를 이용해서 해당 페이지들의 HTML을 생성하게 된다.

**params**

- 페이지 이름이 pages/posts/[postId]/[commentId] 라면, params는 postId와 commentId 이다.
- 만약 페이지 이름이 pages/[…slug] 와 같이 모든 경로를 사용한다면, params 는 slug가 담긴 배열이어야 한다. [‘postId’, ‘commentId’]

**fallback**

- false 라면 getStaticPaths로 리턴되지 않는 것은 모두 404 페이지가 뜬다. (빌드 시점에 없는 페이지는 404 페이지로 넘어가게 된다)
- true 라면 getStaticPaths로 리턴되지 않는 것은 404로 뜨지 않고, fallback 페이지가 뜨게 된다.
- 먼저 사용자에게 fallback 페이지를 보여주고 서버에서 static하게 페이지를 생성한다.
- 그 후에 서버에서 생성한 해당 페이지를 사용자에게 보여주고 그 다음부터는 해당 페이지로 접속하는 사용자에게는 static 한 페이지를 보여준다.

### getServerSideProps

Server Side Rendering으로 요청이 있을 때 데이터를 불러온다.

getServerSideProps 함수를 async로 export하면, Next 는 각 요청마다 리턴되는 데이터를 getServerSideProps로 pre-render한다.

### getServerSideProps를 사용해야 할 떄

요청할 때 데이터를 가져와야 하는 페이지를 미리 렌더해야 할 때 사용한다. 서버가 모든 요청에 대한 결과를 계산하고, 추가 구성없이 CDN에 의해 결과를 캐시할 수 없기 때문에 첫번째 바이트까지의 시간은 getStaticProps보다 느리다. (TTFB-Time to first byte, HTTP 요청 이후 처음 데이터가 도달하는 시간)

## Typescript

### TypeScript란?

타입스크립트는 자바스크립트에 타입을 부여한 언어이다. 자바스크립트의 확장된 언어라고 볼 수 있다. 타입스크립트는 자바스크립트와 달리 브라우저에서 실행하려면 파일을 한번 변환해주어야 한다. 이 변환 과정을 compile이라고 부른다.

### Type System

- 개발 환경에서 에러 잡는 것을 도와준다.
- type annotations을 사용해서 코드를 분석할 수 있다.
- 오직 개발 환경에서만 활성화 된다.
- 타입 스크립트와 성능 향상과는 관계가 없다.

### TypeScript 사용하는 이유

- TypeScript는 JavaScript 코드를 단순화하여 더 쉽게 읽고 디버그 할 수 있도록 한다.
- TypeScript는 오픈 소스 이다.
- 정적 검사와 같은 JavaScript IDE 및 사례를 위한 매우 생산적인 개발 도구를 제공한다.
- TypeScript를 사용하면 코드를 더 쉽게 읽고 이해할 수 있고 일반 Javascript보다 크게 개선할 수 있다.
- ES6(ECMAScript 6)의 모든 이점과 더 많은 생산성을 제공한다.
- 코드 유형 검사를 통해 JavaScript를 작성할 때 개발자가 일반적으로 겪는 고통스러운 버그를 피하는데 도움이 될 수 있다.

## Nextjs와 TypeScript 만들 앱

### 간단한 블로그 앱

nextjs 공식 사이트 Documentation에서 nextjs를 배우기 위해 만드는 앱. 블로그 포스트 내용은 md 파일로 작성

## 메인 페이지 UI 만들기 (마크다운 파일 생성)

- `index.tsx`

  ```
  import Head from "next/head";
  import Image from "next/image";
  import { Inter } from "next/font/google";
  import homeStyles from "@/styles/Home.module.css";

  const inter = Inter({ subsets: ["latin"] });

  export default function Home() {
    return (
      <div>
        <Head>
          <title>aldo</title>
        </Head>
        <section className={homeStyles.headingMd}>
          <p>[aldo Introduction]</p>
          <p>(This is a website)</p>
        </section>
        <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
          <h2 className={homeStyles.headingLg}>Blog</h2>
          <ul className={homeStyles.list}></ul>
        </section>
      </div>
    );
  }
  ```

- `Home.module.css`

  ```css
  .headingMd {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .padding1px {
    padding-top: 1px;
  }

  .headingLg {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ```

### md 파일 안에 포스트 생성하기

1. 루트 경로에 posts 폴더 생성
2. `pre-rendering.md`

   ```markdown
   ---
   title: "Two Forms of Pre-rendering"
   date: "2020-01-01"
   ---

   Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

   - **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
   - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

   Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
   ```

3. `ssg-ssr.md`

   ```
   ---
   title: "When to Use Static Generation v.s. Server-side Rendering"
   date: "2020-01-02"
   ---

   We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

   You can use Static Generation for many types of pages, including:

   - Marketing pages
   - Blog posts
   - E-commerce product listings
   - Help and documentation

   You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

   On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

   In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
   ```

## 마크다운 파일을 데이터로 추출하기

### gray-matter 설치

`npm install gray-matter —save`

### post에 사용할 함수들을 만들 폴더와 파일 생성

- `lib/posts.ts`

  ```
  import fs from "fs";
  import path from "path";
  import matter from "gray-matter";

  const postsDirectory = path.join(process.cwd(), "posts");
  console.log("process.cwd()", process.cwd());
  console.log("postsDirectory", postsDirectory);

  export function getSortedPostsData() {
    // /posts 파일 이름을 잡아주기
    const fileNames = fs.readdirSync(postsDirectory);

    //  ['pre-rendering.md', ...]
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as { date: string; title: string }),
      };
    });

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  ```

## Typescript Type

타입이란, 그 value가 가지고 있는 프로퍼티나 함수를 추론할 수 있는 방법이다.

### 자바스크립트에서 문자열

**Property**

string.length는 문자열의 속성인 문자열의 길이를 제공한다. 문자열 자체에는 아무것도 하지 않는다.

**Method**

string.toLowerCase()는 문자열을 소문자로 변환한다. 즉, 문자열에 작업을 수행한 다음 반환한다.

### Types in Typescript

TypeScript는 JavaScript에서 기본으로 제공하는 기본 제공 유형을 상속한다.

## Typescript 추가 제공 타입

### Any

애플리케이션을 만들 때, 잘 알지 못하는 타입을 표현해야 할 수가 있다. 이 값들은 사용자로부터 받은 데이터나 서드 파티 라이브러리 같은 동적인 컨텐츠에서 올 수도 있다. 이 경우 타입 검사를 하지 않고, 그 값들을 컴파일 시간에 검사할 때 타입 검사를 통과하길 원한다. 이를 위해서, any 타입을 사용할 수 있다.

하지만 이 타입은 최대한 쓰지 않는게 좋다. 그래서 nolmplicitAny라는 옵션을 주면 any를 썼을 때 오류가 나오게 할 수 있다.

```tsx
let something: any = "Hello World!";
something = 23;
something = true;
```

```tsx
let arr: any[] = ["John", 212, true];
arr.push("Smith");
console.log(arr); // ['John', 212, true, 'Smith']
```

### Union

TypeScript를 사용하면 변수 또는 함수 매개변수에 대해 둘 이상의 데이터 유형을 사용할 수 있다. 이것을 유니온 타입이라고 한다.

```tsx
let code: string | number;
code = 123;
code = "ABC";
code = false;

let empId: string | number;
empId = 111;
empId = "E111";
empId = true;
```

### **Enum**

enumerated type(열거형)을 의미한다. Enum은 값들의 집합을 명시하고 이를 사용하도록 만든다.

객체는 코드 내에서 새로운 속성을 자유롭게 추가할 수 있지만, enum은 선언한 후에 변경할 수 없다. object의 속성값은 JS가 허용하는 모든 타입이 올 수 있지만, enum의 속성값으로는 문자열 혹은 숫자만 허용된다.

### **Void**

Java와 같은 언어와 유사하게 데이터가 없는 경우 void가 사용된다. 예를 들어 함수가 값을 반환하지 않으면 반환 유형으로 void를 지정할 수 있다.

타입이 없는 상태이며, any와 반대의 의미를 가진다. void를 소문자로 사용해야하며, 주로 함수의 리턴이 없을 때 사용하면 된다.

```tsx
function sayHi(): void {
  console.log("Hi");
}

let speech: void = sayHi();
console.log(speech); // undefined
```

### **Never**

TypeScript는 절대 발생하지 않을 값을 나타내는 never를 도입했다.

Never 유형은 어떤 일이 절대 일어나지 않을 것이라고 확신할 때 사용된다.

일반적으로 함수의 리턴 타입으로 사용된다. 함수의 리턴 타입으로 never가 사용될 경우, 항상 오류를 리턴하거나 리턴 값을 절대로 내보내지 않음을 의미한다. 이는 무한 루프에 빠지는 것과 같다.

```tsx
function throwError(errorMsg: string): never {
	throw new Error(errorMsg);
}

function keepProcessing(): never {
	while (true) {
		console.log(‘I always does something and never ends.’)
	}
}
```

### **void와 never의 차이**

Void 타입은 값으로 undefined이나 null 값을 가질 수 있으며 Never는 어떠한 값도 가질 수 없다.

TypeScript에서 값을 Return 하지 않는 함수는 실제로 undefined를 반환한다.

## type annotation, type inference

### type annotation

개발자가 타입을 타입스크립트에게 직접 말해주는 것

```tsx
const rate: number = 5; // number 타입 지정
```

### type inference

타입스크립트가 알아서 타입을 추론하는 것

```tsx
const rate = 5; // 변수 선언과 동시에 초기화 할 경우 타입을 알아서 추론한다.
```

### 타입을 추론하지 못해서 타입 annotation을 꼭 해줘야 하는 경우

**any 타입을 리턴하는 경우**

```tsx
const json = '{"x": 4, "y": 7}';
const coordinates = JSON.parse(json);
console.log(coordinates);
```

`coordinates`에 hover 해보면 `const coordinates: any` 라고 뜨는 것을 볼 수 있다. JSON.parse는 json을 파싱해준다. 인풋으로 들어가는 json을 확인하면 대충 어떤 타입이 리턴될지 개발자는 예상할 수 있지만, 타입스크립트는 여기까지 지원하지 않는다. 리턴 타입이 일정하지 않으므로 any를 리턴한다고 추론하기 때문에 이 경우에는 타입 애노테이션을 해주어야 한다.

**변수 선언을 먼저하고 나중에 초기화하는 경우**

변수 선언과 동시에 초기화하면 타입을 추론하지만 선언을 먼저하고 나중에 값을 초기화 할 때에는 추론하지 못한다.

```tsx
let greeting

greeting = ‘hello’
```

**변수에 대입될 값이 일정치 못하는 경우**

여러 타입이 지정되어야 할 때에는 | (or statement)로 여러 타입을 애노테이션 해준다.

```tsx
let num = [-7, -2, 10];
let numAboveZero: boolean | number = false;

for (let i = 0; i < num.length; i++) {
  if (num[i] > 0) {
    numAboveZero = num[i];
  }
}
```

## **Type assertion**

### **type assertion**

type assertion을 사용하면 값의 type을 설정하고 컴파일러에 이를 유추하지 않도록 지시하는 것이다.

```tsx
var foo = {};

foo.bar = 123; // 오류: 속성 ‘bar’가 ‘{}’에 존재하지 않음

foo.bas = ‘hello’ // 오류: 속성 ‘bar’가 ‘{}’에 존재하지 않음
```

컴파일러는 foo type이 속성이 없는 {}라고 가정하기 떄문에 컴파일러 오류가 발생한다. 그러나 아래와 같이 type assertion을 사용하면 이러한 상황을 피할 수 있다.

```tsx
interface Foo {
	bar: number;
	bas: string;
}

var foo = {} as Foo
foo.bar = 123;
foo.bas = ‘hello’
```

## getStaticProps를 이용한 포스트 리스트 나열

### 빌드 타임에 포스트 자료 가져오기 (index.tsx)

```tsx
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
```

### props로 포스트 데이터 가져오기

```tsx
export default function Home({ allPostsData }: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
```

### 리스트 나열하기

```tsx
<ul className={homeStyles.list}>
  {allPostsData.map(({ id, title, date }) => (
    <li className={homeStyles.listItem} key={id}>
      <a>{title}</a>
      <br />
      <small className={homeStyles.lightText}>{date}</small>
    </li>
  ))}
</ul>
```

## 포스트 자세히 보기 페이지로 이동 (file system 기반의 라우팅)

### 파일 기반 네비게이션 기능

리액트에서는 route를 위해서 react-router라는 라이브러리를 사용하지만 Next.js에는 페이지 개념을 기반으로 구축된 파일 시스템 기반 라우터가 있다.

파일이 페이지 디렉토리에 추가되면 자동으로 경로로 사용할 수 있다. 페이지 디렉토리 내의 파일은 가장 일반적인 패턴을 정의하는데 사용할 수 있다.

### 포스트 파일 생성

`./pages/posts/[id].tsx` 생성 후 함수명 Post로 변경

```tsx
import React from "react";

const Post = () => {
  return <div>[id]</div>;
};

export default Post;
```

### Link 함수를 이용한 페이지 이동

```tsx
<Link href={`/posts/${id}`}>
  <span>{title}</span>
</Link>
```

## **포스트 데이터를 가져와서 보여주기 (remark)**

### **getStaticPaths**

동적 라우팅이 필요할 때 getStaticPaths로 경로 리스트를 정의하고, HTML에 build 시간에 렌더된다.

Nextjs는 pre-render에서 정적으로 getStaticPaths 에서 호출하는 경로들을 가져온다.

### **Post 데이터를 가져와야 하는 경로 목록을 가져오기**

```tsx
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  // [{params: {id: 'pre-rendering'}, {param...}]
  return {
    paths,
    fallback: false,
  };
};
```

### **fallback**

- false 라면 getStaticPaths로 리턴되지 않는 것은 모두 404페이지가 뜬다.
- true 라면 getStaticPaths로 리턴되지 않는 것은 404로 뜨지 않고, fallback 페이지가 뜨게 된다.

```tsx
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
```

### **전달받은 아이디를 이용해서 해당 포스트의 데이터 가져오기**

```tsx
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
```

```tsx
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { data: string; title: string }),
  };
}
```

### 가져온 데이터 화면에서 보여주기

```tsx
const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </div>
  );
};
```

## 애플리케이션 스타일링

`Post.module.css` , `Home.module.css`

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

## **NextJS App Router**

### next app 설치

nextjs13-app 생성 후 `npx create-next-app ./`

### 백엔드 서비스를 위한 포켓 베이스 이용하기

https://pocketbase.io/docs/

### 사용법

1. 다운로드 폴더에서 pocketbase 파일을 next app의 root 폴더에 복사 붙여넣기
2. `./pocketbase serve` 입력
3. **Admin UI 접속**
4. Data 생성 - New Collection - Name 입력 - field 선택 - create
5. Data settings - API Rules - Unlock All Rules

### File System Routing

- `home/` **:** abc.com/home - plain path
- `[slug]/` : abc.com/{slug} - dynamic path
- `(group)/` : abc.com/ - just for grouping, 경로에 포함되지 않는다.

### 기본 파일 및 컴포넌트 생성

```tsx
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return <div>Homepage</div>;
}
```

프로젝트 실행 - `npm run dev`

### 전체 스타일링

```tsx
return (
  <html lang="en">
    <body className={inter.className}>
      <nav>
        <Link href={"/"}>Home</Link> &nbsp;&nbsp;
        <Link href={"/posts"}>Post</Link>
      </nav>
      <main>{children}</main>
    </body>
  </html>
);
```

### Post page 생성

`./app/posts/page.tsx`

```tsx
import React from "react";

const PostsPage = () => {
  return <div>PostsPage</div>;
};

export default PostsPage;
```

nextjs 컴포넌트는 기본적으로 Server Component

### getPosts

```tsx
async function getPost() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records"
  );
  const data = await res.json();
  return data?.items as any[];
}
```

### posts 나열하기

```tsx
const PostsPage = async () => {
  const posts = await getPost();

  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};
```

### PostItem 컴포넌트

```tsx
const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};
  return (
    <>
      <Link href={`/posts/${id}`}>
        <div>
          <h3>{title}</h3>
          <p>{created}</p>
        </div>
      </Link>
    </>
  );
};
```

### Static Data Fetching

기본적으로 fetch는 자동으로 데이터를 가져오고 캐시한다.

### Refresh on every request

캐시가 안되게 하고 모든 리퀘스트 마다 다시 가져올 수 있게 해준다.

```tsx
async function getPost() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data?.items as any[];
}
```

### Post Detail Page 생성

`./app/posts/[id]/page.tsx`

```tsx
const PostDetailPage = () => {
  return <div>PostDetailPage</div>;
};

export default PostDetailPage;
```

### 데이터 가져오기

```tsx
async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`
  );
}
```

### Revalidating Data

캐시된 데이터를 일정 시간 간격으로 재검증하려면 fetch() 에서 next.revalidate 옵션을 사용할 수 있다. 기본 단위는 초이다.

```tsx
async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
    {
      next: { revalidate: 10 },
    }
  );
}
```

### id에 따른 Post 데이터, UI 생성

```tsx
async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = res.json();
  return data;
}

const PostDetailPage = async ({ params }: any) => {
  const post = await getPost(params.id);
  return (
    <div>
      <h1>posts/{post.id}</h1>
      <div>
        <h3>{post.title}</h3>
        <p>{post.created}</p>
      </div>
    </div>
  );
};

export default PostDetailPage;
```

### error.tsx

```tsx
async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    // 가장 가까이에 있는 error.js 파일이 activated
    throw new Error("Failed to fetch data");
  }

  const data = res.json();
  return data;
}
```

```tsx
"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
```

### 데이터 생성 컴포넌트 생성

데이터 생성을 위해 useState() 또는 onClick 을 사용하므로 클라이언트 컴포넌트를 사용해야 한다.

Client Component 를 사용하려면 앱 내부에 파일을 만들고 파일 상단에 ‘use client’ 지시문을 임포트하기 전에 추가한다.

```tsx
"use client";

const CreatePost = () => {
  return <div>CreatePost</div>;
};

export default CreatePost;
```

```tsx
const CreatePost = () => {
  const [title, setTitle] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <button type="submit">Create Post</button>
    </form>
  );
};
```

### POST 요청 보내기

```tsx
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  await fetch("http://127.0.0.1:8080/api/collections/posts/records", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
    }),
  });
  setTitle("");
};

return (
    <form onSubmit={handleSubmit}>
```

### CreatePost 컴포넌트 Import

```tsx
const PostsPage = async () => {
  const posts = await getPost();

  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
      <CreatePost />
    </div>
  );
};
```

### refresh()

refresh()를 호출하면 현재 경로가 서버에서 업데이트 된 할 일 목록을 새로고침 하고 가져온다. 이는 브라우저 기록에 영향을 미치지 않지만 루트 레이아웃에서 아래로 데이터를 새로 고침한다. refresh()를 사용할 때 React 및 브라우저 상태를 모두 포함하여 클라이언트 측 상태가 손실되지 않는다. full page refresh를 안해도 된다.

```tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("http://127.0.0.1:8080/api/collections/posts/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    });
    setTitle("");
    router.refresh();
  };
```

## Server Action

폴더 생성 후 `npx create-next-app@latest ./`

```jsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 베타 버전이기 때문에 설정해준다.
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
```

### Server Component

함수 본문 상단에 “use server” 지시문을 사용하여 비동기 함수를 정의하고 서버 작업을 만든다. “use server”는 이 기능이 서버에서만 실행되도록 한다.

```tsx
import Image from "next/image";

export default function ServerComponent() {
  async function myAction() {
    "use server";
  }
  return <div></div>;
}
```

### Client Component

파일 상단에 “use server” 지시문을 사용하여 별도의 파일에 서버 작업을 만든다. 그런 다음 서버 작업을 클라이언트 구성 요소로 가져온다.

```tsx
"use server";

export async function myAction() {}
```

```tsx
import { myAction } from "@/lib/actions";
import React from "react";

const ClientComponents = () => {
  return (
    <form action={myAction}>
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default ClientComponents;
```

server action은 파일을 따로 만들면 ClientComponents에서도 가져와서 쓸 수 있다.

### Server Action 호출 방법

- Using `action` : 리액션의 `action` prop은 `<form>`요소에 넣어서 server action을 호출한다.
- Using `formAction` : React의 `formAction` prop은 <form> 요소의 `<button>`, `<input type=“submit”>`, `<input type=“image”>` 에서 사용할 수 있다.
- Custom Invocation with `startTransition`

### Todo App 생성

```json
{
  "todos": [
    {
      "userId": 1,
      "title": "밥먹기",
      "completed": false,
      "id": 3
    },
    {
      "userId": 2,
      "title": "잠자기",
      "completed": false,
      "id": 4
    }
  ]
}
```

### json server 이용하여 실제 server 만들기

`npm install -g json-server` 명령어 입력
`json-server --watch db.json -p 3001`

```
npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules/json-server
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/json-server'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/json-server'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules/json-server'
npm ERR! }
```

와 같이 에러 발생 시 권한 문제로 터미널을 통한 다운로드가 되지 않는 것이다.

이럴 때는 `sudo npm install -g json-server` 로 입력해준다.

\***\*다른 방법 : [[Node.js] Error: EACCES: permission denied](https://velog.io/@milkcoke/Node.js-Error-EACCES-permission-denied)**

```tsx
import Image from "next/image";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div>
      <Form />
      <TodoList />
    </div>
  );
}
```

### Todo List

```tsx
import React from "react";
import TodoItem from "./TodoItem";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodos() {
  try {
    const res = await fetch("http://localhost:3001/todos");
    const todos: Todo[] = await res.json();
    return todos;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
    }
  }
}

const TodoList = async () => {
  const todos = await fetchTodos();

  let content;
  if (!todos || todos.length === 0) {
    content = <p>Todo 리스트가 없습니다.</p>;
  } else {
    const sortedTodos = todos.reverse();

    content = (
      <>
        {sortedTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </>
    );
  }
  return content;
};

export default TodoList;
```

실행할 때 json sever가 실행되어 있어야하고, `npm run dev` 도 실행한다. (터미널 창 하나 더 생성하면 된다.)

### Todo Item

```tsx
import React from "react";
import { Todo } from "./TodoList";
import Link from "next/link";

const TodoItem = (todo: Todo) => {
  return (
    <form className="my-4 flex justify-between items-center">
      <label htmlFor="completed" className="test-2xl hover:underline">
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div className="flex items-center gap-4`">
        CheckBox
        <button>X</button>
      </div>
    </form>
  );
};

export default TodoItem;
```

### Form

```tsx
import { addTodo } from "@/lib/actions";
import React from "react";

const Form = () => {
  return (
    <form action={addTodo} className="flex items-center gap-2">
      <input
        type="text"
        name="title"
        className="flex-grow w-full p-1 text-2xl rounded-lg"
        placeholder="새로운 할 일을 생성하세요."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
```

```tsx
"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(data: FormData) {
  const title = data.get("title");

  await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      title,
      completed: false,
    }),
  });

  revalidatePath("/");
}
```

`revalidatePath()`

캐시되어 있던 데이터를 없애준다. 새로 목록을 추가하기 위해서 원래 캐시되어 있던 데이터를 없애주기 위해 `revalidatePath()`를 사용한다.

### 삭제 기능 생성

`formAction` 사용

```tsx
import React from "react";
import { Todo } from "./TodoList";
import Link from "next/link";
import { deleteTodo } from "@/lib/actions";

const TodoItem = (todo: Todo) => {
  return (
    <form className="my-4 flex justify-between items-center">
      <label htmlFor="completed" className="test-2xl hover:underline">
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div className="flex items-center gap-4">
        CheckBox
        <button
          formAction={async () => {
            "use server";
            await deleteTodo(todo);
          }}
        >
          X
        </button>
      </div>
    </form>
  );
};

export default TodoItem;
```

```tsx
export async function deleteTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
    }),
  });

  await res.json();
  revalidatePath("/");
}
```

### 체크 업데이트 기능 생성

`startTransition` 사용

```tsx
const TodoItem = (todo: Todo) => {
  return (
    <form className="my-4 flex justify-between items-center">
      <label htmlFor="completed" className="test-2xl hover:underline">
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div className="flex items-center gap-4">
        <Checkbox todo={todo} />
```

```tsx
"use client";
import React, { useTransition } from "react";
import { Todo } from "./TodoList";
import { updateTodo } from "@/lib/actions";

const Checkbox = ({ todo }: { todo: Todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <input
      type="checkbox"
      checked={todo.completed}
      id="completed"
      name="completed"
      disabled={isPending}
      onChange={() => startTransition(() => updateTodo(todo))}
      className="min-w-[2rem] min-h-[2rem]"
    />
  );
};
export default Checkbox;
```

```tsx
export async function updateTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "CONTENT-Type": "application/json",
    },
    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  });
  await res.json();
  revalidatePath("/");
}
```

### sleep 추가

```tsx
export default function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
```

```tsx
export async function updateTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "CONTENT-Type": "application/json",
    },
    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  });
  await res.json();
  await sleep(1000);
  revalidatePath("/");
}
```

체크박스를 클릭했을 때 백엔드에서 다 처리가 되고 난 이후에 응답을 받으면 체크박스가 업데이트 된다.

### useOptimistic 사용

`useOptimistic()` 을 사용하면 백엔드 작업이 끝나기 전에 변화를 볼 수 있다.

```tsx
"use client";
import React, { useOptimistic, useTransition } from "react";
import { Todo } from "./TodoList";
import { updateTodo } from "@/lib/actions";

const Checkbox = ({ todo }: { todo: Todo }) => {
  const [optimisticTodo, appOptimisticTodo] = useOptimistic(
    todo,
    (state: Todo, completed: boolean) => ({ ...state, completed })
  );
  //   const [isPending, startTransition] = useTransition();
  return (
    <input
      type="checkbox"
      checked={optimisticTodo.completed}
      id="completed"
      name="completed"
      //  disabled={isPending}
      onChange={async () => {
        appOptimisticTodo(!todo.completed);
        await updateTodo(todo);
      }}
      className="min-w-[2rem] min-h-[2rem]"
    />
  );
};
export default Checkbox;
```
