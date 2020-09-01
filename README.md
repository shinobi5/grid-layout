<h1 align="center">:spider_web: Grid Layout</h1>

<p align="center">Web component for <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS grid layout</a> (zero dependencies).</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-rebeccapurple.svg?style=flat-square" alt="License MIT">
  </a>
</p>

<hr />

## Usage

```html
  <head>
    <script 
      src="https://unpkg.com/@shinobi5/grid-layout@0.1.1/lib/grid-layout.js" 
      defer 
    ></script>
  </head>
  <body>
    <main>
      <grid-layout 
        breakpoints="400px, 800px, 1200px"
        space="5px, 10px, 20px, 40px" 
        cols="1, 2, 3, 4" 
        col="1fr, 1fr 2fr, 2fr"
        rowsrange="auto, 200px"
        align="center"
        justify="start-end"
      >
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
      </grid-layout>
    </main>  
  </body>
```

<br />


## API

> There's a good chance this API will change as I start to use the component and discover improvements that are needed. Consider this API unstable at this stage

Options are set via attributes on the `<grid-layout>`. HTML attributes can only accept a single type: `String`. It's also possible to set the attribute via JS e.g. `gridLayout.setAttribute('space', '50px')`.

**Note**: for attributes that accept a list of values applied at each `breakpoint`, the **first value** in the list is the initial value (the value applied before the first `breakpoint`)

| Option | Type | Description |
|--------|--------|--------|
| `align`| String | Value is passed to [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items) and [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
| `breakpoints`| String | A list of comma separated breakpoint values (breakpoint values are applied to`min-width` media queries)
| `cols`| String | A comma separated list of columns at each `breakpoint`
| `col`| String | A comma separated list of column settings at each `breakpoint`
| `justify`| String | Value is passed to [justify-items](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items) and [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
| `rowsrange`| String | A comma separated list of values passed to [minmax](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax) for [grid-auto-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
| `space`| String | A comma separated list of [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) values at each `breakpoint`

<br />

## Browser support
Layout component uses the [shadowDOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) to encapsulate the styles and [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for the container properties. This means no support for IE11.

<br />

## Development
> Project requires [deno](https://deno.land/) and [velociraptor](https://github.com/umbopepato/velociraptor/) to be installed

**Start server at localhost:1234**
```
vr start
```

**Compile component**
```
vr build
```
