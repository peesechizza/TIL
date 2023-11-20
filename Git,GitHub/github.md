# 1. Git과 버전 관리

## 버전 관리

### 버전 관리 시스템 : Git

컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템이다.

### Git을 쓰기 위해 필요한 것

1. 개인 컴퓨터
2. USB
3. 회사 서버
4. 클라우드 (GitHub, BitBucket, .. )

### Git 을 사용하는 두가지 방법

1. CLI
2. GUI

## Git, GitHub 환경 설정하기

### Git, Git Bash 설치 (CLI 환경 구축)

1. 명령 프롬프트 / Terminal 에서 git을 입력해보고 이미 설치되어있는지 확인

   `git` 입력

2. 명령어에 대한 안내가 나오지 않으면 새로 설치

# 2. Git & GitHub 시작하기 feat.CLI

## Git 최초 설정

1. git 전역 사용자 설정 (GitHub의 닉네임과 이메일 입력)

```bash
git config —global user.name “이름”
git config —global user.email "email"
```

2. 설정 후 확인 하기

```bash
git config --global user.name
git config --global user.email
```

## Git 초기화와 로컬 저장소

1. `git init`
   - 원하는 폴더에서 Git 초기화를 한 후 사용 가능
   - Git 초기화를 하면 .git(로컬 저장소)이라는 숨겨진 폴더가 만들어진다.
   - 로컬 저장소에 내가 만든 버전 정보, 원격 저장소 주소 등이 저장된다.
   - 원격 저장소에서 내 컴퓨터로 코드를 받아오면 로컬 저장소가 자동으로 생긴다.
   - 한 폴더에 하나의 로컬 저장소만 유지해야 한다.
2. `git add 파일명`
   - 원하는 파일 선택
3. `git commit -m "프로젝트 설명 파일 추가"`
   - commit : 하나의 버전
4. `git log`
   - 생성한 커밋 확인
5. `git remote add origin “레파지토리 주소”`
6. `git push origin main`

### 원격 저장소, 로컬 저장소

### 원격 저장소를 내 컴퓨터에 받아오기

**폴더 생성 후 GitHub의 저장소 받아오기**

- `git clone “레파지토리 주소” .`
  - `.` 을 찍지 않으면 폴더에 새 폴더가 생성됨, 현재 폴더라는 뜻

### 원격 저장소의 변경사항 내 컴퓨터에 받아오기

- `git pull origin main`

### 협업하기

- 레파지토리 Settings → Manage access → Invite a collaborator

# 3. Git & GitHub 다지기 feat.HUI

# 4. 실무 사례와
