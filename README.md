# Post-Tracker
> 우체국 등기번호를 간편하고 빠르게 조회할 수 있는 서비스
- URL: ~~[http://ec2-43-202-130-1.ap-northeast-2.compute.amazonaws.com/](http://ec2-43-202-130-1.ap-northeast-2.compute.amazonaws.com/)~~ [배포 중단]

![홈 화면](https://github.com/ohoon/post-tracker/assets/46547443/f0e00ef6-2959-4b88-8f78-6bcacae9961b)

## 목차
- [들어가며](#들어가며)
    - [프로젝트 소개](#1-프로젝트-소개)
    - [프로젝트 기능](#2-프로젝트-기능)
    - [사용 기술](#3-사용-기술)
        - [백엔드](#3-1-백엔드)
        - [프론트엔드](#3-2-프론트엔드)
        - [인프라](#3-3-인프라)
    - [실행 화면](#4-실행-화면)

- [구조 및 설계](#구조-및-설계)
    - [패키지 구조](#1-패키지-구조)
    - [프로젝트 구조](#2-프로젝트-구조)
    - [CI/CD 구조](#3-CI/CD-구조)

- [마치며](#마치며)

## 들어가며
### 1. 프로젝트 소개

대용량 트래픽 처리가 요구되고 api 호출이 잦은 서비스이기 때문에 non-blocking하고 비동기적인 기술의 필요성을 느꼈습니다. <br/>
Spring에서 제공하는 non-blocking 비동기 기술인 Webflux와 WebClient, Reactvie Redux 등을 학습하고 사용한 프로젝트입니다.

### 2. 프로젝트 기능

- **등기 조회 -** 단건 조회, 범위 조회, 파일 조회(.csv)
- **조회 데이터 캐싱 -** 단시간 내의 같은 요청이 오면 캐시된 데이터를 대신 응답
- **csv 파일 내보내기 -** 조회 데이터를 csv 파일로 변환하여 다운로드
- **기타 -** CI/CD 파이프라인 구축 및 ec2 서버에 배포, actuator-prometheus-grafana 모니터링 시스템 구축

### 3. 사용 기술

#### 3-1 백엔드

##### 주요 프레임워크 / 라이브러리
- Java 17
- Spring Boot 3.1.3
- Spring Webflux
- Spring Data Redis Reactive
- Spring Actuator

##### Build Tool
- Gradle

#### 3-2 프론트엔드
- TypeScript
- React
- React-Redux
- React-Bootstrap
- Nginx

#### 3-3 인프라
- Nginx
- Docker
- Docker-compose
- Jenkins
- AWS EC2
- Prometheus
- Grafana

### 4. 실행 화면

  <details>
    <summary>단건 조회</summary>   

![image](https://github.com/ohoon/post-tracker/assets/46547443/92dc32cf-01ac-4e7a-83d5-5efd991c5152)
- 특정 등기번호를 입력하여 배송 상태를 확인할 수 있습니다.

  </details>

  <br/>   

  <details>
    <summary>범위 조회</summary>   

![image](https://github.com/ohoon/post-tracker/assets/46547443/10b70c4e-cbbd-4479-bcf9-b17a7089faaf)
- 등기 번호의 범위를 지정하여 조회할 수 있습니다.
- 서버 과부화 및 공격을 방지하기 위해서 한번에 조회할 수 있는 개수 제한이 존재합니다.

  </details>

  <br/>   

  <details>
    <summary>파일 조회</summary>   

![image](https://github.com/ohoon/post-tracker/assets/46547443/2a157355-9a32-4d81-94e5-c2fa66d6dad6)
- csv 파일의 데이터를 가져와서 원하는 열과 행을 선택하여 범위 형식으로 조회합니다.
- 범위 조회와 마찬가지로 한번에 조회할 수 있는 개수 제한이 존재합니다.

  </details>

  <br/>   
  
  <details>
    <summary>배송 진행상황</summary>   

![image](https://github.com/ohoon/post-tracker/assets/46547443/ffb77ce0-ec8c-407b-900a-a60b3cff6194)
- 하단에 위치한 조회 결과 박스를 클릭하면 상세 배달 정보를 확인할 수 있습니다.
- 갱신하기 버튼을 누르면 Back-end 서버에서 최신 배송 데이터를 읽어옵니다. 
- 삭제 버튼을 누르면 조회 결과 리스트에서 해당 등기번호가 삭제됩니다.

  </details>

  <br/>   

  <details>
    <summary>조회 리스트 관리</summary>   

![image](https://github.com/ohoon/post-tracker/assets/46547443/6b7e010e-ced8-430a-9155-5324fdc50ab0)
- 첫 번째 버튼을 누르면 현재 조회 리스트를 csv 파일로 변환하여 다운로드합니다.
- 두 번째 버튼을 누르면 현재 조회 리스트 전체를 최신으로 갱신합니다.
- 세 번째 버튼을 누르면 모든 조회 결과를 리스트에서 삭제합니다.

  </details>

  <br/>   

## 구조 및 설계

### 1. 패키지 구조

![package](https://github.com/ohoon/post-tracker/assets/46547443/11f6a0ad-d333-4282-83f2-260fbf8987b5)

### 2. 프로젝트 구조

![structure-project](https://github.com/ohoon/post-tracker/assets/46547443/d27724e5-6e2a-4bce-abeb-0cb82ee9306d)

### 3. CI/CD 구조

![structure-cicd](https://github.com/ohoon/post-tracker/assets/46547443/2b6b05aa-aebb-4408-b2ff-fe0dba034a77)

<br/>

## 마치며

<details>
  <summary>보완 사항</summary>

- 조회 결과별로 필터링
- 국제 우편 분류
- ~~자동 갱신 기능~~

</details>   

<br/>

<details>
  <summary>막혔지만 해결한 경험</summary>

- 등기 조회 서비스 특성상 api 호출이 잦아서 일반적인 web mvc로 대용량 트래픽 처리를 잘할 수 있을지 고민 <br/>
  -> non-blocking async 기술인 Spring Webflux 채택 <br/>
  -> api 통신 라이브러리도 비동기로 작동하는 WebClient 사용 <br/>

- 사용자가 악의적으로 대용량의 api 요청을 하면 서버에 마비가 올 것 같음 <br/>
  -> Redis에다가 조회 결과를 잠깐 캐싱해놨다가 응답해주면 보안적으로도 좋고 성능면에서도 빨라질 것 같단 생각이 듦 <br/>
  -> 너무 긴 시간동안 저장하면 배송 정보가 정확하지 않으니까 적절한 조절이 필요 <br/>

- 파일 조회를 할 때 사용자 파일을 서버에 업로드해서 처리해야하나? <br/>
  -> 간단히 등기 번호만 긁어오는 것이라 클라이언트 측에서 처리하는게 낫다고 판단했음 <br/>
  -> 개인정보 보안 상으로도 서버에 사용자 데이터를 가져오는 것은 좋지 않다고 생각이 듦 <br/>

- redis에 캐싱된 데이터가 없으면 switchIfEmpty로 배송 정보를 가져오는 api를 호출하는데 캐싱 유무에 상관없이 switchIfEmpty의 메서드가 호출되는 문제가 생김 <br/>
  -> publish, subcribe 같은 비동기 개념을 잘 이해 못해서 발생한 이슈였음 <br/>
  -> webflux는 redis에 캐싱된 데이터가 있는지 찾는동안 일단 switchIfEmpty의 메서드를 실행해서 발행자(Mono, Flux)를 받아옴 <br/>
  -> 캐싱 데이터가 있으면 Mono 안의 실질적인 api를 콜하고 없으면 api를 콜하지 않고 넘어가는 것이었음 <br/>

- Mono.doOnNext(redisTemplate.valueOps.set())에서 redisTemplate.valueOps.set()이 작동을 안하는 문제 <br/>
  -> doOnNext 안에 Mono나 Flux가 들어가면 스프링이 해당 발행자를 인식못해서 실제 set()이 되지 않는 것 같음 <br/>
  -> 대신 flatMap을 이용해서 redisTemplate.valueOps.set()을 해주면 정상적으로 캐시 데이터가 저장됨 <br/>

</details>  
