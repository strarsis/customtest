module.exports = function(grunt) {

  grunt.initConfig({
    modernizr: {
      dist: {

        // Path to save out the built file.
        'dest' : 'build/modernizr-custom.js',

        // By default, source is uglified before saving
        'uglify' : false,

        // By default, this task will crawl your project for references to Modernizr tests
        // Set to false to disable
        'crawl' : false,


        // Based on default settings on http://modernizr.com/download/
        'options' : [
          'addTest',
          'testStyles',
          'setClasses'
        ],

        // Define any tests you want to implicitly include.
        'tests' : [],

        // Have custom Modernizr tests? Add paths to their location here.
        'customTests' : [
          './custom-tests/hairline.js'
        ]

      }
    }
  });

  grunt.loadNpmTasks('grunt-modernizr');

  grunt.registerTask('default',['modernizr:dist']);
}
