package java.ch11;

public class LogicalTest {

    public static void main(String[] args) {
        int num1 = 10;
        int i = 2;

        // and 연산. 앞의 항이 false이므로 뒤 i= i+2 실행 안됨
        //boolean value = ( (num1 = num1 + 10 ) < 10) && ( (i = i+2) < 10);
        // or 연산. 앞의 항이 true이므로 뒤 연산 실행 안됨
        boolean value = ( (num1 = num1 + 10 ) > 10) || ( (i = i+2) < 10);
        //boolean value = ( (num1 = num1 + 10 ) < 10) || ( (i = i+2) < 10);

        System.out.println(value);
        System.out.println(num1);
        System.out.println(i);
    }
}
