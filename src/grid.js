import style from './styled'
import { Typography } from '@material-ui/core'

const GridCore = (
  {
    border = false,
    mBetween = false,
    mCenter = false,
    mStart = false,
    sCenter = false,
    sStart = false,
    sStrech = false
  }
) => ({
  alignItems: sCenter
    ? 'center'
    : sStart
      ? 'flex-start'
      : sStrech
        ? 'stretch'
        : 'center',
  border: border === true ? '1px solid #eee' : 'none',
  display: 'flex',
  flex: 0,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: mCenter
    ? 'center'
    : mStart
      ? 'flex-start'
      : mBetween
        ? 'space-between'
        : 'space-between',
  marginBottom: 10,
  marginLeft: 20,
  marginRight: 20,
  marginTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10
})

export const HGrid = style('div')((theme, props) => GridCore(props))

export const H100Grid = style('div')((theme, props) => ({
  current: {
    ...GridCore(props),
    flex: 1,
    width: '100%'
  }
}))

export const VGrid = style('div')((theme, props) => ({
  current: {
    ...GridCore(props),
    flexDirection: 'column'
  }
}))

export const V100Grid = style('div')((theme, props) => ({
  current: {
    ...GridCore(props),
    flexDirection: 'column',
    flex: 1,
    width: '100%'
  }
}))

const IGridCore = (
  theme,
  { border = false, center = false, flex = false, start = false, stretch = false }
) => ({
  current: {
    alignSelf: center
      ? 'center'
      : start
        ? 'flex-start'
        : stretch
          ? 'stretch'
          : 'center',
    border: border === true ? '1px solid #eee' : 'none',
    display: 'flex',
    flex: flex !== undefined ? 1 : 0,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    top: 0
  }
})

export const IGrid = style('div')((theme, props) => IGridCore(theme, props))

export const I100Grid = style('div')((theme, props) => ({
  current: {
    ...IGridCore(theme, props),
    flex: 1,
    width: '100%'
  }
}))

export const Divider = style('hr')({
  current: {
    flex: 1,
    width: '100%',
    border: '1px solid #eee',
    marginBottom: 20
  }
})

export const Space = style('br')({
  current: {
    border: 'none',
    flex: 1,
    width: '100%',
    height: 50
  }
})

export const TitleForm = style(Typography)(
  (theme, { h1 = false, h2 = false, h3 = false }) => ({
    current: {
      align: 'center',
      paragraph: true,
      variant: 'headline',
      paddingBottom: 20,
      component: h1 ? 'h1' : h2 ? 'h2' : h3 ? 'h3' : undefined
    }
  })
)
