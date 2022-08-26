function collatz(n) {
    let count = 1;
    while (n > 1) {
      count ++;
    n = n % 2 == 0 ? n / 2 : n * 3 + 1;
      }
      return count;
    }
