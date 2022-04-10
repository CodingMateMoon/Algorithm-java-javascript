package anonymous_function.ch07;

import java.util.ArrayList;
import java.util.List;

public class TravelTest {

    public static void main(String[] args) {

        TravelCustomer customerLee = new TravelCustomer("이순신", 40, 100);
        TravelCustomer customerKim = new TravelCustomer("김유신", 20, 100);
        TravelCustomer customerHong = new TravelCustomer("홍길동", 13, 50);

        List<TravelCustomer> customerList = new ArrayList<>();
        customerList.add(customerLee);
        customerList.add(customerKim);
        customerList.add(customerHong);

        System.out.println("고객 명단 추가된 순서대로 출력");
        customerList.stream().map(c->c.getName()).forEach(s-> System.out.println(s));

        System.out.println("여행비용");
        System.out.println(customerList.stream().mapToInt(c->c.getPrice()).sum());

        System.out.println("20세 이상 고객 명단 정렬하여 출력");
        /**
         * 20세 이상의 고객의 이름을 가져온 다음 정렬하고 출력. 중간 연산은 여러개가 쓰일 수 있습니다. 최종연산 단 한번만 돌리고 최종연산을 돌릴 때 중간 연산이 일괄적으로 수행됩니다.
         * 어떻게 sort할 것인지에 대해 comparable이 구현되어있지 않다면 구현해야합니다.
         * customer : c, String : s
         */
        customerList.stream().filter(c->c.getAge() >= 20).map(c->c.getName()).sorted().forEach(s-> System.out.println(s));

        /*
        TravelCustomer customerLee = new TravelCustomer("이순신", 40, 100);
        TravelCustomer customerKim = new TravelCustomer("김유신", 20, 100);
        TravelCustomer customerHong = new TravelCustomer("홍길동", 13, 50);

        List<TravelCustomer> customerList = new ArrayList<>();
        customerList.add(customerLee);
        customerList.add(customerKim);
        customerList.add(customerHong);

        System.out.println("== 고객 명단 추가된 순서대로 출력 ==");
        customerList.stream().map(c->c.getName()).forEach(s->System.out.println(s));

        int total = customerList.stream().mapToInt(c->c.getPrice()).sum();
        System.out.println("총 여행 비용은 :" + total + "입니다");

        System.out.println("== 20세 이상 고객 명단 정렬하여 출력 ==");
        customerList.stream().filter(c->c.getAge() >= 20).map(c->c.getName()).sorted().forEach(s->System.out.println(s));

         */
    }

}

