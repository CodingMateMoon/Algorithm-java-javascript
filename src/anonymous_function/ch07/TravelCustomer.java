package anonymous_function.ch07;

public class TravelCustomer {

    // 고객 속성
    private String name;   //이름
    private int age;       //나이
    private int price;     //가격

    // 여행객들에 대한 operation 구현.
    public TravelCustomer(String name, int age, int price) {
        this.name = name;
        this.age = age;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public int getPrice() {
        return price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String toString() {
        return "name: " + name + "age: " + age + "price: " + price;

    }

}
