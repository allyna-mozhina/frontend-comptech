const LIBS = [
    'jquery',
    'angular',
    'angular-ui-router',
    'lodash'
];

module.exports = (grunt) => {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        notify: {
            build: {
                options: {
                    title: 'Build complete',
                    message: 'Build complete'
                }
            }
        },

        browserify: {
            libs: {
                src: ['.'],
                dest: './build/js/libs.js',
                options: {
                    alias: LIBS.map((n) => `${n}:`)
                }
            },
            app: {
                src: [
                    './src/app/app.js',
                    './src/templates.js'
                ],
                dest: './build/js/app.js',
                options: {
                    browserifyOptions: { debug: true },
                    transform: [['babelify', {
                        presets: ['es2015'],
                        plugins: [['angularjs-annotate', { explicitOnly: true }]]
                    }]],
                    external: LIBS
                }
            }
        },

        less: {
            app: {
                files: { './build/css/app.css': ['./src/app/**/*.less'] }
            },
            bootstrap: {
                files: { './build/css/libs.css': ['./node_modules/bootstrap/dist/css/bootstrap.css'] }
            }
        },

        ngtemplates: {
            app: {
                cwd: './src/app',
                src: './**/*.html',
                dest: './src/templates.js',
                options: {
                    module: 'templates',
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    },
                    standalone: true
                }
            }
        },

        copy: {
            index: {
                files: [{
                    src: './src/app/index.html',
                    dest: './build/index.html'
                }]
            },
            favicon: {
                files: [{
                    src: './src/app/favicon.png',
                    dest: './build/favicon.png'
                }],
                expand: true
            }
        },

        uglify: {
            libs: {
                src: './build/js/libs.js',
                dest: './build/js/libs.min.js'
            },
            app: {
                src: './build/js/app.js',
                dest: './build/js/app.min.js'
            }
        },

        cssmin: {
            app: {
                src: './build/css/app.css',
                dest: './build/css/app.min.css'
            }
        },

        eslint: {
            build: {
                src: ['./src/app/**/*.js'],
                options: {
                    configFile: 'eslint.json',
                    parserOptions: { sourceType: 'module' }
                }
            }
        },

        watch: {
            scripts: {
                files: ['./src/app/**/*.js'],
                tasks: ['eslint', 'browserify:app', 'notify:build'],
                options: { spawn: false }
            },
            styles: {
                files: ['./src/app/**/*.less'],
                tasks: ['less:app', 'notify:build'],
                options: { spawn: false }
            },
            templates: {
                files: ['./src/app/**/*.html'],
                tasks: ['ngtemplates:app', 'browserify:app', 'notify:build'],
                options: { spawn: false }
            },
            index: {
                files: ['./src/app/index.html'],
                tasks: ['copy:index', 'notify:build'],
                options: { spawn: false }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './build'
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        './build/**/*.less',
                        './build/**/*.js'
                    ]
                },
                options: {
                    proxy: 'localhost:8080',
                    watchTask: true
                }
            }
        }
    });

    grunt.registerTask('default', ['copy', 'less', 'ngtemplates', 'browserify', 'eslint:build', 'cssmin', 'uglify']);
    grunt.registerTask('dev', ['default', 'connect', 'browserSync', 'watch']);
};
