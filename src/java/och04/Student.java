package java.och04;

public class Student {
    public int studentID;
    public String studentName;
    public String address;

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentName() {
        return studentName;
    }

    public void showStudentInfo(){
        System.out.println(studentID + "학번 학생의 이름은 " + studentName + "이고, 주소는 " + address + "입니다.");

    }
}
