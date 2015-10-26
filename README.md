#fullScreen.js

lightweight and no dependencies js library let the web page automatically full-screen

#Usage

```html
    <script src="/path/to/fullScreen.js"></script>
    <script>
        //let elements `#body` automatic covered
        //simple usage
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

        //auto reset body height when window resize
        full.resize(true);
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
