# 인프런 강의 스터디_비전공자를 위한 올인원 개발 클래스

### 관련 URL : https://www.notion.so/7e4f8d2a34e14655b1958c5020c9f346

### 1. VSCode 설치
1. Meterial Theme : vscode 테마를 변경
2. Meterial Icon Theme : 파일확장자에 맞는 아이콘을 직관적으로 표현.
3. Pritter : 코드를 자동으로 직관적으로 변경

### 2. Html & Css 기본
- div 정렬 관련 float는 옛날 코드, react 등 js 등 호환가능한 정렬 css 
```
display:flex;
justify-contents: flex-start; //가로 왼쪽 정렬(기본)
justify-contents: center; //가로 가운데 정렬
justify-contents: flex-end; //가로 오른쪽 정렬
align-items:stretch; //세로 ?? 정렬(기본)
align-items:flex-start; //세로 위 정렬
align-items:flex-end; //세로 아래 정렬
align-items:center; //세로 중앙 정렬
align-items:baseline; //세로 베이스라인기준 정렬
```

- 가로 컨텐츠 배치 관련 안드로이드의 정렬 기준과 비슷한 기능이있다.
- 가로 컨텐츠 갯수가 총 3개일 때, flex-grow를 각각 1, 0, 1 한다면 50%, 0%, 50% 적용되게 된다.
> flex-grow : 1,2,3,....

- flex-grow 기능 적용중 비율이 축소될때 적용되는 css
- flex-shrink 기준으로 줄어들게 된다.
> flex-shrink : 1,2,3....
> 

- flex 전체 기능은 ? 
> flex : 1 1 50xp; //



### 3. Javascript



### 4. 개요

##### 비동기처리
```
fetch('http://www.sleepygloa.xyz')
.then(function(response){
    console.log('실행완료')
}).catch(function(error){
    console.log('에러발생')
}); 
console.log('나는바로 실행되지')
```

> 나는바로 실행되지

> 에러발생

