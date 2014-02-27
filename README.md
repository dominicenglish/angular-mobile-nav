## angular-mobile-nav

An AngularJS module that provides a mobile navigation menu that slides in from the right side of the page.

## Setup

Include JS and CSS files
```html
<link rel="stylesheet" href="dist/angular-mobile-nav.min.css" />

<script type="text/javascript" src="dist/angular-mobile-nav.min.js"></script>
```

Add the module as a dependency in your app
```javascript
angular.module('my-app', ['de.angular-mobile-nav']);
```

Use the following HTML structure:
```html
<div id="de-nav">
<!-- navigation -->
</div>

<div id="de-content">
<!-- page content -->
</div>
```

Hide and show the menu by calling `mobileNav.toggle()`, `mobileNav.show()`, or `mobileNav.hide()`.
```html
<button ng-click="mobileNav.toggle()">Toggle Menu</button>
```

## Demo
A demo node app exists in the demo directory.

Install the dev dependencies.
```
# .../angular-mobile-nav
npm install --dev
```

And then run grunt
```
# .../angular-mobile-nav
grunt
```

View demo at `http://localhost:4040/`
