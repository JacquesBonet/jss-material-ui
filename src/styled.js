import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { compose, withProps } from 'recompose';

const styles = (theme, props, style) => {
    return typeof style === 'function'
        ? style(theme, props)
        : style;
};

class StyledComponent extends React.Component {
    render() {
        const { className = '', WrappedComponent, ...passThroughProps } = this.props;
        const { classes} = this.props;

        return (
            <WrappedComponent
                className={classNames(classes[Object.keys(classes)[0]], className)}
                {...passThroughProps}
            />
        );
    }
}

StyledComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

const styled = (WrappedComponent, customProps = {}) => {
    return (style, options = {}) => {
        const HOCProps = WrappedComponent => {
            return class _HOCProps extends React.Component {
                constructor(props) {
                    super(props);
                    this.FinalComponent =
                        withProps({...customProps, ...this.props, WrappedComponent})(withStyles(theme => styles(theme, props, style), {
                        ...options,
                        withTheme: true,
                    })(StyledComponent));
                }

                render() {
                    return (
                        <this.FinalComponent />
                    );
                }
            };
        };
        return HOCProps(WrappedComponent);
    };
};

export default styled;
