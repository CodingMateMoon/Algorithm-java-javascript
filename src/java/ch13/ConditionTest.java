package java.ch13;

import java.util.Scanner;

public class ConditionTest {

    public static void main(String[] args) {
        int max;
        System.out.println("두 수 입력. 더 큰 수 출력");
        Scanner scanner = new Scanner(System.in);
        System.out.println("입력 1: ");
        int num = scanner.nextInt();
        System.out.println("입력 2: ");
        int num2 = scanner.nextInt();

        max = (num > num2)? num : num2;
        System.out.println(max);
    }
}
