# Simple-Parallax-HTML-JavaScript

<img src="/screenshot/show_parallax.gif">

##### The using this animation on your project HTML is really simple and ease 
##### You don't need to have a CSS file, the JavaScript file takes charge certain properties

# Use
##### copy the parallax.js file and note this `<script>` tag on your HTML file

```html
<script src="./parallax.js"></script>
```

### First
Create a `<div>` tag with a name of class `parallax-container` 
> The name of this class is really really important.

```html
<div class="parallax-container"></div>
```

### Secondly
Insert the attribute `data-type` and insert the value `parallax` to this attribute
> This value `parallax` is for notifying than the element is executable as animation of the Parallax.

```
data-type="parallax"
```

### Thirdly
Insert the attribute `data-min-height` and insert the value `number PX` to this attribute
> This is to configure the minimal height, if this value is empty, she send an null value and the height minimal will be of 200px.

```
data-min-height="380px"
```

### Fourth
Insert the attribute `data-src` and insert the directory access of your image
> This attribute `data-src` is for applying of your image, `src` correspond to Source of your image, if this attribute send an value null or if this attribute is not insert on your `<div>` tag or if the diretory of access to your image is incorrect, the `console.error()` stipulate that an error is committed.

```
data-src="./parallax-background.png"
```
# More

##### Note that your image will execute like an Parallax, the animation will be good, but you can also add an animation of scrolling for the image and exclusive for your image, this is for an parallax again more thrust and more beautiful
Insert the attribute `data-animation` in your `<div>` tag and insert the `true` value to this attribute
> Now look at how the animations acts like with and without this attribute. And look at the difference.

```
data-animation="true"
```

##### This attribute is for the control of the speed of animation of the Parallax
Insert the attribute `data-division` in your `<div>` tag and insert an value encrypted (a number).
> 4 is a default number

```
data-division="4"
```

### List of all attributes
###### The attribute `data-min-width` is obsolete for the moment

* data-type
* data-min-height
* data-min-width
* data-src
* data-animation
* data-division


# License

```
Copyright (c) 2019 MSay2

Licensed to the Apache Software Foundation (ASF) under one or more contributor
license agreements. See the NOTICE file distributed with this work for
additional information regarding copyright ownership. The ASF licenses this
file to you under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
```