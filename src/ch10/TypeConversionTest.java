package ch10;

public class TypeConversionTest {

    public static void main(String[] args) {
        int bNum = 125;
        byte iNum = (byte) bNum;

        System.out.println(iNum);

        double dNum = 3.14;
        int inum = (int) dNum;
        System.out.println(iNum);

        dNum = 1.2;
        float fNum = 0.9F;

        int iNum1 = (int)dNum + (int) fNum;
        int iNum2 = (int)(dNum +fNum);

        System.out.println(iNum1);
        System.out.println(iNum2);


    }
}
