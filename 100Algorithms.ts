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