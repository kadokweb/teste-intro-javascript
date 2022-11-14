// function add(a:number, b:number): number {
//     return a + b;
// }
const add = (a:number, b:number):number => a + b;
console.log(add(2, 6));


const applyDiscount = (price: number, percentage: number = 5): number => {
    return price - (price * (percentage / 100))
}

console.log(applyDiscount(100))

const calcTotal = (name: string,...numbers: number[]): number => {
    let total = 0;

    numbers.forEach(num => {
        return total += num
    })
    
    return total;   
}
console.log(calcTotal('Doka',5,10,20,25));