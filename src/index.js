import { render } from 'react-dom'
import App from 'container/App'

import 'simplebar/dist/simplebar.min.css'
import 'styles/index.css'

/*const mongoose = require('mongoose')
mongoose
  .connect(
    'mongodb+srv://raj171100:anjugupta1711@userprofile.bxczp.mongodb.net/Data',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(console.log('Connected to mongodb!'))*/

render(<App />, document.getElementById('app'))
