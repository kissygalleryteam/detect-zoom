KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('detect-zoom', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/detect-zoom/2.0.0/']});