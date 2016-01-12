var generators = require('yeoman-generator');
var path = require('path');
var _ = require('lodash');

module.exports = generators.Base.extend({
    initializing: function () {
        this.log('Running Express.js + TypeScript generator')

    },

    writing: {
        dir: function () {
            this.directory('bin', 'bin');
            this.directory('public', 'public');
            this.directory('routes', 'routes');
            this.directory('typings', 'typings');
            this.directory('views', 'views');
        },
        app: function () {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                { appname: _.kebabCase(path.basename(process.cwd())) }
            );
        },
        projectfiles: function () {
            var generator = this;
            _.each(
                ['Gruntfile.js', 'app.ts', 'Dockerfile', 'tsd.json'],
                function (name) {
                    generator.fs.copy(
                        generator.templatePath(name),
                        generator.destinationPath(name)
                    )
                }
            );
        }
    },

    install: {
        npmInstall: function () {
            var generator = this;
            generator.npmInstall(null, {skipInstall: this.options['skip-install']}, function () {
                generator.spawnCommandSync('tsd', ['install']); //tsd install --save node
                generator.spawnCommandSync('grunt', ['ts']);
            });
        }
    }


});
