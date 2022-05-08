package java.anonymous_function.ch01;

class OutClass {

    private int num = 10;
    private static int sNum = 20;
    private InClass inClass;

    public OutClass() {
        inClass = new InClass();
    }

    private class InClass{

        int iNum = 100;

        /* 인스턴스 Inner 클래스는 Outer클래스가 먼저 생성된 뒤에 생성되므로 static 변수 선언 시 오류가 남
        //Static declarations in inner classes are not supported at language level '11'
        static int sInNum = 500;

         */

        void inTest() {
            System.out.println("OutClass num = " +num + "(외부 클래스의 인스턴스 변수)");
            System.out.println("OutClass sNum = " + sNum + "(외부 클래스의 스태틱 변수)"); //스태틱 변수는 인스턴수변수보다 먼저 생성
            System.out.println("InClass inNum = " + iNum + "(내부 클래스의 인스턴스 변수)");
        }
    }

    public void usingClass(){
        inClass.inTest();
    }

    static class InStaticClass {
        int iNum = 100;
        static int sInNum = 200;

        void inTest(){
            /*
            Non-static field 'num' cannot be referenced from a static context
            정적클래스가 외부클래스와 상관없이 사용할 수 있으므로 외부클래스의 인스턴스 변수 사용 불가
            System.out.println("OutClass num = " +num + "(외부 클래스의 인스턴스 변수)");

             */
            System.out.println("InClass num = " +iNum + "(내부 클래스의 인스턴스 변수)");
            System.out.println("OutClass sNum = " + sNum + "(외부 클래스의 스태틱 변수)"); //스태틱 변수는 인스턴수변수보다 먼저 생성
            System.out.println("InClass inNum = " + sInNum + "(내부 클래스의 스태틱 변수)");
        }

        static void sTest() {
            /* [Why?] 내부 클래스의 인스턴스 변수를 못쓰는 이유?
            static 클래스의 static 메서드 sTest는 InStaticClass가 생성되지 않아도 호출될 수 있는데
            그때는 iNum 인스턴스 변수가 생성이 되지 않은 상태일 수 있음. 그래서 내부 클래스 인스턴스 변수 사용 불가
            System.out.println("InClass num = " +iNum + "(내부 클래스의 인스턴스 변수)");
            > static 클래스의 static 메서드는 static 변수만 사용 가능

             */
            System.out.println("------sTest----------");
            System.out.println("OutClass sNum = " + sNum + "(외부 클래스의 스태틱 변수)"); //스태틱 변수는 인스턴수변수보다 먼저 생성
            System.out.println("InClass inNum = " + sInNum + "(내부 클래스의 스태틱 변수)");


        }

    }

}

public class InnerTest {

    public static void main(String[] args) {

        /*
        OutClass outClass = new OutClass();
        outClass.usingClass();

         */

        /* java.anonymous_function.ch01.OutClass.InClass' has private access in 'java.anonymous_function.ch01.OutClass
        OutClass.InClass inner = outClass.new InClass();

         */

        //외부클래스의 인스턴스 변수만 사용 불가
        OutClass.InStaticClass sInClass = new OutClass.InStaticClass();
        sInClass.inTest();

        // 인스턴스생성과 무관하게 정적메서드 호출 가능
        OutClass.InStaticClass.sTest();
    }
}
