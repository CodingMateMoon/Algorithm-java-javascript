package java.anonymous_function.ch02;


/*
FunctionalInterface : 컴파일러에 정보를 줌. 메서드를 2개이상 선언할 수 없음
 */
@FunctionalInterface
public interface Add {
    public int add(int x, int y);
    /* 메소드가 2개인 경우 람다식 구현 시 2개중 어느 인터페이스를 구현해야하는지 알 수 없음.
    public int sub(int x, int y);

     */
}
