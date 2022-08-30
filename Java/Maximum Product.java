public class MaxProduct {
    public int adjacentElementsProduct(int[] array) {
     int adj = array[0] * array[1];
          for(int i=0; i < array.length-1; i++) {
              if (adj <  array[i] * array[i+1]) {
                  adj = array[i] * array[i+1];
              }
          }
          return adj;
      }
    }