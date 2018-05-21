import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { compose, withProps } from 'recompose'

const styles = (theme, props, style) => {
  return typeof style === 'function'
    ? style(theme, props)
    : style
}

const StyledComponent = ({
                           classes,
                           className = '',
                           WrappedComponent,
                           ...passThroughProps
                         }) => (
  <WrappedComponent
    classes={classes}
    className={classNames(className, classes[Object.keys(classes)[0]])}
    {...passThroughProps}
  />
)

StyledComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

const styled = (WrappedComponent, customProps = {}) => {
  return (style, options = {}) => {
    const HOCProps = WrappedComponent => {
      return class _HOCProps extends React.Component {
        constructor (props) {
          super(props)
          this.FinalComponent = compose(
            withProps({...customProps, ...props, WrappedComponent: WrappedComponent}),
            withStyles(theme => styles(theme, props, style), {
              ...options,
              withTheme: true
            }))(StyledComponent)
        }

        render () {
          return (
            <this.FinalComponent>{this.props.children}</this.FinalComponent>
          )
        }
      }
    }
    return HOCProps(WrappedComponent)
  }
}

export default styled
