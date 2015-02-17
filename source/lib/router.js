Router.configure({
    layoutTemplate: 'Layout'
});


//subscribe on route
Router.route('/', {
    name: 'sliderTest',
    layoutTemplate: 'LayoutSplash'
    //yieldRegion: {'sliderTest': {to: 'sliderYield'}}
    //subscriptions: function() {
    //    orion.subs.subscribe('dictionary');
    //}
});

