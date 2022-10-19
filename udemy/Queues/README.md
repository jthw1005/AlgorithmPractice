# Queue

## Objectives

-   큐가 뭔지 알아본다.
-   use case를 살펴본다.
-   큐를 구현해본다.

## Features

-   FIFO data structure
-   현실에서는 line과 유사한 기능을 한다.
-   예컨대, 게임에 접속을 하려고 대기중일 때, 가장 오래 기다린 사람을 추적하는 큐 데이터 구조가 있어서 먼저 접속하게끔 해준다.
-   Background tasks, Uploading resources, Printing 등에도 사용된다.
-   배열로 구현할 수도, 직접 클래스를 만들 수도 있다.
-   Stack이나 Queue는 그 내부에 뭐가 있는지 알 수 없다. 그냥 단순히 다음으로 출력되는 값만 알 수 있다. 배열로 단순히 구현했을 때 중간 인덱스에 있는 요소에 접근할 수 있다고 접근하면 안 된다.

## Big O

-   Insertion - O(1)
-   Removal - O(1)
-   Searching - O(N)
-   Access - O(N)
