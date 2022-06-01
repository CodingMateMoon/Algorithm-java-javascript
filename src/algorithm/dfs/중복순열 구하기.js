/*
중복순열 구하기
1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열
하는 방법을 모두 출력합니다.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.
▣ 입력예제 1
3 2
▣ 출력예제 1
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
9
 */


function solution(n, m){

    let answer = [];
    let resultArray = Array.from({length: m}, () => 0);
    function dfs(L) {

        if (L === m) {
            // console.log(resultArray);
            answer.push(resultArray.slice());
            return;
        }

        for (let i = 1; i <= n; i++) {
            resultArray[L] = i;
            // console.log(L + " : " + i);
            // console.log(resultArray);
            // console.log("-------------");
            dfs(L + 1);
        }
    }

    dfs(0);
    return answer;
}

console.log(solution(3, 3));

function solutionBefore(n, m){

    let answer = "";
    let resultArray = Array.from({length: m}, () => 0);
    function dfs(L) {

        if (L === m) {
            console.log(resultArray);
            return;
        }

        for (let i = 1; i <= n; i++) {
            resultArray[L] = i;
            // console.log(L + " : " + i);
            // console.log(resultArray);
            // console.log("-------------");
            dfs(L + 1);
        }
    }
    dfs(0)
}

// solutionBefore(3, 3);

/*
L = 0일때 temp[0] = i (1~ n), dfs(1)을 호출합니다. L = 1, temp[1] = i (1~n), dfs(3)을 호출합니다 L ===3 이므로 resultArray를 출력하고 종료시킵니다.
 */


function solutionRef(n, m){
    let answer=[];
    let tmp=Array.from({length:m}, ()=>0);
    function DFS(L){
        if(L===m){
            answer.push(tmp.slice());
        }
        else{
            for(let i=1; i<=n; i++){
                tmp[L]=i;
                DFS(L+1);
            }
        }
    }

    DFS(0);
    return answer;
}

// console.log(solutionRef(3, 2));