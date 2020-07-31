describe('calculator.js', function(){
    describe('calculator', function(){
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
        });
        it('instatiate unique objects', function(){
            const calculator = new Calculator();
            const calculator2 = new Calculator();
    
            expect(calculator).not.toBe(calculator2);
        });
        it('has common operations', function(){
            const calculator = new Calculator();
            expect(calculator.exponent).toBeUndefined();
            expect(calculator.add).toBeDefined();
        });
    
        it('can overwite total', function(){
            const calculator = new Calculator();
            calculator.total = null;
            expect(calculator.total).toBeNull();
    
            expect(calculator.constructor.name).toContain("Calc");
        });
        it('can overwite total', function(){
            const calculator = new Calculator();
            calculator.total = 10;
            calculator.multiply('a')
    
            expect(calculator.total).toBeNaN();
        });
        it('handles divide by zero', function(){
            const calculator = new Calculator();
            
            expect(function(){calculator.divide(0)}).toThrow();
            expect(function(){calculator.divide(0)}).toThrowError(Error);
            expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
        });
        it('returns total', function(){
            const calculator = new Calculator();
            calculator.total = 50;
            expect(calculator.add(20)).toBe(70);
            expect(calculator.total).toMatch(/-?\d+/);
            expect(typeof calculator.total).toMatch('number');
    
            expect(typeof calculator.total).toEqual(jasmine.anything());
            
            expect(undefined).toEqual(jasmine.anything());
            expect(null).toEqual(jasmine.anything());
        })
    })
})