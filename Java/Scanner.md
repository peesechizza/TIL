# 7. Scanner 사용

## Scanner

`System.out` 을 통해서 출력을 했듯이, `System.in` 을 통해서 사용자의 입력을 받을 수 있다.

- `nextLine()` : 엔터를 입력할 때 까지 문자를 가져온다.
- `nextInt()` : 입력을 int 형으로 가져온다. 정수 입력에 사용된다.
- `nextDouble()` : 입력을 double 형으로 가져온다. 실수 입력에 사용한다.

## 문제

**문제.** 이름 나이 입력받고 출력하기

사용자로부터 입력받은 이름과 나이를 출력하세요. 출력 형태는 "당신의 이름은 [이름]이고, 나이는 [나이]살입니다." 이어야 합니다.

**실행 결과 예시.**

```java
당신의 이름을 입력하세요:자바
당신의 나이를 입력하세요:30
당신의 이름은 자바이고, 나이는 30살입니다.
```

**풀이.**

```java
package scanner.ex;

import java.util.Scanner;

public class ScannerEx1 {
    public static void main(String[]args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("당신의 이름을 입력하세요:");
        String name = scanner.nextLine();

        System.out.print("당신의 나이를 입력하세요:");
        int age = scanner.nextInt();

        System.out.println("당신의 이름은 " + name + "이고, 나이는 " + age + "살입니다.");
    }
}

```

**문제.** 홀수 짝수

사용자로부터 하나의 정수를 입력받고, 이 정수가 홀수인지 짝수인지 판별하는 프로그램을 작성하세요.

**실행 결과 예시.**

`하나의 정수를 입력하세요:1 입력한 숫자 1는 홀수입니다.`

**실행 결과 예시.**

```java
하나의 정수를 입력하세요:4
입력한 숫자 4는 짝수입니다.
```

**풀이.**

```java
package scanner.ex;

import java.util.Scanner;

public class ScannerEx2 {
    public static void main(String[]args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("하나의 정수를 입력하세요:");
        int num = scanner.nextInt();

        String result = num % 2 == 0 ? "짝수" : "홀수";

        System.out.println("입력한 숫자 " + num + "은 " + result + "입니다.");

    }
}

```

**문제.** 음식점 주문

사용자로부터 음식의 이름( foodName ), 가격( foodPrice ), 그리고 수량( foodQuantity )을 입력받아, 주문
한 음식의 총 가격을 계산하고 출력하는 프로그램을 작성하세요.
음식의 총 가격을 계산하세요. 총 가격은 각 음식의 가격( foodPrice )과 수량( foodQuantity )을 곱한 값이
며, 이를 totalPrice 라는 이름의 변수에 저장하세요.
주문 정보와 총 가격을 출력하세요. 출력 형태는 "[음식 이름] [수량]개를 주문하셨습니다. 총 가격은 [총 가격]원
입니다." 이어야 합니다.

**실행 결과 예시.**

```java
음식 이름을 입력해주세요: 피자
음식의 가격을 입력해주세요: 20000
음식의 수량을 입력해주세요: 2
피자 2개를 주문하셨습니다. 총 가격은 40000원입니다.
```

**풀이.**

```java
package scanner.ex;

import java.util.Scanner;

public class ScannerEx3 {
    public static void main(String[]args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("음식 이름을 입력해주세요: ");
        String foodName = sc.nextLine();

        System.out.print("음식의 가격을 입력해주세요: ");
        int foodPrice = sc.nextInt();

        System.out.print("음식의 수량을 입력해주세요: ");
        int foodQuantity = sc.nextInt();

        int totalPrice = foodPrice * foodQuantity;

        System.out.printf("%s %d개를 주문하셨습니다. 총 가격은 %d원입니다.", foodName, foodQuantity, totalPrice);

    }
}

```

**문제.** 구구단 출력

사용자로부터 하나의 정수 n 을 입력받고, 입력받은 정수 n 의 구구단을 출력하는 프로그램을 작성하세요.

**실행 결과 예시.**

```java
구구단의 단 수를 입력해주세요: 8
8단의 구구단:
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
```

**풀이.**

```java
package scanner.ex;

import java.util.Scanner;

public class ScannerEx4 {
    public static void main(String[]args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("구구단의 단 수를 입력해주세요: ");
        int n = scanner.nextInt();

        System.out.println(n + "단의 구구단:");

        for (int i = 1; i <= 9; i++){
            int result = n * i;
            System.out.printf("%d x %d = %d\n", n, i, result);
        }

    }
}

```

**문제. 변수 값 교환**

변수 a=10 이 들어있고, b=20 이 들어있다.
변수 a 의 값과 변수 b 의 값을 서로 바꾸어라
다음 코드에서 시작과 종료 부분 사이에 변수의 값을 교환하는 코드를 작성하면 된다.
힌트: temp 변수를 활용해야 한다.

**출력 결과.**

```java
a = 20
b = 10
```

**풀이.**

```java
package scanner.ex;

public class ScannerEx5 {
    public static void main(String[]args) {
        int a = 10;
        int b = 20;
        int temp;

        temp = a;
        a = b;
        b = temp;

        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}

```

**문제. 사이 숫자**

사용자로부터 두 개의 정수를 입력받고, 이 두 정수 사이의 모든 정수를 출력하는 프로그램을 작성하세요.
사용자에게 첫 번째 숫자를 입력받으세요. 변수의 이름은 num1 이어야 합니다.
사용자에게 두 번째 숫자를 입력받으세요. 변수의 이름은 num2 이어야 합니다.
만약 첫 번째 숫자 num1 이 두 번째 숫자 num2 보다 크다면, 두 숫자를 교환하세요.
참고: 교환을 위해 임시 변수 사용을 고려하세요.
num1 부터 num2 까지의 각 숫자를 출력하세요.
출력 결과에 유의하세요. 다음 예시와 같이 2,3,4,5 처럼 , 로 구분해서 출력해야 합니다.

**실행 결과 예시**

```java
첫 번째 숫자를 입력하세요:2
두 번째 숫자를 입력하세요:5
두 숫자 사이의 모든 정수:2,3,4,5
```

**실행 결과 예시**

```java
첫 번째 숫자를 입력하세요:7
두 번째 숫자를 입력하세요:5
두 숫자 사이의 모든 정수:5,6,7
```

**풀이.**

```java
package scanner.ex;

import java.util.Scanner;

public class ScannerEx6 {
    public static void main(String[]args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("첫 번째 숫자를 입력하세요:");
        int num1 = scanner.nextInt();

        System.out.print("두 번째 숫자를 입력하세요:");
        int num2 = scanner.nextInt();

        if (num1 > num2) {
		        int temp = num1;
            num1 = num2;
            num2 = temp;
        }

        System.out.print("두 숫자 사이의 모든 정수:");
        for (int i = num1; i <= num2; i++) {
            System.out.print(i);
            if (i < num2) System.out.print(",");
        }

    }
}

```

**문제.**
사용자로부터 이름과 나이를 반복해서 입력받고, 입력받은 이름과 나이를 출력하는 프로그램을 작성하세요. 사용
자가 "종료"를 입력하면 프로그램이 종료되어야 합니다.
다음 실행 결과 예시를 참고해주세요.

**실행 결과 예시.**

```java
이름을 입력하세요 (종료를 입력하면 종료): 자바
나이를 입력하세요: 30
입력한 이름: 자바, 나이: 30
이름을 입력하세요 (종료를 입력하면 종료): 하니
나이를 입력하세요: 20
입력한 이름: 하니, 나이: 20
이름을 입력하세요 (종료를 입력하면 종료): 종료
프로그램을 종료합니다.
```

**풀이.**

```java
package scanner.ex;

import java.util.Scanner;

public class ScannerEx7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("이름을 입력하세요 (종료를 입력하면 종료): ");
            String name = scanner.nextLine();

            if (name.equals("종료")) {
                System.out.println("프로그램을 종료합니다.");
                break;
            }

            System.out.print("나이를 입력하세요: ");
            int age = scanner.nextInt();

            System.out.printf("입력한 이름: %s, 나이: %d\n", name, age);
        }

    }
}
```

**문제. 상품 가격 계산**
사용자로부터 상품의 가격( price )과 수량( quantity )을 입력받고, 총 비용을 출력하는 프로그램을 작성하세
요.
가격과 수량을 입력받은 후에는 이들의 곱을 출력하세요. 출력 형태는 "총 비용: [곱한 결과]"이어야 합니다.
-1을 입력하여 가격 입력을 종료합니다.

**실행 결과 예시**

```java
상품의 가격을 입력하세요 (-1을 입력하면 종료): 1000
구매하려는 수량을 입력하세요: 3
총 비용: 3000
상품의 가격을 입력하세요 (-1을 입력하면 종료): 2000
구매하려는 수량을 입력하세요: 4
총 비용: 8000
상품의 가격을 입력하세요 (-1을 입력하면 종료): -1
프로그램을 종료합니다.
```

**풀이**

```java
package scanner.ex;

import java.util.Scanner;

public class ScannerEx8 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        while (true) {
            System.out.print("상품의 가격을 입력하세요 (-1을 입력하면 종료): ");
            int price = input.nextInt();

            if (price == -1) {
                System.out.println("프로그램을 종료합니다.");
                break;
            }

            System.out.print("구매하려는 수량을 입력하세요: ");
            int quantity = input.nextInt();

            int total = price * quantity;

            System.out.println("총 비용: " + total);
        }
    }
}
```

**문제. 입력한 숫자의 합계와 평균**

사용자로부터 여러 개의 숫자를 입력 받고, 그 숫자들의 합계와 평균을 계산하는 프로그램을 작성하세요. 사용자는 숫자를 입력하고, 마지막에는 -1을 입력하여 숫자 입력을 종료한다고 가정합니다.
모든 숫자의 입력이 끝난 후에는, 숫자들의 합계 sum 과 평균 average 를 출력하세요. 평균은 소수점 아래까지 계산해야 합니다.
다음 실행 결과 예시를 참고해주세요.

**실행 결과 예시**

```java
숫자를 입력하세요. 입력을 중단하려면 -1을 입력하세요:
1
2
3
4
-1
입력한 숫자들의 합계: 10
입력한 숫자들의 평균: 2.5
```

**풀이**

```java
package scanner.ex;

import java.util.Scanner;

public class ScannerEx9 {
    public static void main(String[]args) {
        Scanner input = new Scanner(System.in);
        int count = 0;
        int sum = 0;
        double average = 0;

        System.out.println("숫자를 입력하세요. 입력을 중단하려면 -1을 입력하세요:");

        while (true) {
            int num = input.nextInt();

            if (num == -1) break;

            sum += num;
            count++;
        }

        average = (double) sum / count;
        System.out.printf("입력한 숫자들의 합계: %d", sum);
        System.out.println();
        System.out.printf("입력한 숫자들의 평균: %.1f", average);

    }
}

```

위 코드의 while문을 아래와 같이 축약할 수 있다.

```java
int num = 0;

while ( (num = scanner.nextInt()) != -1 ) {
		sum += num;
		count++;
}
```

**문제. 상품 구매**
사용자로부터 상품 정보(상품명, 가격, 수량)를 입력받고, 이들의 총 가격을 출력하는 프로그램을 작성하세요. 사용자는 여러 상품을 추가하고 결제할 수 있으며, 프로그램을 언제든지 종료할 수 있습니다.
사용자에게 다음 세 가지 옵션을 제공해야 합니다: 1: 상품 입력, 2: 결제, 3: 프로그램 종료. 옵션은 정수로 입력받으며, 옵션을 저장하는 변수의 이름은 option 이어야 합니다.
상품 입력 옵션을 선택하면, 사용자에게 상품명과 가격, 수량을 입력받으세요.
결제 옵션을 선택하면, 총 비용을 출력하고 총 비용을 0 으로 초기화하세요. (사용자가 총 비용을 확인하고, 결제를 완료했다고 가정합니다. 따라서 다음 사용자를 위해 총 비용을 다시 0 으로 초기화 해야합니다.)
프로그램 종료 옵션을 선택하면, "프로그램을 종료합니다."라는 메시지를 출력하고 프로그램을 종료하세요.
위의 세 가지 옵션 외에 다른 값을 입력하면, "올바른 옵션을 선택해주세요."라는 메시지를 출력하세요.

**실행 결과 예시**

```java
1: 상품 입력, 2: 결제, 3: 프로그램 종료
1
상품명을 입력하세요: 스프링
상품의 가격을 입력하세요: 30000
구매 수량을 입력하세요: 1
상품명:스프링 가격:30000 수량:1 합계:30000
1: 상품 입력, 2: 결제, 3: 프로그램 종료
1
상품명을 입력하세요: JPA
상품의 가격을 입력하세요: 40000
구매 수량을 입력하세요: 2
상품명:JPA 가격:40000 수량:2 합계:80000
1: 상품 입력, 2: 결제, 3: 프로그램 종료
2
총 비용: 110000
1: 상품 입력, 2: 결제, 3: 프로그램 종료
3
프로그램을 종료합니다.
```

**풀이**

```java
package scanner.ex;

import java.util.Scanner;

public class ScannerEx10 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int totalPrice = 0;

        while (true) {
            System.out.println("1: 상품 입력, 2: 결제, 3: 프로그램 종료");
            int option = input.nextInt();

            if (option == 1) {
                System.out.print("상품명을 입력하세요: ");
                String product = input.next();

                System.out.print("상품의 가격을 입력하세요: ");
                int price = input.nextInt();

                System.out.print("구매 수량을 입력하세요: ");
                int quantity = input.nextInt();

                int sum = price * quantity;
                totalPrice += sum;
                System.out.println("상품명:" + product + " 가격:" + price + " 수량:" + quantity + " 합계:" + sum);
            } else if (option == 2) {
                System.out.println("총 비용: " + totalPrice);
                totalPrice = 0;
            } else if (option == 3) {
                System.out.println("프로그램을 종료합니다.");
                break;
            } else {
                System.out.println("올바른 옵션을 선택해주세요.");
            }

        }
    }
}

```
