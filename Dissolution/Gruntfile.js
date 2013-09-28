module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // watch: {
    //   styles: {
    //     files: ["css/less/*"],
    //     tasks: ["less:development"],
    //     options: {
    //       livereload: true
    //     }
    //   },
    // }, // end watch

    // less: {
    //   development: {
    //     options: {
    //       paths: ["css/less"]
    //     },
    //     files: {
    //       "css/main.css": "css/less/main.less"
    //     }
    //   }
    // } // end LESS

    // jade: {
    //
    // }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};