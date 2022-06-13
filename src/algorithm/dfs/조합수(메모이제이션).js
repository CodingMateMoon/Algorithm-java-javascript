/*
조합 구하기
1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그
램을 작성하세요.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.
▣ 입력예제 1
4 2
▣ 출력예제 1
1 2
1 3
1 4
2 3
2 4
3 4
6
 */

function solution(n, m){

    let array = Array.from({length: n+1}, () => 0);
    let check = Array.from({length: n+1}, () => false);
    let combinationResult = Array.from(Array(n + 1), ()=>new Array(m + 1).fill(0));
    let answer = Array.from({length: m + 1}, () => 0);
    let count = 0;

    function dfs(L){

        if (L === m+1) {
            let result = "";
            for (let i = 1; i <= m; i++) {
                // if(check[i])
                    result += answer[i] + " ";
            }
            count++;
            console.log(result);
            return;
        }

        for (let i = 1; i <= n; i++) {
            // console.log(L + " : " + i + " : " + check+ " : " + answer) ;
            if(check[i] || (L != 1 && answer[L -1] >= i) )
                continue;
            check[i] = true;
            answer[L] = i;
            // console.log(answer);
            dfs(L + 1);
            check[i] = false;
        }
    }

    dfs(1);
    return count;
}

console.log(solution(4, 2));
console.log(solution(5, 3));

/*
N개 중에 M개를 뽑는 경우 4개중에 2개를 뽑는 경우를 구하면 처음에 올 수 있는 경우 4가지 그 다음 경우 3가지가 있는데 순서가 상관없으므로 순서에 대한 경우를 제외해서 /2를 하면 4 * 3 / 2 = 6 이 나옵니다. 각 경우의 수를 사전순으로 출력하는 것이 필요합니다.  N C M = N - 1 C M -1 + N-1 C M 으로 나타낼 수 있고
1 C 1 , 2 C 2 와 같이 N == M 인 경우 , 1 C 0, 2 C 0과 같이 M이 0인 경우 1을 return합니다. 4 C 2 = 3 C 1 + 3C2 등 각 조합의 결과값을 combinationResult[N][M]에 저장합니다. 1을 선택한 경우 2 3 4가 나올 수 있고 2를 선택한 경우 2 1, 2 3 , 2 4 가 나올 수 있지만 2 1 은 앞에서 1 2로 나왔기 때문에 제외합니다  인덱스 1 2 3 4 등이 있다고 할 때 1 2 , 2 3 과 같이 먼저 뽑은 인덱스 다음에는 그보다 큰 인덱스만 선택이 가능하도록 예외처리를 합니다. array[i] , array[j] 순으로 뽑을 때 i < j 인 경우만 구합니다. array[2] array[3]에 체크가 되었을 때 의도한 값은 3 2 이지만 2 3이 출력될 수 있습니다. 레벨에 맞는 결과값 저장이 필요합니다.

 */
