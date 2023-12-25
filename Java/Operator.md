# 3. 연산자

## 산술 연산자

주로 숫자를 계산하는데 사용된다.

+, -, \*, /, %

### 0으로 나누기는 오류 발생

### 문자열 더하기

문자열에 `+` 연산자를 사용하여 연결할 수 있다.

### 연산자 우선순위

괄호 `()` 가 우선순위가 가장 높고, 대입 연산자 `=` 가 가장 낮다.

1. 괄호 `()`
2. 단항 연산자 (예: `++` , `--` , `!` , `~` , `new` , `(type)` )
3. 산술 연산자 ( `*` , `/` , `%` 우선, 그 다음에 `+` , `-` )
4. Shift 연산자 ( `<<` , `>>` , `>>>` )
5. 비교 연산자 ( `<` , `<=` , `>` , `>=` , `instanceof` )
6. 등식 연산자 ( `==` , `!=` )
7. 비트 연산자 ( `&` , `^` , `|` )
8. 논리 연산자 ( `&&` , `||` )
9. 삼항 연산자 ( `? :` )
10. 대입 연산자 ( `=` , `+=` , `-=` , `*=` , `/=` , `%=` 등등)

## 증감 연산자

증가 및 감소 연산자를 증감 연산자라 한다. `++` 와 `—` 로 표현되며 변수의 값을 1만큼 증가시키거나 감소시킨다.

### 전위, 후위 증감 연산자

증감 연산자는 피연산자 앞에 두거나 뒤에 둘 수 있으며, 연산자의 위치에 따라 연산이 수행되는 시점이 달라진다.

- `++a` : 전위(prefix) 연산자라 한다. 증감 연산이 먼저 수행된 후 나머지 연산이 수행된다.
- `a++` : 후위(postfix) 연산자라 한다. 다른 연산이 먼저 수행된 후 증감 연산이 수행된다.

## 비교 연산자

비교 연산자는 두 값을 비교하는데 사용되며, 비교 연산자는 주로 뒤에서 설명하는 조건문과 함께 사용하낟.

비교 연산자를 사용하면 참 또는 거짓이라는 결과가 나온다.

- `==` : 동등성 (equal to)
- `!=` : 불일치 (not equal to)
- `>` : 크다 (greater than)
- `<` : 작다 (less than)
- `>=` : 크거나 같다 (greater than or equal to)
- `<=` : 작거나 같다 (less than or equal to)

### 문자열 비교

문자열이 같은지 비교할 때는 `==` 이 아니라 `.eqauls()` 메서드를 사용해야 한다.

## 논리 연산자

논리 연산자는 `boolean` 형인 `true` , `false` 를 비교하는데 사용한다.

- `&&` (그리고) : 두 피연산자가 모두 참이면 참을 반환, 둘중 하나라도 거짓이면 거짓을 반환
- `||` (또는) : 두 피연산자 중 하나라도 참이면 참을 반환, 둘다 거짓이면 거짓을 반환
- `!` (부정) : 피연산자의 논리적 부정을 반환. 즉, 참이면 거짓을, 거짓이면 참을 반환

## 대입 연산자

대입 연산자( = )는 값을 변수에 할당하는 연산자다. 이 연산자를 사용하면 변수에 값을 할당할 수 있다.

### 축약(복합) 대입 연산자

산술 연산자와 대입 연산자를 한번에 축약해서 사용할 수 있는데, 이것을 축약(복합) 대입 연산자라 한다.
연산자 종류: `+=` , `-=` , `*=` , `/=` , `%=`

## 문제

문제 1. 다음과 같은 작업을 수행하는 프로그램을 작성하세요
클래스 이름은 OperationEx1 라고 적어주세요.

1. num1 , num2 , num3 라는 이름의 세 개의 int 변수를 선언하고, 각각 10, 20, 30으로 초기화하세요.
2. 세 변수의 합을 계산하고, 그 결과를 sum 이라는 이름의 int 변수에 저장하세요.
3. 세 변수의 평균을 계산하고, 그 결과를 average 라는 이름의 int 변수에 저장하세요. 평균 계산 시 소수점 이
   하의 결과는 버림하세요.
4. sum 과 average 변수의 값을 출력하세요.
   참고
   자바에서 int 끼리의 나눗셈은 자동으로 소수점 이하를 버린다.

풀이 1.

```java
package operator.ex;

public class OperationEx1 {
    public static void main(String[]args) {
        int num1 = 10;
        int num2 = 20;
        int num3 = 30;

        int sum = num1 + num2 + num3;
        int average = sum / 3;

        System.out.println("sum = " + sum);
        System.out.println("average = " + average);

    }
}

```

문제 2. double과 평균
클래스 이름: OperationEx2

```java
// 다음 double 변수들을 선언하고 그 합과 평균을 출력하는 프로그램을 작성하세요.
double val1 = 1.5;
double val2 = 2.5;
double val3 = 3.5;
```

풀이 2.

```java
package operator.ex;

public class OperationEx2 {
    public static void main(String[] args) {

        double val1 = 1.5;
        double val2 = 2.5;
        double val3 = 3.5;

        double sum = val1 + val2 + val3;
        double average = sum / 3;

        System.out.println("sum = " + sum);
        System.out.println("average = " + average);
    }

}
```

문제3. 합격 범위

클래스 이름: OperationEx3
int 형 변수 score 를 선언하세요.
score 가 80점 이상이고, 100점 이하이면 true 를 출력하고, 아니면 false 를 출력하세요.

풀이3.

```java
package operator.ex;

public class OperationEx3 {
    public static void main(String[]args) {
        int score = 80;
        boolean result = score >= 80 && score <= 100;
        System.out.println("result = " + result);

    }
}

```
