import java.lang.reflect.Array;
import java.util.Arrays;

public class multiDimensionalArray {
    
    public static void main(String args[])
    {
        int arr[][] = new int[3][3];

        for(int i = 0; i < 3; i++ )
        {
            for(int j = 0; j < 3; j++)
            {
                System.out.print((arr[i][j] = (int)(Math.random() * 10)) + " ");
            }
            System.out.println();
        }
    }
}
