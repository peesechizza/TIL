# 5. 반복문

반복문은 특정 코드를 반복해서 실행할 때 사용한다. 자바는 `while`, `do-while`, `for` 3가지 종류의 반복문을 제공한다.

## while

while문은 조건에 따라 코드를 반복해서 실행할 때 사용한다.

```java
while (조건식) {
	// 코드
}
```

- 조건식을 확인하여 참이면 코드 블럭을 실행하고, 거짓이면 while문을 벗어난다.
- 조건식이 참이면 코드 블럭을 실행하고 끝나면 다시 조건식 검사로 돌아가서 조건식을 검사한다. (무한 반복)

## do-while

`do-while` 문은 `while` 과 비슷하지만, 조건에 상관없이 무조건 한 번은 코드를 실행한다.

```java
do {
	// 코드
} while (조건식);
```

### break, continue

`break`와 `contninue`는 반복문에서 사용할 수 있는 키워드이다.

break는 반복문을 즉시 종료하고 나간다. continue는 반복문의 나머지 부분을 건너뛰고 다음 반복으로 진행하는데 사용된다.

```java
while (조건식) {
	code1;
	break;
	code2;
}
```

break를 만나면 코드2가 실행되지 않고 while문이 종료된다.

```java
while (조건식) {
	code1;
	continue;
	code2;
}
```

continue를 만나면 코드2가 실행되지 않고 다시 조건식으로 이동한다.

## for

코드를 반복 실행하는 역할을 한다. for 문은 주로 반복 횟수가 정해져 있을 때 사용한다.

```java
for (초기식; 조건식; 증감식) {
	// code
}
```

1. 초기식이 실행된다. 주로 반복 횟수와 관련된 변수를 선언하고 초기화 할 때 사용한다. 초기식은 딱 1번 된다.
2. 조건식을 검증한다. 참이면 코드를 실행하고, 거짓이면 for 문을 빠져나간다.
3. 코드를 실행한다.
4. 코드가 종료되면 증감식을 실행한다. 주로 초기식에 넣은 반복 횟수와 관련된 변수의 값을 증가할 때 사용한다.
5. 다시 조건식부터 시작한다.

## 중첩 반복문

반복문은 내부에 또 반복문을 만들 수 있다. `for`, `while` 모두 가능하다.

## 문제

**문제**. 자연수 출력
처음 10개의 자연수를 출력하는 프로그램을 작성해 보세요. 이때, count 라는 변수를 사용해야 합니다.
while문, for문 2가지 버전의 정답을 만들어야 합니다.

**출력 예시**.

```java
1
2
3
4
5
6
7
8
9
10
```

**풀이**. while

```java
package loop.ex;

public class LoopWhileEx1 {
    public static void main(String[]args) {
        int count = 1;

        while ( count <= 10 ) {
            System.out.println(count);
            count++;
        }
    }
}

```

**풀이. for**

```java
package loop.ex;

public class LoopForEx1 {
    public static void main(String[]args) {
        int count = 10;

        for (int i = 1; i <= count; i++) {
            System.out.println(i);
        }
    }
}

```

**문제**. 짝수 출력

반복문을 사용하여 처음 10개의 짝수를 출력하는 프로그램을 작성해 보세요. 이때, num 이라는 변수를 사용하여 수를 표현해야 합니다.
while문, for문 2가지 버전의 정답을 만들어야 합니다.

**출력 예시**.

```java
2
4
6
8
10
12
14
16
18
20
```

**풀이. while**

```java
package loop.ex;

public class LoopWhileEx2 {
    public static void main(String[] args) {
        int num = 1;
        int count = 1;

        while (count <= 10) {
            if ( num % 2 == 0 ) {
                System.out.println(num);
                count++;
            }
            num++;

        }
    }
}
```

**풀이. for**

```java
package loop.ex;

public class LoopForEx2 {
    public static void main(String[]args) {
        int num = 2;

        for (int i = 1; i <= 10; i++) {
            System.out.println(num);
            num += 2;
        }
    }
}

```

**문제**. 누적 합 계산

반복문을 사용하여 1부터 max 까지의 합을 계산하고 출력하는 프로그램을 작성해 보세요. 이때, sum 이라는 변수를 사용하여 누적 합을 표현하고, i 라는 변수를 사용하여 카운트(1부터 max까지 증가하는 변수)를 수행해야 합니다.
while문, for문 2가지 버전의 정답을 만들어야 합니다.

**출력 예시**.

```java
//max=1
1
//max=2
3
//max=3
6
//max=100
5050
```

**풀이. while**

```java
package loop.ex;

public class LoopWhileEx3 {
    public static void main(String[]args) {
        int i = 1;
        int sum = 0;
        int max = 100;

        while ( i <= max ) {
            sum += i;
            i++;
        }

        System.out.println("sum = " + sum);
    }
}

```

**풀이. for**

```java
package loop.ex;

public class LoopForEx3 {
    public static void main(String[]args) {
        int sum = 0;
        int max = 100;

        for (int i = 1; i <= max; i++) {
            sum += i;
        }
        System.out.println(sum);
    }
}

```

**문제.** 구구단 출력

중첩 for문을 사용해서 구구단을 완성해라.

**출력 형태.**

```java
1 * 1 = 1
1 * 2 = 2
...
9 * 9 = 81
```

**풀이. for**

```java
package loop.ex;

public class LoopWhileEx4 {
    public static void main(String[]args) {

        for (int i = 1; i < 10; i++) {
            for (int j = 1; j < 10; j++) {
                int result = i * j;
                System.out.printf("%d * %d = %d\n", i, j, result);

            }
        }
    }
}

```

**문제.** 피라미드 출력
int rows 를 선언해라.
이 수만큼 다음과 같은 피라미드를 출력하면 된다.
참고: println() 은 출력후 다음 라인으로 넘어간다. 라인을 넘기지 않고 출력하려면 print() 를 사용하면 된다.
예) System.out.print("\*")

**출력 형태.**

```java
 //rows = 2
*
**
//rows = 5
*
**
***
****
*****
```

**풀이.**

```java
package loop.ex;

public class LoopNestedForEx5 {
    public static void main(String[]args) {
        int rows = 5;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
                if ( i == j ) System.out.println();
            }
        }
    }
}

```

## 정리

### for문

**장점**

1. 초기화, 조건 체크, 반복 후의 작업을 한 줄에서 처리할 수 있어 편리하다.
2. 정해진 횟수만큼의 반복을 수행하는 경우에 사용하기 적합하다.
3. 루프 변수의 범위가 for 루프 블록에 제한되므로, 다른 곳에서 이 변수를 실수로 변경할 가능성이 적다.

**단점**

1. 루프의 조건이 루프 내부에서 변경되는 경우, for 루프는 관리하기 어렵다.
2. 복잡한 조건을 가진 반복문을 작성하기에는 while문이 더 적합할 수 있다.

### while문

**장점**

1. 루프의 조건이 루프 내부에서 변경되는 경우 while 루프는 이를 관리하기 쉽다.
2. for 루프보다 더 복잡한 조건과 시나리오에 적합하다.
3. 조건이 충족되는 동안 계속해서 루프를 실행하며, 종료 시점을 명확하게 알 수 없는 경우에 유용하다.

**단점**

1. 초기화, 조건 체크, 반복 후의 작업이 분산되어 있어 코드를 이해하거나 작성하기 어려울 수 있다.
2. 루프 변수가 while 블록 바깥에서도 접근 가능하마ㅡ로, 이 변수를 실수로 변경하는 상황이 발생할 수 있다.
