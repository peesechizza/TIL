# OOP; Object-oriented programming

## OOP란?

객체 지향 프로그래밍은 Java 및 C++ 를 비롯한 많은 프로그래밍 언어의 기본이 되는 프로그래밍 패러다임이다. 객체 지향 프로그래밍은 **여러 개의 독립된 단위 “객체”** 들의 모임으로 컴퓨터 프로그램을 파악한다.

### OOP 특징

1. **자료 추상화 (Abstraction)**

   자료 추상화는 **불필요한 정보는 숨기고 중요한 정보만을 표현**함으로써 프로그램을 간단히 만드는 것이다. 이렇게 해서 그 객체 안에 자세한 내용을 몰라도 중요 정보를 이용해서 해당 객체를 사용할 수 있게 된다.

2. **상속 (Inheritance)**

   상속은 **새로운 클래스가 기존의 클래스의 자료와 연산을 이용할 수 있게 하는 기능**이다. 상속을 받는 새로운 클래스를 부 클래스, 파생 클래스, 하위 클래스, 자식 클래스라고 하며 새로운 클래스가 상속하는 기존의 클래스를 기반 클래스, 상위 클래스, 부모 클래스라고 한다. 상속을 통해서 기존의 클래스를 상속받은 하위 클래스를 이용해 프로그램의 요구에 맞추어 클래스를 수정할 수 있고 클래스 간의 종속 관계를 형성함으로써 객체를 조직화 할 수 있다.

3. **다형성 (Polymorphism)**

   다형성이란 **어떤 객체의 속성이나 기능이 상황에 따라 여러 가지 형태를 가질 수 있는 성질을 의미**한다.

4. **캡슐화 (Encapsulation)**

   클래스 안에 관련 메서드, 변수 등을 하나로 묶어준다.

## JavaScript Prototype

JavaScript는 클래스라는 개념이 없다. 그래서 기존의 객체를 복사하여 새로운 객체를 생성하는 프로토타입 기반의 언어이다.

자바 스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객제 지향의 상속 개념과 같이 **부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 하며 프로토타입 체인**이라고 한다. 그리고 이러한 부모 객체를 **Prototype 객체**라고 한다.

Prototype 객체는 생성자 함수에 의해 생성된 각각의 객체에 공유 프로퍼티를 제공하기 위해 사용한다.

```jsx
function Person(name, email, birthday) {
  this.name = name;
  this.email = email;
  this.birthday = new Date(birthday);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const john = new Person("john", "john@example.com", "7-10-91");
const han = new Person("han", "dycjh@example.com", "10-10-91");

console.log(john);
console.log(han);
```

여기서 john이든 han이든 birthday, email, name 값은 다르지만 calculateAge 프로퍼티의 값은 같다. 같은 함수를 사용하기 때문에 prototype으로 사용하면 좋다.

```jsx
function Person(name, email, birthday) {
  this.name = name;
  this.email = email;
  this.birthday = new Date(birthday);
}

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const john = new Person("john", "john@example.com", "7-10-91");
const han = new Person("han", "dycjh@example.com", "10-10-91");

console.log(john);
console.log(han);
```

### Object.create()

`Object.create()` 를 이용해서 객체의 prototype을 지정해줄 수 있다. 지정된 프로토타입 객체 및 속성을 갖는 새 객체를 만든다.

```jsx
function Person(name, email, birthday) {
  const person = Object.create(personsPrototype);
  person.name = name;
  person.email = email;
  person.birthday = new Date(birthday);
  return person;
}

const personsPrototype = {
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },
};

const john = new Person("john", "john@example.com", "7-10-91");
const han = new Person("han", "dycjh@example.com", "10-10-91");

console.log(john);
console.log(han);
```

## ES6 Classes

ES6에서 나온 Class를 이용해서 더 쉽게 OOP를 구현할 수 있다. 이것은 문법을 OOP 방식을 이용하지만 내부에서 **prototype**을 사용하며 작동된다.

```jsx
class Person {
  constructor(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = birthday;
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }
}

const john = new Person("john", "john@example.com", "10-3-98");
console.log(john);
```

`constructor`는 인스턴스의 생성과 동시에 클래스 필드의 생성과 초기화를 실행한다.

생성자 함수의 `this`는 클래스가 생성할 인스턴스를 가리킨다. `constructor`는 생략 가능하다.

![스크린샷 2023-11-28 오전 11 23 09](https://github.com/peesechizza/Algorithm/assets/110324109/af5e15e6-aaee-4394-bf2a-8ec455b896da)

prototype을 사용하려면 따로 `prototype.함수`를 넣어주거나 `Object.create()` 를 사용했는데 ES6의 Class를 이용하여 클래스 안에서 함수를 생성하면 함수 자체가 prototype에 들어가게된다.

### Static 사용

prototype이 아닌 클래스 함수 자체에 메서드를 설정할 수도 있다. 이런 메서드를 **정적 메서드**라고 부른다.

독립적인 것을 정의할 때 static을 사용하며 이 static 메서드를 사용할 때는 인스턴스가 아닌 클래스 이름을 이용해서 사용한다.

```jsx
class Person {
  constructor(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = birthday;
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }

  static multipleNumbers(x, y) {
    return x * y;
  }
}

console.log(Person.multipleNumbers(2, 3));
```

## Sub Class (Inheritance)

부모 클래스를 자식 클래스에 확장할 수 있다. 부모 클래스에 있던 기능을 토대로 자식 클래스를 만들 수 있는 것이다. 상속을 받을 때는 `extends` 키워드를 사용하면 된다.

```jsx
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }
}

class Client extends Person {
  constructor(name, email, phone, address) {
    super(name, email);

    this.phone = phone;
    this.address = address;
  }
}

const john = new Client("john", "john@example.com", "010-0000-0000", "서울");
console.log(john.introduce());
```

부모 클래스에서 상속받아 자식 클래스를 만들고, 자식 클래스에 부모 클래스의 속성을 불러올 때 `super()` 를 사용한다.

## super() 란?

### Constructor

생성자를 사용하면 인스턴스화된 객체에서 다른 메서드를 호출하기 전에 수행해야 하는 사용자 지정 초기화를 제공할 수 있다.

클래스에 new를 붙여서 `new 클래스명(매개변수)` 인스턴스 객체로 생성하면 넘겨받은 인수와 함께 constructor가 먼저 실행된다.

### super

1. `super` 키워드는 자식 클래스 내에서 부모 클래스의 생성자를 호출할 때 사용된다.

   ```jsx
   super([arguments]);
   ```

2. `super` 키워드는 자식 클래스 내에서 부모 클래스의 메소드를 호출할 때 사용된다.

   ```jsx
   super.functionOnParent([arguments]);
   ```
