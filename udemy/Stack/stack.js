/*
단순히 배열로 구현할 수 있지만, 스택이라는 개념과 상관 없는 속성들도
많기 때문에 따로 구현해보는 것도 좋다.

Singly Linked List를 이용하여 스택을 구현할 수 있다.

삽입과 삭제가 데이터의 맨 뒤에서 이뤄지면 Singly Linked List의 특성 상 O(N)의 시간 복잡도를 갖는다.
스택의 삽입과 삭제는 O(1)의 시간 복잡도를 가져야 하므로 삽입과 삭제가 데이터의 맨 앞에서 이뤄지도록 한다.
방향과 상관없이 LIFO의 개념만 부합한다면 Stack 조건이 성립된다.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
