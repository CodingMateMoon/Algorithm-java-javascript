package anonymous_function.ch02;

public class AddTest {

    public static void main(String[] args) {

        /* interface 구현. 매개변수 2개이상이므로 괄호 생략 불가
        실행문이 한 문장인 경우 중괄호 생략 가능. 반환문의 경우 중괄호 생략 불가
         */

//        Add addL = (x, y) -> {return x + y;};
        Add addL = (x, y) -> x + y;
        System.out.println(addL.add(2,3));

    }
}
