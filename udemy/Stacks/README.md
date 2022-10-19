# Stack

## Objectives

-   Stack이 뭔지 알아본다.
-   Stack을 언제 쓸지 이해한다.
-   Stack을 구현한다.

## Features

-   LIFO data structure
-   함수 호출을 다루는 상황에서 사용된다.
-   undo, redo 상황에서 사용된다.
-   인터넷 브라우저에 있는 방문 기록에서 앞/뒤로 routing할 때 사용된다.
-   트리나 그래프와 같은 것들을 다룰 때 사용하게 된다.
-   일반적인 상황에서는 배열을 써서 스택을 구현할 수 있지만, 저장해야 하는 데이터의 개수가 많아지면 Stack을 따로 만들어서 사용하는게 좋다.
    -   배열을 스택으로 쓸 때 push, pop 메서드 외에는 사용하지 않기 때문.
-   Stack이나 Queue는 그 내부에 뭐가 있는지 알 수 없다. 그냥 단순히 다음으로 출력되는 값만 알 수 있다. 배열로 단순히 구현했을 때 중간 인덱스에 있는 요소에 접근할 수 있다고 접근하면 안 된다.

## Big O

-   Insertion - O(1)
-   Removal - O(1)
-   Searching - O(N)
-   Access - O(N)
