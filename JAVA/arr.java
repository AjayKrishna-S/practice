import java.util.Arrays;

class Dresses
{   

    int id;
    String type;
    int Size ;
    String color;
}

// class Computer
// {
//     public int findIndex(int i,  a)
//     {

//     }
// }


public class arr {
    public static void main(String args[]) {
        
        // int arr[] = new int [3];

        // arr[0] = 5;
        // arr[1] = 1;
        // arr[2] = 5;

        // for(int n : arr)
        // {
        //     System.out.println(n);
        // }

        // Dresses drs1 = new Dresses();

        // drs1.id = 1;
        // drs1.type = "shirt";
        // drs1.Size = 32;
        // drs1.color = "red";

        // Dresses drs2 = new Dresses();
        // drs2.id = 2;
        // drs2.type = "pand";
        // drs2.Size = 30;
        // drs2.color = "blue";
        
        // Dresses drs3 = new Dresses();
        // drs3.id = 3;
        // drs3.type = "pand";
        // drs3.Size = 30;
        // drs3.color = "black";

        // System.out.println(drs1.type);

        // Dresses Drsarr[] = new Dresses[3];

        // Drsarr[0] = drs1;
        // Drsarr[1] = drs2;
        // Drsarr[2] = drs3;

        // for(int i = 0; i < Drsarr.length; i ++)
        // {
        //     System.out.println(Drsarr[i].color);
        // }

        

            // Java program to find the index of an array element.

            int arr[] = {5, 6, 7, 2, 4 };

            // int n = 7;
            // int idx = -1;

            // for(int i = 0; i < arr.length; i++)
            // {
            //     if(arr[i] == n)
            //     {
            //         idx = i;
            //     }
            // };

            // System.out.println(idx);


            // to remove a specific element from an array


            // int idx = 1;

            // for(int i = idx; i < arr.length - 1; i++)
            // {
            //     arr[i] = arr[i + 1];
            // };

            // arr[arr.length - 1 ] = 0;

            // System.out.println(Arrays.toString(arr));


            int l1[] = {9,9,9,9,1,9,5};
            int l2[] = {9,9,8,2};

            

            String l1str = new String();
            String l2str = new String();

            for(int i = l1.length -1; i >= 0; i --)
            {
                l1str += l1[i];
            }
            for(int i = l2.length -1; i >= 0; i --)
            {

                l2str += l2[i];
            }
            System.out.println(l1str);
            System.out.println(l2str);

            int sum = Integer.parseInt(l1str) + Integer.parseInt(l2str);

            char[] CharArray = String.valueOf(sum).toCharArray();
            
            System.out.println(CharArray);
    }
}
