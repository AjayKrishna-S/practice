class A                     // A (super) class //every class in java has "extends Object" as a super class
{
    public A()            // Default Constructoe    // every constructor has "super();" method even it's not metioned.
    {
        super();
        System.out.println("in A");
    }

    public A(int n)         // Parameterize Constructoe
    {
        System.out.println("in A int");
    }
}

class B extends A       // B Sub class
{

    public B()
    {   
        super();
        System.out.println("in B");
    }

    public B(int  n)          // Parameterize Constructoe
    {
        this();               // this(); will call constructor of same class - (B())      
        System.out.println("in B int");
    }
}



public class Notes
{

    public static void main(String args[])
    {

        //Contructors, default constructors, parameterized constructors



        //This & Super

        B obj = new B(5);
    }
}