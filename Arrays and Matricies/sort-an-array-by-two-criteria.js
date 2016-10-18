function sortArray(input) {
    input.sort(twoCriteriaSort)
    input.forEach(el => console.log(el))

    function twoCriteriaSort(cur, next) {
        if(cur.length > next.length) {
            return 1
        } else if(cur.length < next.length) {
            return -1
        } else {
            return cur > next
        }
    }
}

sortArray([
    'zezo',
    'ange',
    'barn',
    'angi',
    'anga',
    'test',
    'Deny',
    'omen',
    'Default'
])