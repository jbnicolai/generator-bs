'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

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
            this.projectname = props.projectname;

            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            this.dest.mkdir('css');
            this.dest.mkdir('css/less');
            this.dest.mkdir('js');
            this.dest.mkdir('js/coffee');
            this.dest.mkdir('templates');

            this.template('_package.json', 'package.json');
            this.template('_bower.json', 'bower.json');
        },

        projectfiles: function() {
            this.src.copy('editorconfig', '.editorconfig');
            this.src.copy('jshintrc', '.jshintrc');
        }
    },

    end: function() {
        //this.installDependencies();
    }
});

module.exports = BsGenerator;
