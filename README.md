# 202030408 김진석

⭐️ [Gitgub Push](#github-push-하기)

⭐️⭐️ [Github Pages 배포](#create-react-app-github-pages-배포)

1️⃣ [1주차](#1주차-3월-13일-강의-내용)

2️⃣ [2주차](#2주차-3월-20일-강의-내용)

# 1주차 (3월 13일 강의 내용)

## GitHub push 하기

GitHub

### 저장소 생성 및 연결

-   $ git init
-   $ git remote add origin [원격저장소 주소]
-   $ git branch -m master main

### 파일 업로드

-   $ git pull (또는 git pull origin main)
-   $ git add .
-   $ git commit -m "commit message"
-   $ git push (또는 git push origin main)

### 저장소가 이미 있는 경우

-   $ git pull origin main (필요시에만)
-   $ git add .
-   $ git commit -m "commit message"
-   $ git push origin main

### 추가적인 명령어

-   $ git remote -v
-   $ git remote rm origin
-   $ git branch
-   $ git config --global init.defaultBranch [브랜치 이름]
-   $ git status
-   $ git rm --cached -r .
-   $ git push --set-upstream origin main

### VIM

-   q : 나가기
-   wq : 저장 후 나가기
-   i = insert : 입력 모드
-   esc : 입력모드 종료

### Branch

-   git switch name name은 (바꾸려는 브런치 명)
-   git switch -c name name은 (브런치 생성과 변경)
-   git branch (브런치 목록 확인)
-   git branch -d name (브런치 삭제) \* D를 사용 시 강제 삭제...

### Rebase

-   git rebase -i HEAD~4 4은 (보여줄 커밋의 숫자를 의미함 더 많이 더 적게도 됌.)
-   git rebase --abort : Rebase 취소
-   git rebase --continue : Rebase 계속 (충돌)

### 충돌 발생 시 반복

-   충돌 하나 수정 -> git add . ->git rebase --continue

-   합칠 때 둘 중 아래(최신)있는 커밋을 pick -> s (squash)로 바꾸고 저장.

### 기타

-   git stash : 마지막 커밋 이후에 모든 변경사항 숨겨짐.
-   git stash pop : 마지막 나타나게 함.
-   git commit —amend 가장 최근의 커밋을 수정할 수 있음. 주로 커밋이름 바꿀 때 씀.

# 2주차 (3월 20일 강의 내용)

## 리액트의 장점

1. 빠른 업데이트와 랜더링 속도

    - 이 것을 가능하게 하는 것이 바로 버츄얼 돔(Virtual DOM)
    - DOM이란, XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제하게 돕는 인터페이스.
    - Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법
    - DOM은 동기식, Virtual DOM은 비동기식 방법으로 랜더링을 한다.
      동기식(Synchronous) VS 비동기식(Asynchronous)
      동기와 비동기를 나누는 가장 큰 차이점을 어떻게 실행 순서를 가지는 지에 있다.

    Syncronous 동기는 요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작을 실행하는 방식을,
    Asynchronous 비동기는 요청을 보낸 후 응답과 관계없이 다음 동작을 실행할 수 있는 방식을 의미한다.

2. 컴포넌트 기반 구조
   리액트의 모든 페이지는 컴포넌트로 구성됩니다.
   하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
   컴포넌트를 조합해서 웹사이트를 개발합니다.
   재사용성이 매우 뛰어납니다.

3. 재사용성
   반복적인 작업을 줄여주기 떄문에 생산성을 높여 줍니다.
   또한 유지보수가 용이합니다.
   재상요이 가능 하려면 해당 모듈의 의존성이 없어야 합니다.

4. 든든한 지원군
   메타에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있음.

5. 활방한 지식 공유 & 커뮤니티

6. 모바일 앱 개발가능
   리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼(cross-platfrom) 모바일 앱을 개발할 수 있음.

## 리액트의 단점

1. 방대한 학습량
   자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다

2. 높은 상태 관리 복잡도
   state,component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.

## create-react-app (CRA) 생성 방법

### creat-react-app 생성 방법

1. Node.js 설치 (맥의 경우 brew install node 윈도우의 경우 사이트가서 설치)
2. npm 설치 (npm install -g npm brew로 설치시 npm 자동 설치)
3. npm 버전 확인 npm -v
4. npx 설치 (터미널 -> npm install npx -g)
5. npx 버전 확인 npx -v
6. create-react-app 설치 (터미널 -> npx -> npx create-react-app 본인 디렉토리 이름)
7. test.app 생성하기

## create-react-app Github Pages 배포

1. Github와 로컬 프로젝트 연결하기

-   git remote add origin https://github.com/(개인 레포지토리 주소)
-   git push -u origin main

2. 레포지토리에서 Pages 설정하기

-   레포지토리의 Setting에 가서 메뉴 중에 Pages를 선택해 들어간다
-   branch 선택해서 Save - > Published될 준비가 되었다는 안내와 함께 URL

3. React 프로젝트에 gh-pages 설치하기

-   npm i gh-pages
-   package.json -> "homepage": "https://KoesJin.github.io/레포지토리 이름/"
    ![img1](https://github.com/KoesJin/react1-1/assets/160344942/1494c5d9-7b8d-4710-a874-868deba80f6d)
-   deploy": "gh-pages -d build" 를 만들어두면 앞으로 npm run deploy 를 실행하면 gh-pages -d build 를 실행하는 것과 같은 효과

4. gh-pages 배포하고 레포지토리에서 다시 설정하기

-   npm run deploy
    <img width="706" alt="img2" src="https://github.com/KoesJin/react1-1/assets/160344942/f9b8f58d-a1de-4342-a711-125c5c5f99e0">

-   시간 지나고 배포 완료 표시 나올 시 gh pages 이용가능
    <img width="709" alt="img3" src="https://github.com/KoesJin/react1-1/assets/160344942/54790c86-117a-468b-a253-826ea1e9dfdd">
