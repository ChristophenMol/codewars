function whichFinger(n){
    let hand = ['Thumb','Index finger','Middle finger','Ring finger','Little finger']
    while (n > 5) {
      n -= 4;
      hand = hand.reverse();
    }
    return hand[n - 1];
  }