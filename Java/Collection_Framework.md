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

## Set

List 컬렉션은 저장 순서를 유지하지만, Set 컬렉션은 **저장 순서가 유지되지 않는다**. 또한 객체를 중복해서 저장할 수 없고, 하나의 null만 저장할 수 있다.

Set 컬렉션에는 HashSet, LinkedHashSet, TreeSet 등이 있는데, 인덱스로 관리하지 않기 때문에 인덱스를 매개값으로 갖는 메서드가 없다.

- 객체 추가
  - `boolean add(E e)` : 주어진 객체를 저장하고, 성공적으로 저장되면 true, 중복 객체면 false를 리턴
- 객체 검색
  - `boolean contains(Object o)` : 주어진 객체가 저장되어 있는지 여부를 반환
  - `boolean isEmpty()` : 컬렉션이 비어있는지 여부를 반환
  - `Iterator<E> iterator()` : 저장된 객체를 한 번씩 가져오는 반복자 리턴
  - `int size()` : 저장되어 있는 전체 객체 수 리턴
- 객체 삭제
  - `void clear()` : 저장된 모든 객체를 삭제
  - `boolean remove(Object o)` : 주어진 객체를 삭제 후 여부 반환
  - `boolean removeAll(Collection<?> *c*);` : 다른 컬렉션 기준으로 내용 삭제
- `boolean contains(Object *o*);` : 주어진 객체의 포함 여부 반환

### HashSet

객체들을 순서 없이 저장하고 동일한 객체는 중복 저장하지 않는다. HashSet은 객체를 저장하기 전에 먼저 객체의 `hashCode()` 메서드를 호출해서 해시코드를 얻어낸다. 그리고 이미 저장되어 있는 객체들의 해시코드와 비교하여 동일한 해시코드가 있다면 `equals()` 메서드로 두 객체를 비교하여 true가 나오면 동일한 객체로 판단하고 중복 저장을 하지 않는다.

`HashSet` 은 성능이 빠르고 메모리를 적게 사용한다. `HashSet` 은 정렬된 것처럼 보이지만 해시 코드로 정렬되었기 때문에 순서가 보장되지 않는다.

### LinkedHashSet

내부적으로 링크를 사용하여 요소들을 입력 순서대로 정렬한다. `LinkedHashSet` 은 `HashSet` 보다는 성능이 떨어진다.

### TreeSet

요소들을 오름차순으로 정렬한다. 데이터 추가/삭제에 시간이 많이 소모된다.

`TreeSet` 에는 Red-Black Tree라는 알고리즘이 사용된다. 객체를 저장하면 자동으로 정렬되는데, 부모값과 비교해서 낮은 것은 왼쪽 자식 노드에, 높은 것은 오른쪽 자식 노드에 저장한다.

- `first()`, `last()` : 제일 높은/낮은 객체를 리턴
- `ceiling(E *e*)` : 같은 것이 없다면 트리 구조상 바로 위의 것 (바로 더 큰 것)을 반환
- `floor(E *e*)` : 같은 것이 없다면 트리 구조상 바로 아래의 것 (바로 더 작은 것)을 반환
- `pollFirst()` , `pollLast()` : 제일 낮은/높은 객체를 꺼내오고 컬렉션에서 제거
- `descendingSet()` : 순서가 뒤집힌 NavigableSet 반환

## Map

`Map` 컬렉션은 키와 값(key, value)으로 구성된 Entry 객체를 저장하는 구조를 가지고 있다. 여기서 키와 값은 모두 객체이다.

키는 중복 저장될 수 없지만 값은 중복 저장될 수 있다. 만약 기존에 저장된 키와 동일한 키로 값을 저장하면 기존의 값은 없어지고 새로운 값으로 대치된다.

- 객체 추가
  - `V put(K key, V Value)` : 주어진 키로 값을 저장. 새로운 키일 경우 null을 리턴하고 동일한 키가 있을 경우 값을 대체하고 이전 값을 리턴
  - `putAll(Map<? extends K, ? extends V> *m*)` : 주어진 맵으로부터 전부 가져옴
- 객체 검색
  - `V get(Object key)` : 주어진 키가 있는 값을 리턴
  - `Set<K> keySet()` : 모든 키를 Set 객체에 담아서 리턴
  - `boolean containsKey(Object key)` : 주어진 키가 있는지 여부
  - `boolean containsValue(Object value)` : 주어진 값이 있는지 여부
  - `boolean isEmpty()` : 컬렉션이 비어있는지 여부
  - `V getOrDefault(Object *key*, V *defaultValue*)` : 키에 해당하는 쌍이 없을 시 지정한 디폴트 값 반환
  - `Set<Map.Entry<K, V>> entrySet()` : 키와 값의 쌍으로 구성된 모든 Map.Entry 객체를 Set에 담아서 리턴
- 객체 삭제
  - `void clear()` : 모든 Map.Entry(키와 값)를 삭제
  - `V remove(Object key)` : 주어진 키와 일치하는 Map.Entry를 삭제하고 값을 리턴

### HashMap

`HashMap`은 해싱을 사용하기 때문에 많은 양의 데이터를 검색하는데 있어 뛰어난 성능을 보인다. 정렬 무관하여 빠른 접근을 할 때 HashMap을 사용한다.

### TreeMap

`TreeMap` 은 `TreeSet` 과 키를 저장하는 방식과 같다. 키 순으로 정렬이 필요할 때 사용한다.

- `firstKey()` , `lastKey()` : TreeMap 객체의 첫번째/마지막 key값 반환
- `ceilingKey()` , `floorKey()` : 입력되는 key값보다 크거나/작거나 같은 key 값이 TreeMap 객체에 존재한다면 그 중 가장 작은/큰 값을 반환
- `firstEntry()`, `lastEntry()` : TreeMap 객체의 첫번째/마지막 key값에 해당하는 mapping이 있을 경우 Map.Entry<K,V> 객체 반환
- `ceilingEntry()` , `floorEntry()` : 입력되는 key값보다 크거나/작거나 같은 key 값이 TreeMap 객체에 존재한다면 그 중 가장 작은/큰 key 값에 해당하는 mapping이 있을 경우 Map.Entry<K,V> 객체 반환
- `pollFirstEntry()`, `pollLastEntry()` : 해당 맵에서 현재 가장 작은(첫 번째) / 가장 큰(마지막) 키와 그에 대응하는 값의 엔트리를 반환하고, 해당 엔트리를 맵에서 제거

## Comparable & Comparator

`Comparable`과 `Comparator`는 모두 인터페이스로 사용하고자 한다면 인터페이스 내에 선언된 메서드를 반드시 구현해야 한다.

### Comparable

자기 자신과 파라미터로 들어오는 객체를 비교하는 것이다.

보통 숫자 클래스들, 불리언, 문자열 등과 Date, BigDecimal, BigInteger 등은 Comparable을 implement 하고 있기 때문에 외부에서 따로 기준을 정하지 않아도 서로 비교한다.

`Comparable` 인터페이스에는 `compare To(T o)` 가 선언되어 있다. Comparable을 사용하고자 한다면 compareTo 메서드를 재정의 해주어야 한다.

### Comparator

파라미터로 들어오는 두 객체를 비교하는 것이다. 컬렉션에서는 정렬의 기준으로 사용되며, `Arrays` 의 정렬 메서드, `TreeSet` 이나 `TreeMap` 등의 생성자에 활용된다.

`Comparator`를 보면 많은 메서드가 많지만 실질적으로 구현해야 하는 것은 `compare(T o1, T o2)`이다.

## Iterator

전체 객체를 대상으로 한번씩 반복해서 가져오는 반복자를 제공한다. 반복자는 Iterator 인터페이스를 구현한 객체를 말하는데, `iterator()` 메서드를 호출하면 얻을 수 있다.

컬렉션을 순회하는데 사용하며 특정 기준의 요소들 제거와 순회 상태가 저장될 필요가 있을 때 유용하다.

- `hasNext()` : 가져올 객체가 있으면 treu를 리턴하고 없으면 false 리턴
- `next()` : 컬렉션에서 하나의 객체를 가져옴
- `remove()` : Set 컬렉션에서 객체를 제거

for-each문을 사용해서 `remove()` 를 할 때 오류가 발생하는데, 삭제할 때마다 컬렉션에서 변경이 일어나기 때문에 로직에서 오류가 난다. `filter()`와 같은 메서드를 사용하여 제거를 하면 된다.
