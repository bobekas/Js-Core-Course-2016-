function secretData(input) {
    let dataPattern = /((\_[a-zA-Z0-9]+)|(\![A-Za-z0-9]+)|(\+[0-9\-]{10})|(\*([A-Z][a-zA-Z]*)))(?=\t|\s|$)/g
    input.forEach(line => console.log(line.replace(dataPattern, p => '|'.repeat(p.length))))
}

secretData(
    [
        'Agent *Ivankov was in the room when it all happened.',
        'The person in the room was heavily armed.',
        'Agent *Ivankov had to act quick in order.',
        'He picked up his phone and called some unknown number.',
        'I think it was +555-49-796',
        'I can\'t really remember...',
        'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
        'Then after that he disappeared from my sight.',
        'As if he vanished in the shadows.',
        'A moment, shorter than a second, later, I saw the person flying off the top floor.',
        'I really don\'t know what happened there.',
        'This is all I saw, that night.',
        'I cannot explain it myself...'
    ]
)
function addRemoveArray(input) {
        let arr = [];
        for (let i = 0; i < input.length; i++){
                if (input[i] == "add"){
                        arr[i] = i + 1;
                }
                else if (input[i] == "remove"){
                        delete arr[i - 1];
                }
        }
        let result = 0;
        for (let i = 0; i < arr.length; i++){
                if (arr[i] != "" && arr[i] != undefined){
                        console.log(arr[i]);
                        result++;
                }
        }
        if (result == 0)
                console.log("Empty")
}