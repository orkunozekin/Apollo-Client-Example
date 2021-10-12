import React from 'react'


import {
  useQuery, gql
} from "@apollo/client"
import DataTable from './DataTable'

const Countries = () => {

  const COUNTRIES = gql`
  query GetCountries {
    countries {
    code
    name
    capital
    currency
    languages {
      code
      name
    }
  }
  } 
`
  const { loading, error, data } = useQuery(COUNTRIES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  console.log(data)
  return (
    <DataTable countries={data.countries} />
  )
}

export default Countries
