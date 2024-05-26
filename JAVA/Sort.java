
import java.util.Arrays;

public class Sort {
    
    public static void main(String args[])
    {
        int my_array1[] = {
            1789, 2035, 1899, 1456, 2013, 
            1458, 2458, 1254, 1472, 2365, 
            1456, 2165, 1457, 2456
        };
        

        String my_array2[] = {
            "Java",
            "Python",
            "PHP",
            "C#",
            "C Programming",
            "C++"
        };  

        Arrays.sort(my_array1);

        System.out.println("sort : " + Arrays.toString(my_array1));

        Arrays.sort(my_array2);

        System.out.println("sort : " + Arrays.toString(my_array2));



        //print the grid


        for(int i = 0; i <= 10; i++)
        {
            for(int j = 0; j <= 10; j++)
            {
                System.out.print("* ");
            }
            System.out.println();
        }
    

        // calculate the average value of array elements

        int arr[] = {5, 6, 7, 9, 1, 3};
        int sum = 0;

        for(int i = 0; i < (arr.length); i++ )
        {
            sum += arr[i];
        }
        System.out.println(sum / (arr.length));
        
    }
}
