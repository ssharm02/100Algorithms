function absoluteValue(a: number[]) : number {
    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length /2)];
}

console.log(absoluteValue([2,4,6,7,8]));
console.log(absoluteValue([2,4,7]));
console.log(absoluteValue([2,4,7,6,6,8]));

//Second algorithm
function addNum(a: number, b: number) : number {
    return a + b;
}

function addAllNums(...param: []) : number {
    let total = 0;

    param.forEach((num) => {
        total += num;
    })

    return total;
}
console.log(addNum(3,5));

console.log(addAllNums(1,2,34,56));

//add border to array strings
function addBorder(picture: string[]) : any {
    
    const wall = '*'.repeat(picture[0].length + 2);

    picture.unshift(wall);
    picture.push(wall);

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*')
    }

    return picture;
}

//Add two numbers 
console.log(addBorder(["abc"]))

function addTwoDigits(n: any) : number {
    const nums = n.toString().split('');
    console.log(nums)
    return nums.reduce((a: string, b: string) => {
        return parseInt(a) + parseInt(b);
    })
}

console.log(addTwoDigits(23));


//return largest product in an array
function adjacementElement(inputArray: number[]): number {

    let largestProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length -1; i++) {
        const product = inputArray[i] * inputArray[i + 1];
        
        largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjacementElement([3,6,-2,-5,7,3]));

//largest string in an array of string

function allLongestString(inputArray: string[]): string[] {
    let longestLength = 0;
    let longestWords = [];
    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    })

    inputArray.forEach((word: string) => {
        if (word.length === longestLength) {
            longestWords.push(word);
        }
    })
    return longestWords;
}

console.log(allLongestString(['abc', 'adafad', 'sadfdasf']))


//check if array values are increasing or decreasing
function allmostIncreasingSeq(sequence: number[]): boolean {

    let count = 0;

    for (let i = 0; i < sequence.length; i++) {
        if(sequence[i] <= sequence[i-1]) {
            count++;
            if(sequence[i] <= sequence[i-2] &&
                sequence[i+1] <= sequence[i-1]) {
                return false;
            }
        }
    }

    return count <= 1;
}

console.log(allmostIncreasingSeq(1,3,2,1);


function alphabetShift(inputString: string): string {
    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let inputShifted = inputString.split('');
console.log(inputShifted);

for (let i = 0; i < inputShifted.length; i++) {
let index = 0;

if(inputShifted[i] !== 'z') {
    index = alphabet.indexOf(inputShifted[i]) + 1;
}
inputShifted[i] = alphabet[index];
}

return inputShifted.join('');
}

console.log(alphabetShift('Sarthak'));

function alphaSubSequence(s: string): boolean {

    const chars: string[] = s.split('');
    const charValues: number[] = [];

    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0))
    });

    //if statement detects false values
    if (new Set(charValues).size != charValues.length) {
        return false;
    }

    for (let i = 0; i < charValues.length; i++) {
        
        if(charValues[i] >= charValues[i + 1]) {
            return false;
        }
    }

    return true;

}

console.log(alphaSubSequence('effg'));
console.log(alphaSubSequence('cdce'));
console.log(alphaSubSequence('ace'));
console.log(alphaSubSequence('zab'))

//add even and odd in an array
function alteratingSums(a: number[]): number[] {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((element, index) => {
        if(index % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    })

    return [evenSum, oddSum];
}


console.log(alteratingSums([50,60,60, 45, 70]))