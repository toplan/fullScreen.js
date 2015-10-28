#fullScreen.js

lightweight and no dependencies js library let the web page automatically full-screen

#Usage

```html
    <script src="/path/to/fullScreen.js"></script>

    //example 1:
    <script>
        //
        //body1`s min height(px) = [browser inner height] - [`#header` height] - [`#footer` height]
        new full('#body1').fixed('#header').fixed('#footer').render()

        //
        //body2`s min height(px) = [browser inner height] - [`#header` height] - [`#footer` height] - 20
        new full('#body2').fixed(['#header', '#footer']).minus(20).render()

        //
        //body2`s min height(px) = [browser inner height] - [`#header` height] - [`#footer` height] + 20
        new full('#body2').fixed(['#header', '#footer']).plus(20).render()
    </script>

    //example 2:
    <script>
        var full = new full();
        full.body('#body').fixed('#header').fixed('#footer').render();
        //or
        full.body('#body').fixed([
            '#header',
            '#footer'
        ]).render();
        //or
        full.init({
            fixed  : ['#header', '#footer']
            body   : '#body',
        }).render();
    </script>
```

#More

### body(elementSelector)

The element of need to automatically covered

### fixed(elementsSelector)

the elements which fixed height

### autoResize(enable)

is reset body min height when window resize

### render()

begin to render

### resize()

manual reset body min height

### plus(number)

### minus(number)
