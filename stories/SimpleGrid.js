import React from 'react';
import { HGrid, H100Grid, IGrid, TitleForm, VGrid, V100Grid } from '../src/grid';
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
            <V100Grid border mCenter>
                <TitleForm>
                    Hello
                </TitleForm>
                <V100Grid border>
                    <H100Grid border mCenter>
                        <VGrid mCenter>
                            <H100Grid mCenter>
                                <p>Hello2</p>
                            </H100Grid>
                        </VGrid>
                        <VGrid mCenter>
                            <TextField
                                id="name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                margin="normal"
                            />
                        </VGrid>
                    </H100Grid>
                </V100Grid>
                <V100Grid border>
                    <HGrid border mCenter>
                        <VGrid mCenter>
                            <H100Grid mCenter>
                                <p>Hello2</p>
                            </H100Grid>
                        </VGrid>
                        <VGrid mCenter>
                            <TextField
                                id="name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                margin="normal"
                            />
                        </VGrid>
                    </HGrid>
                </V100Grid>
            </V100Grid>
        );
    }
};

export default SimpleGrid;
