# Javascript Pattern

## 디자인 패턴

소프트웨어 설계의 주어진 콘텍스트 내에서 일반적으로 발생하는 문제에 대한 일반적이고 재사용 가능한 솔루션이다.

다양한 상황에서 사용할 수 있는 문제를 해결하는 방법에 대한 설명 또는 템플릿이다.

**디자인 패턴은 프로그래머가 응용 프로그램이나 시스템을 디자인할 때 일반적인 문제를 해결하는데 사용할 수 있는 공식화된 모범 사례이다.**

### 디자인 패턴의 장점

1. **최고의 솔루션**
   - 디자인 패턴은 여러 번 수정을 거쳐 완성되었기 때문에 이미 잘 작동한다는 것을 알고 있다. 그래서 대부분의 개발자가 자주 사용한다.
2. **재사용성**
   - 디자인 패턴은 단일 문제에만 존재할 수 없으므로 여러 문제를 해결하기 위해 특정 상황에서 수정할 수 있는 재사용 가능한 솔루션을 나타낸다.
3. **풍부한 표현력**
   - 디자인 패턴은 큰 문제를 부분적으로, 효율적으로 설명할 수 있기 때문에 더 이상의 설명이 필요하지 않다.
4. **향상된 의사 소통**
   - 디자인 패턴에 익숙한 개발자는 문제에 대한 공통 목표를 설정하여 잠재적인 문제와 이러한 문제에 대한 솔루션에 대해 서로 의사 소통하는데 도움이 된다.
5. **필요없는 코드 리팩토링**
   - 디자인 패턴은 종종 다양한 문제에 대한 최적의 솔루션으로 불린다. 디자인 패턴을 염두에 두고 응용 프로그램을 작성하는 경우 생성된 솔루션이 효율적인 솔루션이므로 코드 리팩토링이 필요하지 않다고 가정한다.
6. **코드베이스 크기 감소**
   - 유일한 최적의 솔루션인 디자인 패턴은 공간을 거의 차지하지 않고 몇 줄의 코드로 필요한 솔루션을 구현하여 소중한 공간을 보존한다.

## 디자인 패턴의 종류

### Singleton

싱글톤 패턴은 **특정 인스턴스가 오직 하나만 존재**하도록 보장하는 소프트웨어 설계 패턴이다. 전역 변수를 사용하지 않고도 해당 객체를 전역적으로 접근할 수 있게 되며 공유 자원에 대한 동시 접근을 제어할 수 있다.

고전적으로 싱글톤 패턴은 **클래스가 존재하지 않는 경우 클래스의 새 인스턴스를 생성하는 메서드로 클래스를 생성하여 구현**할 수 있다. **인스턴스가 이미 존재하는 경우에는 해당 개체에 대한 참조를 반환**한다.

```jsx
let instance;

// 1. 생성자에서 하나의 인스턴스만 생성될 수 있게 로직 작성
class Counter {
  constructor() {
    if (instance) {
      throw new Error("하나의 인스턴스만 생성할 수 있습니다.");
    }
    this.counter = 0;
    instance = this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return this.counter++;
  }

  decrement() {
    return this.counter--;
  }
}

// 2. 객체 인스턴스 생성, 두번째 생성한 객체는 에러가 난다.
const singletonCounterA = new Counter();
const counterB = new Counter(); // Uncaught Error: 하나의 인스턴스만 생성할 수 있습니다.
singletonCounterA.increment();
singletonCounterA.increment();

console.log(singletonCounterA.getCount());
```

### Factory Pattern

비슷한 객체를 반복적으로 생성해야 할 경우 사용하는 패턴이다.

객체 생성 로직이 따로 떼어져 있기 때문에 코드 리팩토링 하더라도 한 곳만 고칠 수 있게 되니 **유지 보수성이 증가**한다.

```jsx
const book1 = {
  title: "Harry Potter",
  author: "JK Rowling",
  isbn: "AB123",
};

const book2 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "CD456",
};

const book3 = {
  title: "Moby-Dick",
  author: "Herman Melville",
  isbn: "EF789",
};
```

이렇게 생성할 경우 코드가 반복되고 객체에 수정사항이 생기면 모두 수정해줘야 한다.

팩토리 패턴을 적용하면 동일한 코드를 계속해서 반복할 필요 없이 동일한 속성을 공유하는 여러 객체를 만들어야할 때 유용하다. Factory 기능은 현재 환경 또는 사용자별 구성에 따라 사용자 지정 객체를 쉽게 반환할 수 있다.

```jsx
const createBook = (title, author, isbn) => ({
  title,
  author,
  isbn,
});

const book1 = createBook("Harry Potter", "JK Rowling", "AB123");
const book2 = createBook("The Great Gatsby", "F. Scott Fitzgerald", "CD456");
const book3 = createBook("Moby-Dick", "Herman Melville", "EF789");
```

### Mediator Pattern

중재자 패턴은 객체들이 어떻게 통신하는지 추상적으로 만들어 놓은 객체를 말한다. 객체간의 결합도를 낮추고 유지보수를 쉽게 할 수 있는 효과를 가져온다.

예를 들어 채팅방에 참여하는 모든 인원은 중재자로부터 메세지를 전달받고 화면에 표시한다. 역으로 메시지를 보낼 때에는 참여자1 에서 참여자2로 다이렉트로 메세지를 전송하는게 아니라 중재자를 거쳐 참여자1에서 중재자, 그리고 중재자에서 참여자2로 메시지가 전달된다.

```jsx
class Participant {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
    this.messages = [];
  }

  send(message, to) {
    this.chatRoom.send(message, this, to);
  }

  receive(message, from) {
    this.messages.push({ message, from });
  }

  showMessage() {
    console.log(this.messages);
  }
}

class ChatRoom {
  constructor() {
    this.participants = {};
  }

  enter(participant) {
    this.participants[participant.name] = participant;
    participant.chatRoom = this;
  }

  send(message, participant, to) {
    this.participants[to.name].receive(message, participant);
  }
}

const chatRoom = new ChatRoom();

const user1 = new Participant("user1");
const user2 = new Participant("user2");
const user3 = new Participant("user3");

chatRoom.enter(user1);
chatRoom.enter(user2);
chatRoom.enter(user3);

console.log(chatRoom);
console.log(user1);

user1.send("hello", user2);
console.log(chatRoom);
```

참여자 클래스와 ChatRoom 클래스를 만들어 참여자가 채팅방에 참여하는 형식의 코드를 만든다. 채팅방에 참여자가 입장하고 참여자끼리 대화를 하면 대화가 message 배열에 쌓인다. 이 때, 참여자끼리 주고 받는 메세지는 Mediator인 ChatRoom 클래스에 의해 전달된다.

중재자는 모든 참여자로부터 메세지를 전달받고 올바른 대상에게 전달해야 하는 의무와 권한을 가진다. 이렇게 되면 참여자끼리 서로 상호작용하는 방식을 캡슐화 할 수 있다. 중재자 패턴은 복잡한 어플리케이션, 개체와 개체끼리 서로 상호작용하는 상황에서 개체의 상태가 복잡하게 변할 때 유용하게 쓰인다.

### Observer Pattern

객체의 상태 변화를 관찰하는 옵저버들의 목록을 객체에 등록해서 상태 변화가 발생할 때마다 메서드 등을 통해 객체가 직접 목록의 갑 옵저버에게 통지하도록 하는 디자인 패턴이다. 즉, **어떤 객체의 상태가 변하면 연관된 객체들에게 알림을 보내는 디자인 패턴이다.**

### Module Pattern

모듈이란 전체 애플리케이션 중 독립된 코드로 분리해서 만들어 놓은 것이다. 유용한 기능을 모아둔 것으로 볼 수 있다. 자바스크립트에서는 모듈을 구현하는 가장 쉬운 방법은 객체 리터럴을 사용하는 방법이다.

모듈 패턴은 코드를 더 작고 재사용 가능한 조각으로 분할하는 것을 도와준다. 또한 모듈 내의 값은 기본적으로 모듈 내에서 비공개로 유지되고 수정할 수 없기 때문에 코드 캡슐화를 촉진한다.

export 키워드를 사용하여 명시적으로 내보낸 값만 다른 파일에서 엑세스 할 수 있다.

🔗 **참고**

---

[**[JavaScript] Module 패턴**](https://patterns-dev-kr.github.io/design-patterns/module-pattern/)
