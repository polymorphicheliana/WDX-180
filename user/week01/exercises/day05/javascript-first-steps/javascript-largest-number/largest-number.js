function findMaxNumber(num1, num2){
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

    // running & testing our findMaxNumber() function:
    // Don't worry about the code below. It's just there to test your code above.
    const checkMax1 = findMaxNumber(10, 5);
    console.log('Max Number 1:',checkMax1);

    const checkMax2 = findMaxNumber(10, 15);
    console.log('Max Number 2:',checkMax2);

    const checkMax3 = findMaxNumber(100, 100);
    console.log('Max Number 3:',checkMax3);

    console.assert( checkMax1 === 10, "Ops, was expecting 10, got ", checkMax1);
    console.assert( checkMax2 === 15, "Ops, was expecting 15, got ", checkMax2);
    console.assert( checkMax3 === 100, "Ops, was expecting 100, got ", checkMax3);

    try {
        if ( gloval ) { global.findMaxNumber = findMaxNumber;
}
    } catch(e){}
