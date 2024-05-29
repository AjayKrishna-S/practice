

class Calc
{
    public int add(int n1, int n2)
    {
        return n1 + n2;
    }
    public int sub(int n1, int n2)
    {
        return n1 - n2;
    }
}

class AdvCalc extends Calc
{
    public int multi(int n1, int n2)
    {
        return n1 * n2;
    }

    public int div(int n1, int n2)
    {
        return n1 / n2;
    }
}
class SupCalc extends AdvCalc
{
    public double power(int n1, int n2)
    {
        return Math.pow(n1, n2);
    }
}


public class Notes
{

    public static void main(String args[])
    {

        SupCalc obj = new SupCalc();
        int r = obj.add(5, 7);
        int r2 = obj.sub(2, 4);
        int r3 = obj.multi(2, 7);
        int r4 = obj.div(5, 4);
        double r5 = obj.power(10, 2);

        System.out.println(" output : " + r +" : "+ r2 +" : "+ r3 +" : "+ r4 +" : "+ r5);
    }
}