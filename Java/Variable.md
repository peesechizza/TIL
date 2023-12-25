# 2. 변수

**변수 선언**

`**int a**`

- 숫자 정수(integer) 를 보관할 수 있는 이름이 a라는 데이터 저장소인 변수를 만든다.
- 변수 만드는 것을 변수 선언이라 한다.

**변수에 값 대입**

`a = 10`

- 자바에서 `=` 은 오른쪽에 있는 값을 왼쪽에 저장한다는 뜻이다.
- 숫자를 보관할 수 있는 변수 a에 값 10을 저장한다. 이처럼 선언한 변수에 처음으로 값을 대입해서 저장하는 것을 변수 초기화라 한다.

**변수 값 읽기**

`System.out.println(a)`

- 변수에 저장되어 있는 값을 읽어서 사용하는 방법은 변수 이름을 적어주면 된다.

## 변수 선언과 초기화

### 변수 선언

변수를 선언하면 컴퓨터의 메모리 공간을 확보해서 그곳에 데이터를 저장할 수 있다. 그리고 변수의 이름을 통해서 해당 메모리 공간에 접근할 수 있다. 데이터를 보관할 수 있는 공간을 만들고, 그곳에 이름을 부여한다.

### 변수 초기화

변수를 선언하고, 선언한 변수에 처음으로 값을 저장하는 것을 변수 초기화라 한다.

## 변수 타입

**정수형**

- byte
- short
- int
- long

**실수형**

- float
- double

**기타**

- boolean
- char
- String

## 리터럴

코드에서 개발자가 직접 적은 고정된 값을 프로그래밍 용어로 리터럴(literal)이라 한다. 변수의 값은 변할 수 있지만 리터럴 자체는 직접 입력한 값이라 변하지 않는다.

## 변수 명명 규칙

**규칙**

- 변수 이름은 숫자로 시작할 수 없다. 그러나 숫자를 이름에 포함하는 것은 가능하다.
- 공백이 들어갈 수 없다.
- 예약어를 변수 이름으로 사용할 수 없다.
- 변수 이름에는 영문자(`a-z`, `A-Z`), 숫자 (`0-9`), `$`, `_` 만 사용할 수 있다.

**관례**

- camel case; 낙타 표기법
  - 변수 이름은 소문자로 시작하는 것이 일반적이다. 여러 단어로 이루어진 변수 이름의 경우, 첫 번째 단어는 소문자로 시작하고 그 이후의 각 단어는 대문자로 시작한다.

## 자바 언어의 관례

**클래스는 대문자로 시작, 나머지는 소문자로 시작**

- 모두 낙타 표기법을 적용하면 된다.
- 예외
  - 상수는 모두 대문자를 사용하고 언더바로 구분한다. (`USER_LIMIT`)
  - 패키지는 모두 소문자를 사용한다. (`org.spring.boot`)
- 변수 이름은 의미있고, 그 용도를 명확하게 설명해야 한다.

## 문제

문제 1. 다음 코드에 반복해서 나오는 숫자 4 , 3 을 다른 숫자로 한번에 변경할 수 있도록 다음을 변수 num1 , num2 를 사용하도록 변경해보세요.

```java
package variable.ex;
public class VarEx1Question {
	 public static void main(String[] args) {
		 System.out.println(4 + 3);
		 System.out.println(4 - 3);
		 System.out.println(4 * 3);
 }
}
```

풀이 1.

```java
package variable.ex;
public class VarEx1Question {
    public static void main(String[]args) {
        int num1 = 4;
        int num2 = 3;
        System.out.println(num1 + num2);
        System.out.println(num1 - num2);
        System.out.println(num1 * num2);
    }
}
```

문제 2. 다음과 같은 작업을 수행하는 프로그램을 작성하세요. 클래스 이름은 VarEx2 라고 적어주세요.

1. 변수 num1 을 선언하고, 이에 10을 할당하세요.
2. 변수 num2 를 선언하고, 이에 20을 할당하세요.
3. 두 변수의 합을 구하고, 그 결과를 새로운 변수 sum 에 저장하세요.
4. sum 변수의 값을 출력하세요.

풀이 2.

```java
package variable.ex;

public class VarEx2 {
    public static void main(String[]args) {
        int num1 = 10;
        int num2 = 20;
        int sum = num1 + num2;

        System.out.println(sum);
    }
}

```

문제 3. - long, boolean 데이터 타입
클래스 이름: VarEx3
long 타입의 변수를 선언하고, 그 변수를 10000000000(백억)으로 초기화한 후 출력하는 프로그램을 작성하세요.
boolean 타입의 변수를 선언하고, 그 변수를 true 로 초기화한 후 출력하는 프로그램을 작성하세요.

풀이 3.

```java
package variable.ex;

public class VarEx3 {
    public static void main(String[]args) {
        long longVar = 10000000000L;
        boolean booVar = true;

        System.out.println(longVar);
        System.out.println(booVar);

    }

}

```
