# An Yeoman Generator for Bootstrap Projects:

 - [LESS](http://lesscss.org/)
 - Bootstrap mixins
 - [Lesshat](http://lesshat.madebysource.com/) mixins
 - Font Awesome option
 - Built in [Grunt](http://gruntjs.com/) 
 - HTML Templating with [Mozilla Nunjucks](http://mozilla.github.io/nunjucks/)
 - Live reload :)
 - Coffee Script support for custom scripting (if you are coffee script fan... )

It can be used as a quick way to setup responsive bootstrap projects. 


## Getting Started

#### 1. Install Yeoman

```bash
npm install -g yo
``` 

#### 2. Install bootstrap project generator

To install generator-bs from npm, run:

```bash
npm install -g generator-bs
```

Finally, initiate the generator:

```bash
# create a project folder
mkdir project_dir && cd $_
yo bs
```

Start development.

```bash
# run grunt command to start development
grunt dev
```
Start editing the **```templates/index.html```** file

###**Follow the mobile first approach ( [read more](http://code.tutsplus.com/tutorials/mobile-first-with-bootstrap-3--net-34808) )**

Use **```css/less/variables.less```** to define less variables

Use **```css/less/styles.less```** to define generic css

Use **```css/less/screen-*-min.less```** to define media query specific css

Use Mixins:
```
	// less/variables.less
	@my-btn-color:  #000;
	@my-btn-bg-color: #CCEEFF;
	@my-btn-border: #AAEECC;

	// less/styles.less
	.my-custom-btn{
    	.button-variant(@my-btn-color; @my-btn-bg-color; @my-btn-border);
    	.box-shadow(4px 4px 2px #888888);
    	font-weight : bold;
	}

	// templates/index.html
	<button class="btn my-custom-btn">My Button</button>
	
```

-----------

###Todo: 
- Grunt task for distribution build
- Ability to choose responsive menu plugin
- Support multiple pages instead of only index.html

###Issue Tracking:
Please log any issues or suggesstions @ https://github.com/surajair/generator-bs/issues

## License

MIT
