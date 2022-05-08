package java.ch13;

public class BitOperationTest {

    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 10;

        System.out.println(num1 | num2);
        System.out.println(num1 & num2);
        System.out.println(num1 ^ num2);
        System.out.println(~num1 );

        // 실제 값 변경X 비트 이동한 값만 출력
        System.out.println(num1 << 2);
        System.out.println(num1);
        // 복합대입연산자
        System.out.println(num1 <<= 2);
        System.out.println(num1);
    }
}
