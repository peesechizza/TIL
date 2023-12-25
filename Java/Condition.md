# 4. 조건문

특정 조건에 따라서 다른 코드를 실행하는 것을 조건문이라 한다. 조건문에는 `if`문, `switch`문이 있다.

## if 문

### if

if문은 특정 조건이 참인지 확인하고, 그 조건이 참일 경우 특정 코드 블록을 실행한다.

```java
if (condition) {
	// 참일 경우 실행되는 코드
}
```

### else

`if`문에서 만족하는 조건이 없을 때 실행하는 코드를 제공한다. else는 생략할 수 있다.

```java
if (condition) {
	// 참일 경우 실행되는 코드
} else {
	// 만족하는 조건이 없을 때 실행되는 코드
}
```

### else if

`if` 문의 조건이 거짓일 때 다음 조건을 검사한다.

```java
if (condition1) {
	// condition1이 참일 경우 실행되는 코드
} else if (condition2) {
	// condition2이 참일 경우 실행되는 코드
} else {
	// 만족하는 조건이 없을 때 실행되는 코드
}
```

### if 문과 else if 문

`if` 문에 `else if` 를 함께 사용하는 것은 서로 연관된 조건일 때 사용한다. 서로 관련이 없는 독립 조건이면 `else if`를 사용하지 않고 `if` 문을 각각 따로 사용해야 한다.

```java
// if-else 사용 - 연관된 조건
if (condition1) {
	// 작업 1 수행
} else if (condition2) {
	// 작업 2 수행
}

// if 각각 사용 - 독립 조건
if (condition1) {
	// 작업 1 수행
}
if (condition2) {
	// 작업 2 수행
}
```

### if 문 중괄호 생략

`if` 문 다음에 실행할 명령이 하나만 있을 경우에는 중괄호를 생략할 수 있다. `else if`, `else`도 마찬가지이다.

하지만 중괄호를 사용하면 조건문의 범위가 명확하게 표시되므로 코드의 흐름을 더 쉽게 이해할 수 있어 **가독성**이 높아진다. 그리고, 나중에 코드를 수정할 때 오류를 덜 발생시킬 수 있어 **유지보수성**이 좋아진다..

## 문제

문제.

온라인 쇼핑몰의 할인 시스템을 개발해야 한다. 한 사용자가 어떤 상품을 구매할 때, 다양한 할인 조건에 따라 총 할인 금액이 달라질 수 있다.

각각의 할인 조건은 다음과 같다.

- 아이템 가격이 10000원 이상일 때, 1000원 할인
- 나이가 10살 이하일 때 1000원 할인

이 할인 시스템의 핵심은 한 사용자가 동시에 여러 할인을 받을 수 있다는 점이다.
예를 들어, 10000원짜리 아이템을 구매할 때 1000원 할인을 받고, 동시에 나이가 10살 이하이면 추가로 1000원 더 할인을 받는다. 그래서 총 2000원 까지 할인을 받을 수 있다.

풀이.

```java
package cond.ex;

public class ConditionEx1 {
    public static void main(String[]args) {
        int itemPrice = 10000;
        int age = 10;
        int discountPrice = 0;

        if (itemPrice >= 10000) {
            discountPrice += 1000;
        }

        if (age <= 10) {
            discountPrice += 1000;
        }

        System.out.println("discountPrice = " + discountPrice);
    }
}
```

만약 여기서 `else if`문을 쓰면 첫 번째로 충족하는 조건만 할인이 적용되고 나머지는 무시된다.

## switch

`switch` 문은 `if` 문을 조금 더 편리하게 사용할 수 있는 기능이다. if 문은 비교 연산자를 사용할 수 있지만, switch 문은 단순히 값이 같은지만 비교할 수 있다.

```java
switch (조건식) {

	case value1:
	// 조건식의 결과 값이 value1일 때 실행되는 코드
		break;

	case value2:
	// 조건식의 결과 값이 value2일 때 실행되는 코드
		break;

	default:
	// 조건식의 결과 값이 위의 어떤 값에도 해당하지 않을 때 실행되는 코드
}
```

- 조건식의 결과 값이 어떤 case의 값과 일치하면 해당 `case` 코드를 실행한다.
- `break` 문은 현재 실행 중인 코드를 끝내고 switch 문을 빠져나가게 하는 역할을 한다.
- `break` 문이 없으면, 일치하는 case 이후의 모든 `case` 코드들이 순서대로 실행된다.
- `default` 는 조건식의 결과값이 모든 case 의 값과 일치하지 않을 때 실행된다. if 문의 else 와 같다. default 구문은 선택이다.

## 자바 14 새로운 switch 문

기존 switch 문과의 차이는 `→` 를 사용하고 **선택된 데이터를 반환**할 수 있다.

```java
int grade = 2;

int coupon = switch (grade) {
	case 1 -> 1000;
	case 2 -> 2000;
	case 3 -> 3000;
	default -> 500;
}

System.out.println(coupon);
```

## 삼항 연산자

참과 거짓에 따라 특정 값을 구하는 경우 삼항 연산자 또는 조건 연산자라고 불리는 `? :` 연산자를 사용할 수 있다.

`(조건) ? 참_표현식 : 거짓_표현식`

- 조건에 만족하면 `참_표현식` 이 실행되고, 조건에 만족하지 않으면 `거짓_표현식` 이 실행된다.

## 문제

문제 1. 학생의 점수를 기반으로 학점을 출력하는 자바 프로그램을 작성하자. 다음과 같은 기준을 따른다.

- 90점 이상: "A"
- 80점 이상 90점 미만: "B"
- 70점 이상 80점 미만: "C"
- 60점 이상 70점 미만: "D"
- 60점 미만: "F"

점수는 변수( int score )로 지정하고, 해당 변수를 기반으로 학점을 출력하자.

풀이 1.

```java
package cond.ex;

public class ConditionEx2 {
    public static void main(String[]args) {
        int score = 99;
        String grade;

        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else if (score >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        System.out.println("grade = " + grade);

    }
}

```

문제 2. "거리에 따른 운송 수단 선택하기"

주어진 거리에 따라 가장 적합한 운송 수단을 선택하는 프로그램을 작성하자. 다음과 같은 기준을 따른다.

- 거리가 1km 이하이면: "도보"
- 거리가 10km 이하이면: "자전거"
- 거리가 100km 이하이면: "자동차"
- 거리가 100km 초과이면: "비행기"

거리는 변수( int distance )로 지정하고, 해당 변수를 기반으로 운송 수단을 출력하자.

풀이 2.

```java
package cond.ex;

public class ConditionEx3 {
    public static void main(String[]args) {

        int distance = 5;

        if (distance > 100) {
            System.out.println("비행기");
        } else if (distance > 10) {
            System.out.println("자동차");
        } else if (distance > 1) {
            System.out.println("자전거");
        } else {
            System.out.println("도보");

        }
    }
}

```

문제. "환율 계산하기"
특정 금액을 미국 달러에서 한국 원으로 변환하는 프로그램을 작성하자. 환율은 1달러당 1300원이라고 가정하자. 다음과 같은 기준을 따른다.

- 달러가 0미만이면: "잘못된 금액입니다."
- 달러가 0일 때: "환전할 금액이 없습니다."
- 달러가 0 초과일 때: "환전 금액은 (계산된 원화 금액)원입니다."

금액은 변수( int dollar )로 지정하고, 해당 변수를 기반으로 한국 원으로의 환전 금액을 출력하자.

출력 예시.

```java
dollar: -5
출력: 잘못된 금액입니다.
dollar: 0
출력: 환전할 금액이 없습니다.
dollar: 10
출력: 환전 금액은 13000원입니다.
```

풀이.

```java
package cond.ex;

public class ConditionEx4 {
    public static void main(String[]args) {
        int dollar = 10;
        int won = 1300;
        int exchange = dollar * won;

        if (dollar < 0) {
            System.out.println("잘못된 금액입니다.");
        } else if (dollar == 0) {
            System.out.println("환전할 금액이 없습니다.");
        } else {
            System.out.printf("환전 금액은 %d원입니다.", exchange);
        }

    }
}

```

문제. "평점에 따른 영화 추천하기"

요청한 평점 이상의 영화를 찾아서 추천하는 프로그램을 작성하자.

- 어바웃타임 - 평점9
- 토이 스토리 - 평점8
- 고질라 - 평점7

평점 변수는 double rating 을 사용하세요. if 문을 활용해서 문제를 풀자.

출력 예시.

```java
• rating: 9
• 출력:
• '어바웃타임'을 추천합니다.
• rating: 8
• 출력:
• '어바웃타임'을 추천합니다.
• '토이 스토리'를 추천합니다.
• rating: 7.1
• 출력:
• '어바웃타임'을 추천합니다.
• '토이 스토리'를 추천합니다.
• rating: 7
• 출력:
• '어바웃타임'을 추천합니다.
• '토이 스토리'를 추천합니다.
• '고질라'를 추천합니다.
```

풀이.

```java
package cond.ex;

public class ConditionEx5 {
    public static void main(String[]args) {
        double rating = 7;
        String movie;

        if (rating <= 9) {
            movie = "어바웃타임";
            System.out.printf("'%s'을 추천합니다.\n", movie);
        }
        if (rating <= 8){
            movie = "토이 스토리";
            System.out.printf("'%s'을 추천합니다.\n", movie);
        }
        if (rating <= 7){
            movie = "고질라";
            System.out.printf("'%s'을 추천합니다.\n", movie);
        }
    }
}

```

문제. "학점에 따른 성취도 출력하기"

String grade 라는 문자열을 만들고, 학점에 따라 성취도를 출력하는 프로그램을 작성하자. 각 학점은 다음과 같은 성취도를 나타낸다.

- "A": "탁월한 성과입니다!"
- "B": "좋은 성과입니다!"
- "C": "준수한 성과입니다!"
- "D": "향상이 필요합니다."
- "F": "불합격입니다."
- 나머지: "잘못된 학점입니다."

switch 문을 사용해서 문제를 해결하자

출력 예시.

```java
grade: "B"
출력: "좋은 성과입니다!"
grade: "A"
출력: "탁월한 성과입니다!"
grade: "F"
출력: "불합격입니다."
```

풀이.

```java
package cond.ex;

public class ConditionEx6 {
    public static void main(String[]args) {
        String grade = "F";

        switch (grade) {
            case "A":
                System.out.println("탁원한 성과입니다!");
                break;
            case "B":
                System.out.println("좋은 성과입니다!");
                break;
            case "C":
                System.out.println("준수한 성과입니다!");
                break;
            case "D":
                System.out.println("향상이 필요합니다.");
                break;
            case "F":
                System.out.println("불합격입니다.");
                break;
            default:
                System.out.println("잘못된 학점입니다.");
        }

    }
}

```

문제. 더 큰 숫자 찾기

여러분은 두 개의 정수 변수 a 와 b 를 가지고 있다. a 의 값은 10 이고, b 의 값은 20 이다. 삼항 연산자를 사용하여 두 숫자 중 더 큰 숫자를 출력하는 코드를 작성하자.
출력 예시 .

```java
더 큰 숫자는 20입니다.
```

풀이.

```java
package cond.ex;

public class ConditionEx7 {
    public static void main(String[]args) {
        int a = 10;
        int b = 20;

        System.out.printf("더 큰 숫자는 %d입니다.", a > b ? a : b);
    }
}

```

문제. 홀수 짝수 찾기

정수 x 가 주어지면 x 가 짝수이면 "짝수"를, x 가 홀수이면 "홀수"를 출력하는 프로그램을 작성하자
삼항 연산자를 사용해야 한다.

참고로 x % 2 를 사용하면 홀수, 짝수를 쉽게 계산할 수 있다.
출력 예시.

```java
x: 2
출력: x = 2, 짝수
x: 3
출력: x = 3, 홀수
```

풀이.

```java
package cond.ex;

public class ConditionEx8 {
    public static void main(String[]args) {
//        int x = 1;
        int x = 2;

        String result = ( x % 2 == 0 ) ? "짝수" : "홀수";

        System.out.println("x = " + x + ", " + result);

    }
}

```
