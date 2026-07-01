import java.util.*;

public class DataStructuresAndAlgorithms {

    public static void main(String[] args) {

        int[] arr = {45, 12, 89, 23, 67, 10};

        // 1. Arrays
        System.out.println("===== ARRAYS =====");
        System.out.println("Original Array:");
        printArray(arr);

        // 2. Linear Search
        System.out.println("\n===== LINEAR SEARCH =====");
        int key = 23;
        linearSearch(arr, key);

        // 3. Binary Search
        System.out.println("\n===== BINARY SEARCH =====");
        Arrays.sort(arr);
        System.out.print("Sorted Array: ");
        printArray(arr);

        binarySearch(arr, 67);

        // 4. Bubble Sort
        System.out.println("\n===== BUBBLE SORT =====");
        int[] bubble = {5,4,3,2,1};
        bubbleSort(bubble);

        // 5. Selection Sort
        System.out.println("\n===== SELECTION SORT =====");
        int[] selection = {64,25,12,22,11};
        selectionSort(selection);

        // 6. Insertion Sort
        System.out.println("\n===== INSERTION SORT =====");
        int[] insertion = {9,5,1,4,3};
        insertionSort(insertion);

        // 7. Stack
        System.out.println("\n===== STACK =====");
        Stack<Integer> stack = new Stack<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Stack: " + stack);
        System.out.println("Pop: " + stack.pop());
        System.out.println("After Pop: " + stack);

        // 8. Queue
        System.out.println("\n===== QUEUE =====");
        Queue<Integer> queue = new LinkedList<>();

        queue.add(100);
        queue.add(200);
        queue.add(300);

        System.out.println("Queue: " + queue);
        System.out.println("Remove: " + queue.remove());
        System.out.println("After Remove: " + queue);
    }

    // Array Printing
    static void printArray(int[] arr) {
        for(int num : arr)
            System.out.print(num + " ");
        System.out.println();
    }

    // Linear Search
    static void linearSearch(int[] arr, int key) {

        for(int i=0;i<arr.length;i++) {
            if(arr[i]==key) {
                System.out.println(key + " found at index " + i);
                return;
            }
        }

        System.out.println(key + " not found");
    }

    // Binary Search
    static void binarySearch(int[] arr,int key){

        int low=0;
        int high=arr.length-1;

        while(low<=high){

            int mid=(low+high)/2;

            if(arr[mid]==key){
                System.out.println(key+" found at index "+mid);
                return;
            }

            if(arr[mid]<key)
                low=mid+1;
            else
                high=mid-1;
        }

        System.out.println(key+" not found");
    }

    // Bubble Sort
    static void bubbleSort(int[] arr){

        for(int i=0;i<arr.length-1;i++){
            for(int j=0;j<arr.length-i-1;j++){

                if(arr[j]>arr[j+1]){

                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }

        printArray(arr);
    }

    // Selection Sort
    static void selectionSort(int[] arr){

        for(int i=0;i<arr.length-1;i++){

            int min=i;

            for(int j=i+1;j<arr.length;j++){

                if(arr[j]<arr[min])
                    min=j;
            }

            int temp=arr[min];
            arr[min]=arr[i];
            arr[i]=temp;
        }

        printArray(arr);
    }

    // Insertion Sort
    static void insertionSort(int[] arr){

        for(int i=1;i<arr.length;i++){

            int key=arr[i];
            int j=i-1;

            while(j>=0 && arr[j]>key){

                arr[j+1]=arr[j];
                j--;
            }

            arr[j+1]=key;
        }

        printArray(arr);
    }
}