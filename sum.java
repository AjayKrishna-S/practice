public class sum {
    public static void main(String[] args) {
        int arr1[] = {5, 7, 6 }; 
        int sum = 0;

        // for(int i = 0; i < arr1.length; i++)
        // {
        //     sum = sum + arr1[i];
        // }

        for(int i : arr1)
        {
            sum += i;
        }
        System.out.println(sum);
    }
}
