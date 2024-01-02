# 8. 컬렉션 프레임워크

배열은 쉽게 생성하고 사용할 수 있지만, 불특정 다수의 객체를 저장하고 객체를 삭제할 때 인덱스가 비게 되는 문제점이 있다.

배열의 이러한 문제점을 해결하고 객체들을 효율적으로 추가, 삭제, 검색할 수 있도록 컬렉션과 관련된 인터페이스와 클래스들을 포함시켜 놓은 것을 컬렉션 프레임워크라 한다.

## List

순서가 있는 요소들의 컬렉션으로 중복 저장이 가능하다.

### ArrayList

List 인터페이스의 구현 클래스로, ArrayList에 객체를 추가하면 객체가 인덱스 0부터 차례대로 저장되고 관리된다. 특정 인덱스의 객체를 제거하면 바로 뒤 인덱스부터 마지막 인덱스까지 모두 앞으로 1 씩 당겨지고 특정 인덱스에 객체를 삽입하면 모두 뒤로 1씩 밀려난다.

인덱스 검색이나 맨 마지막에 객체를 추가하는 경우에는 `ArrayList` 가 더 좋은 성능을 발휘하지만 빈번한 객체 삭제와 삽입이 일어나는 곳에서는 사용하는 것이 바람직하지 않다.

- 기본 생성자로 ArrayList 객체를 생성 → 초기 용량 10
- 제네릭을 사용하여 타입을 지정한다.
  - `ArrayList<E> 변수명 = new ArrayList<>();`
  - 붙이지 않으면 `<Object>`와 동일하다.
- 객체 추가
  - `add(E e)` : 맨 끝에 요소를 추가한다.
  - `add(int index, E element)` : 주어진 인덱스에 객체를 추가한다.
  - `set(int index, E element)` : 주어진 인덱스에 저장된 객체를 주어진 객체로 바꾼다.
  - `addAll(Collection c)` : Collection 객체를 받아서 Collection에 있는 아이템들을 리스트에 모두 추가한다.
- 생성 및 초기화
  - `ArrayList<E> 변수명 = new ArrayList<>(Arrays.asList(…));`
  - `ArrayList<E> 변수명 = new ArrayList<>(List.of(…));` → 자바 9에서부터 가능하다.
  - `ArrayList<E> 변수명 = new ArrayList<>();
Collections.addall(변수명, …)`
  - `ArrayList<E> 변수명2 = new ArrayList<>(변수명1);` → 다른 Collection 인스턴스를 사용하여 생성한다.
  - `ArrayList<E> 변수명2 = (ArrayList<E>)변수명1.clone();` → 스스로를 복제하여 반환한다. (얕은 복사)
- 객체 제거
  - `remove(int index)` : 주어진 인덱스에 저장된 객체를 삭제한다.
  - `remove(Object o)` : 해당 객체를 찾아서 나오는 값을 삭제한다.
  - `removeAll()` : 주어진 컬렉션에 있는 요소들을 지운다.
  - `clear()` : 저장된 모든 객체를 삭제한다.
- List → Array 형변환
  - `Object[] arr = list.toArray();` : list의 최상위 객체 Object를 활용하여 모든 객체를 배열로 담을 수 있다.
  - `Integer[] 변수명2 = 변수명1.toArray(Integer[]::new);` 와 같은 형식으로 특정 타입의 배열로 변환할 수 있다.
- `<? extends T>`
  - 상속 관계로 이루어진 클래스만 자료형을 받는다.
  - ? (자식 클래스), T (부모 클래스)로 부모 클래스와 자식 클래스의 임의의 자료형만 받는다.
- `ensureCapacity()` : 자리수 미리 확보
- `trimToSize()` : 남는 자리 없애기 (메모리 회수)

### LinkedList

ArrayList는 내부 배열에 객체를 저장해서 인덱스로 관리하지만, LinkedList는 인접 참조를 링크해서 체인처럼 관리한다.

특정 인덱스의 객체를 제거, 삽입하면 앞뒤 링크만 변경되고 나머지 링크는 변경되지 않는다.

요소의 추가와 제거가 빠르고 메모리가 절약되지만 요소 접근이 느리기 때문에 요소들의 추가/제거가 잦은 곳에 사용하는것이 바람직하다.

`LinkedList` 는 Queue를 구현하는 용도로 사용 가능하고, `ArrayList` 와 대다수 주요 기능을 공유한다.

- 객체 추가
  - `addFirst()`, `addLast()`
- 객체 꺼내지 않고 반환
  - `peekFirst()` , `peekLast()` : 비어있을 경우 null을 반환한다.
  - `getFirst()`, `getLast()` : 비어있을 경우 Exception이 발생한다.
- 객체를 꺼내어 반환
  - `pollFirst()` , `pollLast()` : 비어있을 경우 null을 반환한다.
  - `removeFirst()`, `removeLast()` : 비어있을 경우 Exception이 발생한다.
