import React from 'react'
import style from '../src/styled'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const ContainerRoot = style(Paper)({
  containerRoot: {
    width: '100%',
    marginTop: 3,
    overflowX: 'auto'
  }
})

const STableHead = style(TableHead)((theme, props) => ({
  tableHead: {
    width: '100%'
  },
}))

const STableCell = style(TableCell)((theme, {calories}) => ({
  tableCell: {
    fontWeight: calories > 300 ? 700 : undefined,
    backgroundColor: calories > 300 ? '#ff0000' : calories < 160 ? '#00FF00' : undefined
  }
}))

const STableHeadCell = style(TableCell)({
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
        <STableHead>
          <TableRow>
            <STableHeadCell>Dessert (100g serving)</STableHeadCell>
            <STableHeadCell numeric>Calories</STableHeadCell>
            <STableHeadCell numeric>Fat (g)</STableHeadCell>
            <STableHeadCell numeric>Carbs (g)</STableHeadCell>
            <STableHeadCell numeric>Protein (g)</STableHeadCell>
          </TableRow>
        </STableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <STableCell component='th' scope='row'>
                  {n.name}
                </STableCell>
                <STableCell calories={n.calories} numeric>{n.calories}</STableCell>
                <STableCell numeric>{n.fat}</STableCell>
                <STableCell numeric>{n.carbs}</STableCell>
                <STableCell numeric>{n.protein}</STableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </ContainerRoot>
  )
}

export default SimpleTable
