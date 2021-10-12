import React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'


const DataTable = ({ countries }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minwidth: 650 }} aria-label="countries-table">
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Capital</TableCell>
            <TableCell align="right">Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map(({ name, capital, currency, code }) =>
            <TableRow
              key={code}
            >
              <TableCell component="th" scope="row">
                {code}
              </TableCell>
              <TableCell align="right">{name}</TableCell>
              <TableCell align="right">{capital}</TableCell>
              <TableCell align="right">{currency}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
