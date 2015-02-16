
Package.describe({
    name: 'infinity-slider',
    summary: 'Background slider plugin',
    version: '1.0.0'

});

Package.onUse(function(api, where) {
    api.versionsFrom('0.9.0');

    api.use(['jquery'], 'client');

    api.export(['numberRoll', 'autoCenter', 'autoMiddle', 'fullScreen', 'slideRetroCinematic']);

    api.addFiles(['infinitySlider.js' ,'cinematic.js', 'canvasblur.js' ,'is_plus_extract.js','numberRoll.js',
        'cinematic.css', 'skin-dots.css', 'slide1-positions-fullscreen.css'
    ], 'client');

});