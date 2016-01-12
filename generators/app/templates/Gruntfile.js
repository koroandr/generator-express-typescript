module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**", '!bin/**'],
                options: {
                    module: 'commonjs'
                }
            }
        },
        clean: {
            all: ['**/*.js', '**/*.js.map', '!node_modules/**', '!Gruntfile.js', '!bin/**', 'test/**/*.js', 'test/**/*.js.map']
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-clean');
};
