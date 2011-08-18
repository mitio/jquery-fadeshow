# Mini Slideshow for the jQuery library

This is a very minimal slideshow implementation which uses fading for the transitions between slides. Due to its simplicity, it has a very limited set of functionality, but feel free to extend or modify it to suit your needs.

## Usage

To use this code, include `slideshow.js` and `slideshow.css` to your web page. If you use [SASS](http://sass-lang.com) and/or [Compass](http://compass-style.org/), you can use `slideshow.scss` directly.

Note that the Slideshow depends on [jQuery](http://jquery.com/), so make sure you have jQuery included in your web page prior to including `slideshow.js`.

After including the aforementioned assets, you can use the following code to embed a slideshow in your page:

	<ul class="slideshow">
		<li class="active"><img src="first-image.jpg" alt="First image" /></li>
		<li><img src="second-image.jpg" alt="Second image" /></li>
		<li><img src="third-image.jpg" alt="Third image" /></li>
	</ul>

## Bugs and feature-requests

Please use the [Github issue tracker](http://github.com/mitio/jquery-slideshow/issues) for this project.

## Patches

Please use the "Send Pull Request" functionality of Github, if you wish to send me some patches.

## Credits

Thanks to the great [jQuery](http://jquery.com/) library.

## License

Released under the MIT license.
