describe('main.js', function(){
    describe('calculate', function(){
        it('validate expression', function(){
            spyOn(window, 'updateResult').and.stub();
            calculate('3+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('calls add', function(){
            spyOn(Calculator.prototype, 'add');

            calculate('3+4')

            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
        })
        it('calls multiply', function(){
            const spy = spyOn(Calculator.prototype, 'multiply');

            calculate('3*8')

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(8);
            expect(spy).toHaveBeenCalledTimes(1);
        })

        it('calls calls updateResult using and.callThrogh()', function(){
            spyOn(window, 'updateResult')
            spyOn(Calculator.prototype, 'multiply').and.callThrough();

            calculate('5*5')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25);
            // expect(spy).toHaveBeenCalledTimes(1);
        });

        it('calls  updateResult using and.callFake()', function(){
            spyOn(window, 'updateResult')
            spyOn(Calculator.prototype, 'multiply').and.callFake(function(){
                //
                //
                return 100
            })

            calculate('5*5')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(100);
            // expect(spy).toHaveBeenCalledTimes(1);
        });

        it('calls  updateResult using and.returnValue', function(){
            spyOn(window, 'updateResult')
            spyOn(Calculator.prototype, 'multiply').and.returnValue('whatever it returns');

            calculate('5*5')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever it returns');
            // expect(spy).toHaveBeenCalledTimes(1);
        });
        it('dest not handle errors', function(){
            spyOn(Calculator.prototype, 'multiply').and.throwError('some error');

            expect(function(){calculate('5*5')}).toThrowError('some error');
        })
        
    })
})