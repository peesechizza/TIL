# [181952. 문자열 출력하기](https://github.com/peesechizza/Algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/unrated/181952.%E2%80%85%EB%AC%B8%EC%9E%90%EC%97%B4%E2%80%85%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0)

## 문제

[[문제 링크]](https://school.programmers.co.kr/learn/courses/30/lessons/181952)

## 풀이

**Scanner 사용**

```java
import java.util.Scanner;

public class Solution {
     public static void main(String[] args) {
         Scanner sc = new Scanner(System.in);
         String a = sc.next();

         System.out.println(a);
     }
}
```

**BufferedReader 사용**

```java
import java.io.*;

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();

        System.out.println(str);

    }
}
```

## 💡

**BufferedReader 사용법**

1. **import 추가**

   BufferedReader는 객체를 생성할 때 생성자의 입력으로 InputStreamReader 객체가 필요하다.

   ```java
   import java.io.BufferedReader;
   import java.io.IOException;
   import java.io.InputStreamReader;
   ```

2. **메인 함수에 예외발생 처리**

   ```java
   public static void main(String[] args) throws IOException {

   }
   ```

3. **선언**

   BufferedReader의 readLine 메서드를 이용하면 사용자가 입력한 문자열을 읽을 수 있다.

   ```java
   public static void main(String[] args) throws IOException {
   	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
   	String str = br.readLine();

   }
   ```

**StringTokenizer**

문자열을 구분자를 이용하여 분리할 때 사용할 수 있다. BufferedReader로 입력을 받을 때 String을 읽는다. 스페이스 기준이나 컴마 또는 공백으로 문자열을 분리하거나, 특정 문자에 따라 문자열을 나누고 싶을 때 `StringTokenizer`를 사용한다.

- **StringTokenizer 생성자**

  1. `StringTokenizer(String str)`

     문자열을 기본 구분자 (띄어쓰기) 를 기준으로 나누는 StringTokenizer 생성

  2. `StringTokenizer(String str, String delim)`

     문자열을 지정된 구분자로 나누는 StringTokenizer 생성

  3. `StringTokenizer(String str, String delim, boolean returnDelims)`

     문자열을 지정된 구분자로 나누는 StringTokenizer 생성, returnDelims 의 값을 true로 하면 구분자로 토큰으로 간주된다.

- **StringTokenizer 메서드**
  - `nextToken()` : 객체에서 다음 토큰을 반환 - String
  - `nextToken(String delim)` : delim 기준으로 다음 토큰을 반환 - String
  - `countTokens()` : 전체 토큰의 수를 반환 - int
  - `hasMoreTokens()` : 토큰이 남아있는지 알려줌 - boolean
  - `hasMoreElements()` : hasMoreToken()와 동일한데 엘리먼트보다 토큰으로 메서드를 주로 사용 - boolen
  - `nextElement()` : nextToken()와 동일하지만 문자열이 아닌 객체를 리턴 - Object

📑 **참고자료**

**[[Java] StringTokenizer와 Split() 메서드 언제 써야할까?](https://velog.io/@effirin/Java-StringTokenizer와-Split-메서드-언제-써야할까)**

<br>

# **[181951. a와 b 출력하기](https://github.com/peesechizza/Algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/unrated/181951.%E2%80%85a%EC%99%80%E2%80%85b%E2%80%85%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0#level-unrated-a%EC%99%80-b-%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0---181951)**

## 문제

[[문제 링크]](https://school.programmers.co.kr/learn/courses/30/lessons/181951?language=java)

## 풀이

**Scanner 사용**

```java
import java.util.Scanner;

public class Solution {
     public static void main(String[] args) {
         Scanner sc = new Scanner(System.in);
         int a = sc.nextInt();
         int b = sc.nextInt();

         System.out.println("a = " + a);
         System.out.println("b = " + b);

     }
 }
```

**BufferedReader 사용**

```java
import java.util.*;
import java.io.*;

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer str = new StringTokenizer(br.readLine(), " ");

        int a = Integer.parseInt(str.nextToken());
        int b = Integer.parseInt(str.nextToken());

        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}
```

## 💡

`BufferedReader` 로 입력을 받으면 String 자료형으로 받아지는데, 입력값을 `StringTokenizer` 를 사용하여 공백 기준으로 a와 b값을 분리해준다.

nextToken의 반환 자료형이 String이기 때문에 정수로 형변환을 해준다.
<br>

# [181950. 문자열 반복해서 출력하기](https://github.com/peesechizza/Algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/unrated/181950.%E2%80%85%EB%AC%B8%EC%9E%90%EC%97%B4%E2%80%85%EB%B0%98%EB%B3%B5%ED%95%B4%EC%84%9C%E2%80%85%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0)

## 문제

[[문제 링크]](https://school.programmers.co.kr/learn/courses/30/lessons/181950?language=java)

## 풀이

**Scanner 사용**

```java
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int n = sc.nextInt();

        while(n > 0) {
            System.out.print(str);
            n--;
        }

    }
}
```

**BufferedReader 사용**

```java
import java.util.*;
import java.io.*;

public class Solution {
   public static void main(String[] args) throws IOException{
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       StringTokenizer st = new StringTokenizer(br.readLine(), " ");

       String str = st.nextToken();
       int n = Integer.parseInt(st.nextToken());

       System.out.println(str.repeat(n));

   }
}
```

## 다른 풀이

```java
import java.util.*;
import java.io.*;

public class Solution {
   public static void main(String[] args) throws IOException{
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       StringTokenizer st = new StringTokenizer(br.readLine(), " ");
			 StringBuilder sb = new StringBuilder();

       String str = st.nextToken();
       int n = Integer.parseInt(st.nextToken());

			 for (int i = 0; i < n; i++) {
						sb.append(str);
			  }

			 System.out.println(sb.toString());
   }
}
```

`StringBuilder`의 내용을 문자열로 출력하려면 `toString()` 메소드를 사용해야 한다. `toString` 메소드는 `StringBuilder`의 내용을 일반적인 문자열로 변환한다.

## 💡

처음엔 while문을 사용하여 반복했는데, `repeat`이라는 메서드가 있다는 걸 알았다. `repeat()`은 String 메서드 중 하나로 문자열을 파라미터의 주어진 횟수만큼 반복한다.

또, `append`를 사용하여 반복하며 이어붙이는 방법도 있다. `append` 를 사용하려면 `StringBuffer`가 필요하다.

**StringBuffer / StringBuilder**

덧셈 연산자를 이용해 String 인스턴스의 문자열을 결합하면, 내용이 합쳐진 새로운 String 인스턴스를 생성하게 되어 많이 결합할수록 공간의 낭비뿐만 아니라 속도도 느려지게 된다.

StringBuffer / StringBuilder 클래스는 문자열을 추가하거나 변경할 때 주로 사용한다.

`StringBuffer` 는 내부적으로 버퍼라고 하는 독립적인 공간을 가지게 되어, 문자열을 바로 추가할 수 있어 공간의 낭비가 없고 문자열의 연산 속도도 매우 빠르다.

`StringBuilder` 와 `StringBuffer` 는 둘 다 크기가 유연하게 변하는 가변적인 특성을 가지고 있으며, 제공하는 메서드도 같고 사용법도 같다. 둘의 차이는 멀티스레드 환경에서 안전하게 동작하는가 아닌가이다. **StringBuilder**는 동기화를 지원하지 않는 반면, **StringBuffer**는 동기화를 지원하여 멀티스레드 환경에서도 안전하게 동작할 수 있다.

📑 **참고자료**

**[[JAVA] 문자열 반복 메서드 repeat()](https://velog.io/@chosj1526/JAVA-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%B0%98%EB%B3%B5-%EB%A9%94%EC%84%9C%EB%93%9C-repeat)**

**[[JAVA] append() - 문자열의 마지막에 추가하는 메소드](https://itprogramming119.tistory.com/entry/JAVA-39-%EC%A0%84%EB%8B%AC%EB%90%9C-%EA%B0%92%EC%9D%84-%EB%AC%B8%EC%9E%90%EC%97%B4%EB%A1%9C-%EB%B3%80%ED%99%98%ED%95%9C-%ED%9B%84-%ED%95%B4%EB%8B%B9-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%98-%EB%A7%88%EC%A7%80%EB%A7%89%EC%97%90-%EC%B6%94%EA%B0%80%ED%95%98%EB%8A%94-append-%EB%A9%94%EC%86%8C%EB%93%9C-StringBuffer-%ED%81%B4%EB%9E%98%EC%8A%A4)**

[**[JAVA] String / StringBuffer / StringBuilder 차이점 & 성능 비교**](https://inpa.tistory.com/entry/JAVA-☕-String-StringBuffer-StringBuilder-차이점-성능-비교)

**[[JAVA] StringBuilder 사용법과 주요 메서드](https://myeongju00.tistory.com/61)**

<br>

# [181949. 대소문자 바꿔서 출력하기](https://github.com/peesechizza/Algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/unrated/181949.%E2%80%85%EB%8C%80%EC%86%8C%EB%AC%B8%EC%9E%90%E2%80%85%EB%B0%94%EA%BF%94%EC%84%9C%E2%80%85%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0)

## 문제

[[문제 링크]](https://school.programmers.co.kr/learn/courses/30/lessons/181949?language=java)

## 처음 풀이

```java
import java.util.*;
import java.io.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();

        for(int i = 0; i < a.length(); i++) {
            if (Character.isUpperCase(a.charAt(i))) {
                a.charAt(i) = Character.toLowerCase(a.charAt(i));
            } else {
                a.charAt(i) = Character.toUpperCase(a.charAt(i));
            }
        }

        System.out.println(a);

    }
}
```

**`/Solution.java:12: error: unexpected type`** 위의 풀이대로 풀면 계속 에러가 나왔다.

`a.charAt(i)` 대신 String형 변수로 변경했더니 에러 없이 실행되었다.

## 풀이

```java
import java.util.*;
import java.io.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String answer = "";

        for(int i = 0; i < a.length(); i++) {
            if (Character.isUpperCase(a.charAt(i))) {
                answer += Character.toLowerCase(a.charAt(i));
            } else {
                answer += Character.toUpperCase(a.charAt(i));
            }
        }

        System.out.println(answer);

    }
}
```

## 💡

`a.charAt(i) = Character.toLowerCase(a.charAt(i));` 이 코드가 오류가 났던 이유는 String의 특성 때문이다. `String` 은 불변한 특성을 가지고 있어 한 번 생성된 문자열은 변경이 불가능하다.

`charAt()` 메서드는 문자열에서 특정 인덱스의 문자를 반환할 뿐이며, 반환된 문자를 직접 수정하는 것은 불가능하다.

문자열을 변경하려면 `StringBuilder` / `StringBuffer` 와 같은 가변한 문자열 클래스를 사용하면 된다.

**문자열 자료형**

**✅ String을 사용해야 할 때**

- String은 불변성
- 문자열 연산이 적고 변하지 않는 문자열을 자주 사용할 경우
- 멀티 쓰레드 환경일 경우

**✅ StringBuilder을 사용해야 할 때**

- StringBuilder는 가변성
- 문자열의 추가, 생성, 삭제 등이 빈번히 발생하는 경우
- 동기화를 지원하지 않아, 단일 쓰레드이거나 동기화를 고려하지 않아도 되는 경우
- 속도면에선 StringBuffer보다 성능이 좋다.

**✅ StringBuffer을 사용해야 할 때**

- StringBuffer는 가변성
- 문자열의 추가, 생성, 삭제 등이 빈번히 발생하는 경우
- 동기화를 지원하여, 멀티 스레드 환경에서도 안전하게 동작
  <br>
  <br>

# [181948. 특수문자 출력하기](https://github.com/peesechizza/Algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/unrated/181948.%E2%80%85%ED%8A%B9%EC%88%98%EB%AC%B8%EC%9E%90%E2%80%85%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0)

## 문제

[](https://school.programmers.co.kr/learn/courses/30/lessons/181948)

## 풀이

```java
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        System.out.println("!@#$%^&*(\\\'\"<>?:;");
    }
}
```

## 💡

**escape 문자**

특수문자나 특수한 기능을 표현하는 문자이다.

다른 문자들은 괜찮지만 `\` , `‘` , `“` 는 escape 문자를 앞에 붙여 출력할 수 있다.
