public class FibonacciRabbits {
    public static int fibRabbits(int n, int b) {
      int imm = 1;
      int mat = 0;
      
      for (int m = 1; m <= n; m++){
        int newImm = mat * b;
        mat += imm;
        imm = newImm;
      }
      return mat;
    }
  }