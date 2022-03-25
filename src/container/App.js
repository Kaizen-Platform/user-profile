import SimpleBar from 'simplebar-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'helpers'
import Cover from 'components/Cover'
import Main from 'components/Main'
/*const mongoose = require('mongoose')

const DB =
  'mongodb+srv://raj171100:anjugupta1711@userprofile.bxczp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connection Succesful`)
  })
  .catch(err => console.log(`no connection`))*/

export default function App() {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Cover />
              <Main />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </SimpleBar>
  )
}
