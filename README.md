# Angular Exercise

> 타운팸을 위한 Angular 연습 레포지토리


## 시작하기

### 1. 요구사항

* [node.js](https://nodejs.org) LTS 버전 (8.11.x 버전을 권장합니다)
* [yarn](https://yarnpkg.com/) >= 1.5


### 2. 설치하기

```bash
$ yarn install
```

또한 전역으로 ``@angular/cli``를 설치해주세요.

```bash
$ yarn global add @angular/cli
```


## 구현 목표

### 1. 만들고자 하는 것

본 프로젝트는 간단한 **Todo 앱**을 만듭니다.

설계된 기능은 다음과 같습니다.


* Todo를 저장소에서 불러올 수 있다.
* Todo를 추가할 수 있다.
* Todo를 삭제할 수 있다.
* Todo를 완료할 수 있다. 


소스코드 디렉토리에 구현이 덜 되어 있는 파일들이 존재합니다.

프로젝트 참여자는 구현을 마무리하여 앱을 완성시키는 것을 목표로 합니다.

구현된 화면을 보고 싶은 경우 개발 서버를 구동하십시오. 소스 코드를 변경하면 자동으로 앱이 빌드됩니다.


```bash
$ yarn start
```


### 2. 테스트를 통과시키십시오

사전에 준비된 테스트 케이스가 있습니다. 해당 테스트 케이스를 통과시켜 구현하신 앱이 잘 작동됨을 보장하십시오!

다음 스크립트 명령어로 테스트를 실행할 수 있습니다.

```bash
$ yarn test
```


### 추가사항

만약 Angular에 대해 익숙해졌다 싶으시면 추가 요구사항을 구현하셔도 됩니다.


* 완료된 Todo 항목만 볼 수 있도록 리스트를 필터링합니다.
* 완료된 Todo 항목을 모두 지웁니다.


그리고 현재 앱에 CSS가 전무하기 때문에 상당히 안예쁩니다. Stylesheet를 추가해서 예쁘게 꾸며보세요!



## 참조

* [Angular 공식 문서](https://angular.io/docs)
* [RxJS API 문서](https://rxjs-dev.firebaseapp.com/)
