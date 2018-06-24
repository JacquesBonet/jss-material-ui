import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleTable from './SimpleTable';
import SimpleTableInherit from './SimpleTableInherit';
import SimpleGrid from './SimpleGrid';
import Ref from './Ref';
import MixedWithStylesSimpleTable from './MixedWithStylesSimpleTable';

storiesOf('Styled Material UI', module)
    .add('SimpleGrid', () =>
        <SimpleGrid/>,
    )
    .add('SimpleTable', () =>
        <SimpleTable/>,
    )
    .add('MixedWithStylesSimpleTable', () =>
        <MixedWithStylesSimpleTable/>,
    )
    .add('SimpleTableInherit', () =>
        <SimpleTableInherit/>,
    )
    .add('Ref', () =>
        <Ref/>,
    );
