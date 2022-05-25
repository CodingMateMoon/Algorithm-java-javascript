package java;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Callable;

public class IntellijPractice {
    

    

    public static Callable<Object> getCallableObj(){
        // Surround할 코드를 드래그하고 ctrl + alt + j : 
        Callable<Object> callable = new Callable<Object>() {
            public Object call() throws Exception {
                List<String> seasons = List.of("Spring", "summer", "Monsoon", "Autumn", "Winter");
                return seasons;
            }
        };
        return callable;
    }

    public static void main(String[] args) {
        System.out.println("java");

        var text = "Planet";
        var year = 2020;

        //soutv
        System.out.println("year = " + year);

        //soutp
        System.out.println("args = " + Arrays.deepToString(args));

        //soutm
        System.out.println("IntellijPractice.main");

        //fori
        for (int i = 0; i < 10; i++) {
            //soutv
            System.out.println("i = " + i);
        }

        // if만 쓴 상태에서 () 생성 : tab, 빠진 대괄호 생성 : ctrl + shift + tab
        if (true) {
        }
        //ifn : if문으로 변수 null 체크하는 코드 생성
        if (text == null) {

        }
        /* live template 찾기
         입력창에 c만 입력했을 때 메소드는 괄호(parenthesis)가 따라오고 keyword는 설명이 없습니다.
         목록중 cxf Generate CXF ~ 를 보면 cxf 뒤로 설명이 쭉 있는데 live template인 것을 확인할 수 있습니다
         */

        /*
        ctrl + alt + J
         */

        //export settings를 활용하여 live template을 추출할 수도 있고 import setting을 활용하여 들여올 수도 있습니다.


    }
}
