'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var _s = require('underscore.string');


var BsGenerator = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the fine Twitter Bootstrap project generator!'
        ));

        var prompts = [{
            name: 'projectname',
            message: 'Project Name?',
            default: ''
        }];

        this.prompt(prompts, function(props) {
            this.projectname = _s.slugify( props.projectname );

            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            this.directory('css', 'css');
            this.directory('js', 'js');
           	this.directory('templates', 'templates');

            this.template('_package.json', 'package.json');
            this.template('_bower.json', 'bower.json');
        },

        projectfiles: function() {
            this.src.copy('editorconfig', '.editorconfig');
            this.src.copy('jshintrc', '.jshintrc');
            this.src.copy('Gruntfile.coffee', 'Gruntfile.coffee');
        }
    },

    end: function() {
        this.installDependencies();
    }
});

module.exports = BsGenerator;
