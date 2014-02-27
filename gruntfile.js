module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            default: {
                tasks: ['nodemon:default', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        sass: {
            default: {
                options: {
                    style: 'compressed',
                    sourcemap: true,
                    noCache: true
                },
                files: {
                    'dst/angular-mobile-nav.min.css': 'src/angular-mobile-nav.scss',
                    'demo/public/angular-mobile-nav.min.css': 'src/angular-mobile-nav.scss'
                }
            }
        },
        nodemon: {
            default: {
                script: 'demo/server.js',
                options: {
                    watch: ['demo/server.js'],
                    cwd: __dirname
                }
            }
        },
        uglify: {
            default: {
                files: {
                    'dst/angular-mobile-nav.min.js': 'src/angular-mobile-nav.js',
                    'demo/public/angular-mobile-nav.min.js': 'src/angular-mobile-nav.js'
                }
            }
        },
        watch: {
            sass: {
                files: ['src/*.scss'],
                tasks: ['sass']
            },
            css: {
                files: ['demo/public/*.css'],
                options: {
                    livereload: true
                }
            },
            jade: {
                files: ['demo/*.jade'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['demo/**/*.js'],
                options: {
                    livereload: true
                }
            },
            jsSrc: {
                files: ['src/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concurrent']);
}