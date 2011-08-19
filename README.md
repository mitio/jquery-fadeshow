# Mini slideshow for the jQuery library

Fadeshow is a very minimal slideshow implementation which uses fading for the transitions between slides. Due to its simplicity, it has a very limited set of functionality, but feel free to extend or modify it to suit your needs.

## Usage

To use this code, include `fadeshow.js` and `fadeshow.css` to your web page. If you use [SASS](http://sass-lang.com) and/or [Compass](http://compass-style.org/), you can use `fadeshow.scss` directly.

Note that Fadeshow depends on [jQuery](http://jquery.com/), so make sure you have jQuery included in your web page prior to including `fadeshow.js`.

After including the aforementioned assets, you can use the following code to embed a fading slideshow in your page:

	<ul class="fadeshow">
		<li class="active"><img src="first-image.jpg" alt="First image" /></li>
		<li><img src="second-image.jpg" alt="Second image" /></li>
		<li><img src="third-image.jpg" alt="Third image" /></li>
	</ul>

## Bugs and feature-requests

Please use the [Github issue tracker](http://github.com/mitio/jquery-fadeshow/issues) for this project.

## Patches

Please use the "Send Pull Request" functionality of Github, if you wish to send me some patches.

## Credits

Thanks to the great [jQuery](http://jquery.com/) library.

## License

Released under the MIT license.
