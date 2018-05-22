import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = (theme, props, style) => {
    return typeof style === 'function'
        ? style(theme, props)
        : style;
};

class StyledComponent extends React.Component {
    render() {
        const { classes, className = '', WrappedComponent, ...passThroughProps } = this.props;

        return (
            <WrappedComponent
                classes={classes}
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
                        withStyles(theme => styles(theme, props, style), options)(StyledComponent);
                }

                render() {
                    return (
                        <this.FinalComponent {...customProps} {...this.props} WrappedComponent={WrappedComponent}/>
                    );
                }
            };
        };
        return HOCProps(WrappedComponent);
    };
};

export default styled;