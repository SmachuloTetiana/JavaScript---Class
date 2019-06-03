

class Calculate {
    constructor (numberFirst, numberSecond) {
        this.numberFirst = numberFirst;
        this.numberSecond = numberSecond;
    }

    add(num1 = null, num2 = null) {
        if(num1 === null || num2 === null) {
            return this.numberFirst + this.numberSecond;
        }
    }

    sub(num1 = null, num2 = null) {
        if(num1 === null || num2 === null) {
            return this.numberFirst - this.numberSecond;
        }
    }

    mul(num1 = null, num2 = null) {
        if(num1 === null || num2 === null) {
            return this.numberFirst * this.numberSecond;
        }
    }

    division(num1 = null, num2 = null) {
        if(num1 === null || num2 === null) {
            return this.numberFirst / this.numberSecond;
        }
    }
}

var calculate = new Calculate(2, 5);

console.log(calculate.add());
console.log(calculate.sub());
console.log(calculate.mul());
console.log(calculate.division());

// create class Person with 2 methods

class Person {
    moveLeft() {
        console.log('left');
        return this;
    }
    moveRight() {
        console.log('right');
        return this;
    }
}

const person = new Person();

person.moveLeft().moveRight().moveLeft();

