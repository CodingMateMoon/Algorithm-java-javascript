/*
자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.
▣ 출력설명
첫째 줄에 출력한다.
▣ 입력예제 1
3
▣ 출력예제 1
1 2 3
* */

function recursive(n) {
    if(n === 1)
        return console.log(1);
    recursive(n-1);
    console.log(n);
}

recursive(3);


/*
함수가 직접 또는 간접적으로 자기 자신을 호출하는 프로세스를 재귀함수라고 합니다. n = 3일때 1 2 3 순으로 출력하려면 어떻게 해야할지 먼저 생각합니다.
n=3일때 recursive(2)로 재귀호출을 하고 재귀호출이 끝난후에(return) 실행할 내용으로 log(2)를 출력합니다. n=2일때 recursive(1)을 호출하고 recursive(1)이 return된 이후에
실행할 내용으로 log(2)을 출력합니다.
n=1일 때 최종적으로 출력하는 것을 생각할 수 있는데 재귀 호출의 종료 지점에서 return하면서 recursive(1)- log(1) , recursive(2)-log(2), recursive(3)-log(3)순으로
출력합니다.
* */

function solutionRef(n){
    function DFS(L){
        if(L==0) return;
        else{
            DFS(L-1);
            console.log(L);
        }
    }
    DFS(n);
}

//solutionRef(3);

/*

* */