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
    let combinationResult = Array.from(Array(n + 1), ()=>new Array(m + 1).fill(0));

    function combination(L, r){
        if (combinationResult[L][r] > 0) {
            return combinationResult[L][r];
        }

        if (L === r || r === 0) {
            return 1;
        }

        combinationResult[L][r] = combination(L - 1, r - 1) + combination(L - 1, r);
        return combinationResult[L][r];
    }

    let answer = combination(4, 2);
    return answer;
}

console.log(solution(4, 2));

/*
N개 중에 M개를 뽑는 경우 4개중에 2개를 뽑는 경우를 구하면 처음에 올 수 있는 경우 4가지 그 다음 경우 3가지가 있는데 순서가 상관없으므로 순서에 대한 경우를 제외해서 /2를 하면 4 * 3 / 2 = 6 이 나옵니다. 각 경우의 수를 사전순으로 출력하는 것이 필요합니다.  N C M = N - 1 C M -1 + N-1 C M 으로 나타낼 수 있고
1 C 1 , 2 C 2 와 같이 N == M 인 경우 , 1 C 0, 2 C 0과 같이 M이 0인 경우 1을 return합니다. 4 C 2 = 3 C 1 + 3C2 등 각 조합의 결과값을 combinationResult[N][M]에 저장합니다.
 */