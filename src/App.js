import './App.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Countries from './Countries'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache()
})

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Countries />
      </div>
    </ApolloProvider>
  )
}

export default App
