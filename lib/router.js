
//subscribe on route
Router.route('/', {
    name: 'example',
    subscriptions: function() {
        orion.subs.subscribe('dictionary');
    }
});
