#fullScreen.js

lightweight and no dependencies js library let the web page automatically full-screen

#Usage

```html
    <script src="/path/to/fullScreen.js"></script>
    <script>
        //simple usage
        fullScreen.header('#header')
                  .body('#body')
                  .footer('#footer')
                  .render();
        //or
        fullScreen.init({
            header : '#header',
            body   : '#body',
            footer : '#footer'
        }).render();

        //enable debug
        fullScreen.debug(true);

        //auto reset body height when window resize
        fullScreen.resize(true);
    </script>
```