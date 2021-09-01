# ssac_react

 - node module : node.js module folder
 - public : 실제 브라우저에 표시되는 리소스들이 저장되는 폴더
 - src : html 파일에 반영되는(랜더링) 콘텐츠, 기능이 구현되어 있는 파일들이 저장되어 있는 폴더
 - index.html <= index.js <= App.js(component)


## react

- 공식 문서 : https://ko.reactjs.org/

## React의 특징

- Virtual DOM
- SPA(Single Page Application)
- component : 작은 단위로 나누어준 코드 블럭(단위, 조각)

### JSX(Javascript Syntax eXtention / Javascript XML)

- HTML 마크업 언어를 별다른 기호 사용없이 그대로 Javascript 구문처럼 사용할 수 있는 것
- babel.js 라이브러리가 JSX를 사용가능하게 해줌
- JSX는 return 키워드 ()안에 하나의 Element영역으로 그룹화 되어 있어야 함
- 하나의 영역으로 그룹화 할 때 특정 Element로 그룹화 해서 반영하지 않을 때 - Fragment 사용
- JSX에서 자바스크립트 변수 값 사용하
  - {변수이름}
- JSX에서 class, id 지정하기
  - class : className 속성 사용
  - id : id 속성 사용
- JSX 주석 : {* 주석내용 */}

### 구조 분해 할당


### todo Markup

https://dev.to/hariramjp777/todo-app-using-html-css-and-js-local-storage-design-html-and-css-1m0j