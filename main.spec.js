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
    })
})