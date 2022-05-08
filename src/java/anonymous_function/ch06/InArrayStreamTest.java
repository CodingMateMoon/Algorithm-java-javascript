package java.anonymous_function.ch06;

import java.util.Arrays;
import java.util.stream.IntStream;

public class InArrayStreamTest {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        for(int num : arr) {
            System.out.println("for : " + num);
        }

        /*
        cf)모든 arr는 Arrays 클래스 사용 가능 T[] array, double[] array
        IntStream 반환(Integer 핸들링, Integer 배열을 가지고 Stream Operation 할 수 있음)\
        forEach : 안의 요소 하나씩 꺼내기. n이 가리키는 arr의 요소들 하나씩 출력
        람다식(익명 내부 클래스 생성). 스트림
         */
//        Arrays.stream(arr).forEach(n-> System.out.println(n));
        IntStream is = Arrays.stream(arr);
        is.forEach(n-> System.out.println(n));

        //IntStream forEach, allMatch 등 여러 연산 사용 가능
        int sum = Arrays.stream(arr).sum();
        System.out.println(sum);

    }
}
