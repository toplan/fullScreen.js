#fullScreen.js

lightweight and no dependencies js library let the web page automatically full-screen

#Usage

```html
    <script src="/path/to/fullScreen.js"></script>

    <script>
        // example 1:
        //
        // '#body1' min height(px) =
        // [browser inner height] - [`#header` height] - [`#footer` height]
        //

        full('#body1').fixed('#header').fixed('#footer').render();

        // example 2:
        //
        // '#body2' min height(px) =
        // [browser inner height] - [`#header` height] - [`#footer` height] + 20
        //

        var fullBody2 = full('#body2');
        fullBody2.fixed(['#header', '#footer']).plus(20).render();

        // more:
        fullBody2.autoResize(false);
        fullBody2.resize();
    </script>
```

# Method

### full(controlEle, opts);

create a fullScreen.js instance, return instance

### control(elementSelector)

The element of need to automatically covered, return instance

### fixed(elementsSelector)

the elements which fixed height, return instance

### autoResize(enable)

is reset body min height when window resize, return instance

### render()

begin to render, return true or false

### resize()

manual reset body min height, return true or false

### plus(number)

### minus(number)
