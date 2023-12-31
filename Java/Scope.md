# 6. 스코프, 형변환

변수는 선언한 위치에 따라 지역 변수, 멤버 변수 (클래스 변수, 인스턴스 변수)와 같이 분류된다.

## 지역 변수

특정 지역에서만 사용할 수 있는 변수이다. 즉, 본인의 코드 블록 안에서만 생존한다. 자신의 코드 블록 안에서는 얼마든지 접근할 수 잇지만 코드 블록을 벗어나면 제거되기 때문에 접근할 수 없다.

이렇게 변수의 접근 가능한 범위를 스코프라고 한다.

변수는 꼭 필요한 범위로 한정해서 사용하는 것이 좋다. 메모리를 효율적으로 사용하고 더 유지보수하기 좋은 코드를 만들 수 있다.

## 형변환

자바는 기본적으로 같은 타입에 값을 대입할 수 있다.

작은 범위에서 큰 범위로는 값을 넣을 수 있지만 큰 범위에서 작은 범위는 소수점 버림 또는 오버플로우의 문제가 발생할 수 있다.

### 자동 형변환

작은 범위 숫자 타입에서 큰 범위 숫자 타입으로의 대입은 개발자가 직접 형변환을 하지 않아도 자동으로 일어나기 때문에 **자동 형변환**, **묵시적 형변환**이라 한다.

### 명시적 형변환

큰 범위에서 작은 범위 대입은 명시적 형변환이 필요하다.

### 연산과 형변환

같은 타입은 같은 결과를 내지만 서로 다른 타입의 계산은 큰 범위로 자동 형변환이 일어난다.
