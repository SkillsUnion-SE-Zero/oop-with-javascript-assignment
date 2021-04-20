class SimpleCalculator{
    
    // private properties
    #firstValue=0;
    #secondValue=0;

    // constructor
    constructor(){

    }

    // setters
    set firstValue(value){
        if(typeof value !== 'number'){
            throw new TypeError("firstValue must be type integer");
        }
        this.#firstValue = value;
    }

    set secondValue(value){
        if(typeof value !== 'number'){
            throw new TypeError("secondValue must be type integer");
        }
        this.#firstValue = value;
    }

    sum(){
        return this.#firstValue + this.#secondValue;
    }
}

const cal = new SimpleCalculator();
cal.firstValue = 10;
cal.secondValue = 10;
console.log('sum', cal.sum());

class TaxCalculator extends SimpleCalculator {
    
    #tax=0;

    constructor(tax = 0.07){
        super();
        this.#tax = tax;
    }

    sum(){
        return super.sum() * this.#tax;
    }

}

const taxCal = new TaxCalculator();
taxCal.firstValue = 10;
taxCal.secondValue = 10;
console.log('tax', taxCal.sum());