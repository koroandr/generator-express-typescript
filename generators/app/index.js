var generators = require('yeoman-generator');
var path = require('path');
var _ = require('lodash');

module.exports = generators.Base.extend({
    initializing: function () {
        var generator = this;
        var done = this.async();

        this.log('Running Express.js + TypeScript generator');

        this.prompt([
            {
                type: 'list',
                name: 'builder',
                message: 'grunt or gulp?',
                choices: ['grunt', 'gulp']
            },
            {
                type: 'confirm',
                name: 'docker',
                message: 'create Dockerfile?'
            }
        ], function (answers) {
            generator.answers = answers;
            done();
        });
    },

    writing: {
        dir: function () {
            this.directory('bin', 'bin');
            this.directory('public', 'public');
            this.directory('routes', 'routes');
            this.directory('typings', 'typings');
            this.directory('views', 'views');
            this.directory('fixtures', 'fixtures');
        },
        app: function () {
            this.fs.copyTpl(
                this.templatePath('_package_' + this.answers.builder + '.json'),
                this.destinationPath('package.json'),
                { appname: _.kebabCase(path.basename(process.cwd())) }
            );

            if (this.answers.docker) {
                this.fs.copyTpl(
                    this.templatePath('_Dockerfile'),
                    this.destinationPath('Dockerfile'),
                    { builder: this.answers.builder }
                );
            }
        },
        projectfiles: function () {
            var generator = this;
            var files = ['app.ts', 'typings.json'];

            if (this.answers.builder === 'grunt') {
                files.push('Gruntfile.js');
            }

            if (this.answers.builder === 'gulp') {
                files.push('gulpfile.js');
            }

            _.each(
                files,
                function (name) {
                    generator.fs.copy(
                        generator.templatePath(name),
                        generator.destinationPath(name)
                    );
                }
            );
        }
    },

    install: {
        npmInstall: function () {
            var generator = this;
            generator.npmInstall(null, {skipInstall: this.options['skip-install']}, function () {
                generator.spawnCommandSync('typings', ['install']); //typings install --save node

                if (generator.answers.builder === 'grunt') {
                    generator.spawnCommandSync('grunt', ['ts']);
                } else {
                    generator.spawnCommandSync('gulp', ['ts']);
                }
            });
        }
    }


});
