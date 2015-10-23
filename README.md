#fullScreen.js

lightweight and no dependencies js library let the web page automatically full-screen

#Usage

```html
    <script src="/path/to/fullScreen.js"></script>
    <script>
        //let elements `#body` automatic covered
        //simple usage
        fullScreen.body('#body').fixed('#header').fixed('#footer').render();
        //or
        fullScreen.body('#body').fixed([
            '#header',
            '#footer'
        ]).render();
        //or
        fullScreen.init({
            fixed  : ['#header', '#footer']
            body   : '#body',
        }).render();

        //auto reset body height when window resize
        fullScreen.resize(true);
    </script>
```

#Method

### body(elementSelector)

The element of need to automatically covered

### fixed(elementsSelector)

the elements which fixed height

### resize(enable)

is reset body height when window resize

### render()

begin to render
