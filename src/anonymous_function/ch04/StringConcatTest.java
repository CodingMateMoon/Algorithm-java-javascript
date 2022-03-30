package anonymous_function.ch04;

public class StringConcatTest {

    public static void main(String[] args) {

        String s1 = "Hello";
        String s2 = "World";


        StringConcatImpl strImpl = new StringConcatImpl();
        strImpl.makeString("Hello", "World");

        /*
        내부적으로 익명클래스 만들어짐
         */
        StringConcat concat = (s, v) -> System.out.println(s + ",,," + v);
        concat.makeString(s1,s2);

        StringConcat concat2 = new StringConcat() {

            @Override
            public void makeString(String s1, String s2) {
                System.out.println(s1 + "....." + s2);
            }
        };

        concat2.makeString(s1, s2);
    }
}
