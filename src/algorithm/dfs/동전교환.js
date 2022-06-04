/*
동전교환
다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환
해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.
▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종
류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
각 동전의 종류는 100원을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
▣ 입력예제 1
3
1 2 5
15
▣ 출력예제 1
3
설명 : 5 5 5 동전 3개로 거슬러 줄 수 있다.
 */

function solution(n, array, m){

    function dfs(){

    }
}

function solutionBefore(n, array, m){

    let totalShare = 0;

    function dfs(remainder, index){
        if (index === -1) {
            console.log(totalShare);
            return;
        }

        if (remainder === 0) {
            console.log(totalShare);
            return;
        }
        let share = Math.floor(remainder / array[index]);
        console.log(remainder + " : " + array[index] + " : " + share);
        totalShare += share;
        dfs(remainder % array[index], index - 1);
    }

    dfs(m, n-1);
}

solutionBefore(3, [1, 2, 5], 15);
solutionBefore(3, [5, 2, 1], 15);
// solution(3, [1, 2, 5], 18);
// solution(3, [3, 5, 7], 18);

/*
입력예제1에서 동전의 종류 개수는 3(N), 동전의 종류 1 2 5 (array), 거슬러 줄 금액 15(M)이 주어졌을 때
5원 동전 3개가 거슬러줄 동전의 최소개수가 됩니다. 1원 15개, 1x5 +  2x5 = 15 등이 있습니다.
15 / 5 = 3 . 18원이라고 할 경우 18/5 = 3, 3 / 2 = 1, 1 / 1 = 1 나머지 0
dfs(18, index : 2);  18 / array[2] 가장 값이 큰 동전으로 우선 나누고 share에 몫을 더해줍니다.
18 / 5 = 3, share += 3, dfs(3, index : 1) 3 / array[1] = 1, share += 1; dfs(1, index : 0);
 share += 1; dfs(0, index : -1). dfs(remainder, index)에서 index가 -1이 되거나 remainder가 0이 되는 경우 return합니다.
 */


function solutionRef(m, arr){
    let answer=Number.MAX_SAFE_INTEGER;
    let n=arr.length;
    function DFS(L, sum){
        if(sum>m) return;
        if(L>=answer) return;
        if(sum===m){
            answer=Math.min(answer, L);
        }
        else{
            for(let i=0; i<n; i++){
                DFS(L+1, sum+arr[i]);
            }
        }
    }
    DFS(0, 0);
    return answer;
}

let arr=[1, 2, 5];
// console.log(solutionRef(15, arr));