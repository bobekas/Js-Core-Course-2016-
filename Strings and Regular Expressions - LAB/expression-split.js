function expressionSplit(input) {
    let expression = input[0];
    let elements = expression
        .split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}


expressionSplit(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'])