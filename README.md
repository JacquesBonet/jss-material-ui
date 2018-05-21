# jss-material-ui
Provide seamless styled components to material-ui

# Introduction
Material-ui 1.0 is a great react library, but its css to jss styling could be enhanced.

# Drawback of the styling provided by material-ui

* doesn't support props
* Styles are applied globally resulting in a lot of warning for styling not appicable for the current context
* No component oriented, we have to specify the className of the component to define its style 

# The solutions until now to resolve these problems
Some suggest to use styled libraries like styled-component, glamorous, emotion, ... o resove these problems

They resolve it, but two new problems arrive: 

* stylesheet priorisation. 
* two css engines on the system which provide more complexity for the app

# A new small styled libray
So I decided to develop a library with the folowing objective:

* use material-ui styling system, so compatibiity is 100%
* more component oriented
* provide props

# A little sample

## without props


```js
import style from 'styled'

// a container style
const Root = style(Paper)({
  current: {
    width: '100%',
    marginTop: 3,
    overflowX: 'auto'
  }
})

// container use
<Container />
```

## with props

```js
import style from 'styled'
import TableCell from '@material-ui/core/TableCell'

const STableCell = style(TableCell)((theme, {calories}) => ({
  current: {
    fontWeight: calories > 300 ? 700 : undefined,
    backgroundColor: calories > 300 ? '#ff0000' : calories < 160 ? '#00FF00' : undefined
  }
}))

// use
<STableCell calories={n.calories} numeric>{n.calories}</STableCell>
```

## Custom props

Its also possible to use custom props


## Class inherithance

If a child B of a component A has for className :

```js
<A>
   <B className={classes.classB} />
</A>
```

Its possible to write that:

```js
const SA = style(A)((theme, {calories}) => ({
  current: {
    ...
  },
  classB: {
    ...
  }
}))
```

The style specified in the classB object will be applied to B class component.


## more samples

Check ./stories directory for complete sample files.

New samples files will arrive soon.
Keep in mind the styling system is compatible with material-ui styling
