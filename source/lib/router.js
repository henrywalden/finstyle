
//subscribe on route
Router.route('/', {
    name: 'slider.test',
    subscriptions: function() {
        orion.subs.subscribe('dictionary');
    }
});


function testGlobal1() { console.log('test1')}

testGlobal2 = function () { console.log('test2')};