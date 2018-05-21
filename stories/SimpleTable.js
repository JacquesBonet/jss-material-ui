import React from 'react'
import style from '../src/styled'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import _TableCell from '@material-ui/core/TableCell'
import _TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import _Paper from '@material-ui/core/Paper'

const ContainerRoot = style(_Paper)({
  containerRoot: {
    width: '100%',
    marginTop: 3,
    overflowX: 'auto'
  }
})

const TableHead = style(_TableHead)((theme, props) => ({
  tableHead: {
    width: '100%'
  },
}))

const TableCell = style(_TableCell)((theme, {calories}) => ({
  tableCell: {
    fontWeight: calories > 300 ? 700 : undefined,
    backgroundColor: calories > 300 ? '#ff0000' : calories < 160 ? '#00FF00' : undefined
  }
}))

const TableHeadCell = style(_TableCell)({
  tableHeadCell: {
    fontWeight: 700
  }
})

let id = 0

function createData (name, calories, fat, carbs, protein) {
  id += 1
  return {id, name, calories, fat, carbs, protein}
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

const SimpleTable = (props) => {
  return (
    <ContainerRoot>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Dessert (100g serving)</TableHeadCell>
            <TableHeadCell numeric>Calories</TableHeadCell>
            <TableHeadCell numeric>Fat (g)</TableHeadCell>
            <TableHeadCell numeric>Carbs (g)</TableHeadCell>
            <TableHeadCell numeric>Protein (g)</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component='th' scope='row'>
                  {n.name}
                </TableCell>
                <TableCell calories={n.calories} numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>
                <TableCell numeric>{n.protein}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </ContainerRoot>
  )
}

export default SimpleTable
