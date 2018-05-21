import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleTable from './SimpleTable';
import SimpleTableInherit from './SimpleTableInherit';
import SimpleGrid from './SimpleGrid';

storiesOf('Styled Material UI', module)
    .add('SimpleGrid', () =>
        <SimpleGrid/>,
    )
    .add('SimpleTable', () =>
        <SimpleTable/>,
    )
    .add('SimpleTableInherit', () =>
        <SimpleTableInherit/>,
    );
