import React from 'react'
import { H100Grid, IGrid, TitleForm, VGrid } from '../src/grid'

const SimpleGrid = (props) => {
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
          <p>Hello 3</p>
        </IGrid>
      </H100Grid>
    </VGrid>
  )
}

export default SimpleGrid
