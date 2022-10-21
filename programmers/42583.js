/**
 * 다리를 지나는 트럭
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 */

function solution(bridge_length, weight, truck_weights) {
    // 총 소요 시간
    let time = 0;
    // 다리 위에 있는 트럭
    const trucksOnBridge = [
        //{truckWeight: 5, lengthLeft: 20}, {truckWeight: 3, lengthLeft: 21}
    ];
    // 다리 위 트럭 무게
    let totalWeight = 0;

    // main logic
    do {
        // 시간 1초 추가
        time++;

        // 남아있는 거리 감소
        if (trucksOnBridge.length) {
            if (totalWeight + truck_weights[0] > weight) {
                // 시간 빨리 감기
                const decrement = trucksOnBridge[0].lengthLeft;
                trucksOnBridge.forEach((truck) => {
                    truck.lengthLeft -= decrement;
                });
                time += decrement - 1;
            } else {
                // 다리 위 트럭들 거리 1 감소
                trucksOnBridge.forEach((truck) => {
                    truck.lengthLeft--;
                });
            }
            // 다리 위 첫 번째 트럭 남은 거리 0 ? 트럭 제거 : do nothing
            if (trucksOnBridge[0].lengthLeft === 0) {
                const removed = trucksOnBridge.shift();
                totalWeight -= removed.truckWeight;
            }
        }
        // 다리 위의 트럭 무게 + 다음 트럭 무게 <= 다리 하중 ?
        if (totalWeight + truck_weights[0] <= weight && truck_weights[0]) {
            const added = truck_weights.shift();
            totalWeight += added;
            trucksOnBridge.push({
                truckWeight: added,
                lengthLeft: bridge_length,
            });
        }
    } while (trucksOnBridge.length);
    return time;
}
/*
테스트 1 〉	통과 (0.46ms, 33.7MB)
테스트 2 〉	통과 (3.73ms, 37.3MB)
테스트 3 〉	통과 (0.21ms, 33.4MB)
테스트 4 〉	통과 (1.69ms, 36MB)
테스트 5 〉	통과 (5.92ms, 37.4MB)
테스트 6 〉	통과 (2.89ms, 36MB)
테스트 7 〉	통과 (0.31ms, 33.6MB)
테스트 8 〉	통과 (0.24ms, 33.6MB)
테스트 9 〉	통과 (0.45ms, 33.5MB)
테스트 10 〉	통과 (0.23ms, 33.6MB)
테스트 11 〉	통과 (0.22ms, 33.6MB)
테스트 12 〉	통과 (0.26ms, 33.5MB)
테스트 13 〉	통과 (0.26ms, 33.6MB)
테스트 14 〉	통과 (0.20ms, 33.4MB)


테스트 1 〉	통과 (0.62ms, 33.7MB)
테스트 2 〉	통과 (5.63ms, 36.8MB)
테스트 3 〉	통과 (0.19ms, 33.5MB)
테스트 4 〉	통과 (6.84ms, 36.2MB)
테스트 5 〉	통과 (11.53ms, 36.8MB)
테스트 6 〉	통과 (9.28ms, 36.5MB)
테스트 7 〉	통과 (0.47ms, 33.6MB)
테스트 8 〉	통과 (0.25ms, 33.6MB)
테스트 9 〉	통과 (4.28ms, 36.3MB)
테스트 10 〉	통과 (0.24ms, 33.5MB)
테스트 11 〉	통과 (0.18ms, 33.6MB)
테스트 12 〉	통과 (0.31ms, 33.6MB)
테스트 13 〉	통과 (0.64ms, 33.7MB)
테스트 14 〉	통과 (0.19ms, 33.5MB)
*/

console.log(solution(2, 10, [7, 4, 5, 6]));

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const trucksOnBridge = [];
    let totalWeight = 0;
    do {
        time++;
        if (trucksOnBridge.length) {
            trucksOnBridge.forEach((truck) => truck.lengthLeft--);
            if (trucksOnBridge[0].lengthLeft === 0) {
                const removed = trucksOnBridge.shift();
                totalWeight -= removed.truckWeight;
            }
        }
        if (totalWeight + truck_weights[0] <= weight && truck_weights[0]) {
            const added = truck_weights.shift();
            totalWeight += added;
            trucksOnBridge.push({
                truckWeight: added,
                lengthLeft: bridge_length,
            });
        }
    } while (trucksOnBridge.length);
    return time;
}
