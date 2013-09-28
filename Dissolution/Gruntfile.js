module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch
    watch: {
      less: {
        files: ["src/less/*"],
        tasks: ["less:dev"],
        options: {
          livereload: true
        }
      },
      jade: {
        files: ["src/jade/*"],
        tasks: ["jade:dev"],
        options: {
          livereload: true
        }
      },
    }, // end watch

    // LESS
    less: {
      dev: {
        options: {
          yuicompress: false,
        },
        files: {
          "app/css/app.css": "src/less/app.less"
        }
      },
      prod: {
        options: {
          yuicompress: true,
        },
        files: {
          "app/css/app.css": "src/less/app.less"
        }
      }
    }, // end LESS

    // Jade
    jade: {
      dev: {
        options: {
          pretty: true,
          data: {
            env: 'dev'
          }
        },
        files: {
          'app/index.html': 'src/jade/index.jade'
        }
      },
      prod: {
        options: {
          pretty: false,
          data: {
            env: 'prod'
          }
        },
        files: {
          'app/index.html': 'src/jade/index.jade'
        }
      },
    }, // end Jade

    // JSHint
    jshint: {
      all: ['Gruntfile.js', 'app/js/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['less:dev', 'jade:dev']);
  grunt.registerTask('prod', ['less:prod', 'jade:prod']);

};