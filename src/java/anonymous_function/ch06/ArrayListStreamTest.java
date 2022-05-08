package java.anonymous_function.ch06;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import static java.lang.System.*;

// ArrayList
public class ArrayListStreamTest {

    public static void main(String[] args) {
        List<String> sList = new ArrayList<String>();
        sList.add("Tomas");
        sList.add("Edward");
        sList.add("Jack");

        Stream<String> stream = sList.stream();
        stream.forEach(s-> out.print("foreachStream : " + s + " "));
        out.println();

        sList.stream().sorted().forEach(s-> out.print(s+ " "));
        sList.stream().map(s->s.length()).forEach(n-> out.println(n));
        sList.stream().filter(s->s.length() >= 5).forEach(s-> out.println(s));

    }

}

