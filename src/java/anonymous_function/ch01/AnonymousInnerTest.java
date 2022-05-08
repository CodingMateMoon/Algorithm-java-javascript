package java.anonymous_function.ch01;

// 익명 내부 클래스
class Outer2{

    /* 자바 lang 패키지 인터페이스. 클래스를 스레드화할 때 필요한 run 메소드 구현할 때 사용.
    1. 스레드 클래스 extends
    2. Runnable 인터페이스 implement. Runnable 반환

     */
    int outNum = 100;
    static int sNum = 200;


    //내부클래스
    // 매개변수 메소드 호출될 때 스택 메모리에 생성. 메소드 호출이 끝나면 로컬변수 매개변수 없어짐.
    /*
    run 또 호출될 수 없음. 이런 경우 final로 처리. 외부 메소드에 있는 변수 익명내부클래스안에서 쓸 때 오류남. 예전에는 직접적으로 파이널로 선언하라 되어있었으나
    요즘엔 컴파일러가 알아서 자동으로 final로 바꾸고 스택에 안잡힘. 메소드 호출이 끝나도 남음. 상수화돼서 상수메모리 constant area에 저장
     */
    Runnable getRunnable(int i){

        int num = 10;

        return new Runnable() {

//        class MyRunnable implements  Runnable {

            int localNum = 1000;

            // run : getRunnnable

            @Override
            public void run(){
                //num = 200;   //에러 남. 지역변수는 상수로 바뀜
                //i = 100;     //에러 남. 매개 변수 역시 지역변수처럼 상수로 바뀜. 언제호출될지 모르기 때문.
                System.out.println("i =" + i);
                System.out.println("num = " +num);
                System.out.println("localNum = " +localNum);

                System.out.println("outNum = " + outNum + "(외부 클래스 인스턴스 변수)");
                System.out.println("Outter.sNum = " + Outer2.sNum + "(외부 클래스 정적 변수)");

            }
        };
//        return new MyRunnable();
    }

    Runnable runnable = new Runnable() {
        @Override
        public void run() {
            System.out.println("Runnable 구현 익명 클래스");
        }
    };

}

public class AnonymousInnerTest {

    public static void main(String[] args) {

        Outer2 out = new Outer2();

        Runnable runner = out.getRunnable(100);
        // getRunnable 호출돼서 끝남 스택에 잡혓으면 없어짐. 그러나 run에서 호출됨


        runner.run();
        runner.run();
        out.runnable.run();
    }
}
