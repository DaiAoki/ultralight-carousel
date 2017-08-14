Ultra Light Carousel
====

Overview
It provides a simple carousel function.

## Demo

## Requirement
- jQuery

## How to use?
1. Read the two JavaScript files below.
```HTML
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/carousel.js"></script>
```

2. Add div(class="carousel-target").It is the field for rendering the big image.
```HTML
<div class="carousel-target"></div>
```

3. Add ul(class="carousel-list") and li(class="carousel-item"). These are the field for rendering the small images.
```HTML
<ul class="carousel-list">
  <li class="carousel-item">
    <img src="path/to/image">
  </li>
</ul>
```

Optionally, you can change these variables below in accordance with your application.
```JavaScript
/* carousel.js */
var targetHeight = "300px";  // big image heightt
var targetWidth = "300px";   // big image wigth
var visibleNum = 4.3;        //visibleNum means the number of carousel-item that can be seen in the slider.
```

## Install
The case you try to start up the sample project.
git clone https://github.com/DaiAoki/ultralight-carousel

## Contribution

## Licence

Copyleft

## Author

[DaiAoki](https://github.com/DaiAoki)
