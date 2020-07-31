describe('calculator.js', function(){
    it('should add numbers to total', function(){
        const calculator = new Calculator();
        calculator.add(5)

        expect(calculator.total).toBe(5);
    });
    it('should subtarct numbers to total', function(){
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);

        expect(calculator.total).toBe(25);
    });
    it('should multiply total by number', function(){
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.multiply(2);

        expect(calculator.total).toBe(200);
    });
    it('should divide total by number', function(){
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.divide(2);

        expect(calculator.total).not.toBe(500);
    });
    it('should initialize the total', function(){
        const calculator = new Calculator();
        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy();
    })
    it('has constructor', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        calculator.total = 200
        calculator2.total = 200

        expect(calculator).toEqual(calculator2);
    })
    it('can be instantiated', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).toBeTruthy()
        expect(calculator2).toBeTruthy()
    })
})