Package.describe({
  name: 'infinity-slider',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.0.3.1');

  api.addFiles(['cinematic.css', 'slide1-colors.css', 'slide1-positions-fullscreen.css', 'skin-dots.css',
      'cinematic.js', 'is_plus_extract.js', 'numberRoll.js', 'canvasblur.js', 'canvasgrayscale.js','infinitySlider.js'
  ], 'client');

  api.export(['slideRetroCinematic', 'autoMiddle', 'autoCenter', 'fullScreen', 'numberRoll', 'infinitySlider',
    'canvasGrayscale', 'canvasBlur'
  ],'client');
});

