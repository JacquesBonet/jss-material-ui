import React from 'react';
import { H100Grid, IGrid, TitleForm, VGrid } from '../src/grid';
import TextField from '@material-ui/core/es/TextField/TextField';

class SimpleGrid extends React.Component {
    state = {
        name: 'Cat in the Hat',
    };

    handleChange = event => {
        console.log( event.target.value)
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    render() {
        return (
            <VGrid border mCenter>
                <TitleForm>
                    Hello
                </TitleForm>
                <H100Grid border mCenter>
                    <IGrid>
                        <H100Grid mCenter>
                            <p>Hello2</p>
                        </H100Grid>
                    </IGrid>
                    <IGrid>
                        <TextField
                            id="name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                    </IGrid>
                </H100Grid>
            </VGrid>
        );
    }
};

export default SimpleGrid;
