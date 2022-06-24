/*
미로탐색(DFS)
7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요. 출발점은 격
자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다. 격자판의 1은 벽이고, 0은 통로이다. 격
자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면
S 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 도착
위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.

▣ 입력설명
7*7 격자판의 정보가 주어집니다.
▣ 출력설명
첫 번째 줄에 경로의 가지수를 출력한다.
▣ 입력예제 1
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0
▣ 출력예제 1
8
 */

function solution(array){
    const length = array.length;
    let graph = Array.from({length: length+1}, ()=>new Array(length+1));
    let check = Array.from({length: length + 1}, () => new Array(length + 1).fill(false));
    let directionX = [0, 0, -1, 1]; //상하좌우 이동 시 좌표 이동
    let directionY = [1, -1, 0, 0];
    for (let i = 1; i <= array.length; i++) {
        for (let j = 1; j <= length; j++) {
            graph[i][j] = array[i - 1][j - 1];
        }
    }
    let count = 0;
    let answer = [];
    let result = [];
    function dfs(x,y){

        if(x <1 || y < 1)
            return;

        // console.log(x, y);
        // console.log("graph : " + graph[x][y]);
        if(graph[x][y])
            return;

        if (x === 7 && y === 7) {
            count++;
            answer.push(result.slice());
            return;
        }



        for (let i = 0; i < 4; i++) {
            let nextX = x + directionX[i] ;
            let nextY = y + directionY[i] ;
            if (nextX < 1 || nextY < 1 ||nextX > 7 || nextY > 7) {
                continue;
            }
            console.log(i + " : (" + nextX + "," + nextY + ")");
            console.log(check[nextX][nextY]);
            if(check[nextX][nextY])
                continue;
            check[nextX][nextY] = true;
            let point = nextX + " : " + nextY;
            result.push(point);
            dfs(nextX, nextY);
            check[nextX][nextY] = false;
            result.pop();
        }

    }
    check[1][1] = true;
    dfs(1, 1);
    console.log("count : " + count);
    return answer;
}

console.log(solution([[0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 0, 1, 1], [1, 1, 0, 0, 0, 0, 1], [1, 1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0]]));

/*
(1,1)에서 출발해서 (7,7)로 갈 수 있는 경로는 8가지입니다. 상하좌우로만 이동할 수 있으며 다음에 갈 수 있는 좌표는 값이 0이어야 합니다. 상하좌우 4가지 경우중에서 값이 0인 좌표가 있으면 해당 좌표를 체크하고 그쪽으로 이동합니다. 좌표 x,y에서 x,y 모두 7이하인 경우만 확인하고 7을 넘어가거나 (7,7)에 도착한 경우 종료합니다. 위로 가는 경우 좌표는 (x, y+1), 아래로 가는 경우는 (x, y-1), 왼쪽으로 가는 경우 (x-1, y), 오른쪽으로 가는 경우 (x+1,y) 총 4가지 경우를 확인하고 갈 수 있으면 체크한 뒤 방문해야합니다.
 */