function countOccurrences([target, text]) {
    let prev = -1
    let count = 0
    while(true) {
        prev = text.indexOf(target, prev + 1)
        if(prev === -1) break
        count++
    }
    console.log(count)
}

countOccurrences(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'])