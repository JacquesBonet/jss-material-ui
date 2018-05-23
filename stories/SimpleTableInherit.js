import React from 'react';
import style from '../src/styled';

const _ContainerRoot = (props) => {
    const { children, ...rest } = props;

    return (
        <div>
            {children.map((elem, idx) => (React.cloneElement(elem, { key: idx, ...rest })))}
        </div>
    );
};


const ContainerRoot = style(_ContainerRoot)((theme, { backgroundColor, color }) => ({
    root: {
        width: '100%',
        marginTop:
            3,
        overflowX:
            'auto',
    },
    blue: {
        backgroundColor: '#0000ff',
    },

    red: {
        backgroundColor: '#ff0000',
    },

    color: {
        backgroundColor,
        color,
    },
}));


const ClassAA = (props) => {
    const { children, ...rest } = props;

    return (
        <div>
            <p className={props.classes.blue}>Hello blue</p>
            {React.cloneElement(children, { key: 1, ...rest })}
        </div>
    );
};

const ClassA = ({classes, value}) => (<p className={classes.color}>{value}</p>);


const SimpleTableInherit = (props) => {
    return (
        <div>
            <ContainerRoot color={'red'} backgroundColor={'green'}>
                <ClassA value='red/green'/>
                <ClassAA>
                    <ClassA value='red/green'/>
                </ClassAA>
            </ContainerRoot>
            <ContainerRoot color={'blue'} backgroundColor={'#f000f0'}>
                <ClassA value='bleu/violet'/>
                <ClassAA>
                    <ClassA value='bleu/violet'/>
                </ClassAA>
            </ContainerRoot>
        </div>

    );
};

export default SimpleTableInherit;
