package java.anonymous_function.ch06;

import java.util.Arrays;

public class ReduceTest {

    public static void main(String[] args) {

        String greetings[] = {"안녕하세요", "hello", "Good morning", "반갑습니다"};

        // 한글 2byte, 영어 1byte. 한글이 가장 길어서 "안녕하세요" 출력. 람다식 사용해서 구현한 경우
       System.out.println(Arrays.stream(greetings).reduce("", (s1,s2)->{
            if(s1.getBytes().length >= s2.getBytes().length) return s1;
            else return s2;
        }));

        // reduce 사용 구현. CompareString에서 apply를 직접 구현한 후에 구현한 객체 입력하고 실행
        String str = Arrays.stream(greetings).reduce(new CompareString()).get();
        System.out.println(str);
    }
}
