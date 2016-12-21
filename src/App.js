const React = require('react')
const {Provider} = require('react-redux')
import {BrowserRouter,Match} from 'react-router'
const {store}= require('./store')
const Home = require('./pages/home')
const About = require('./pages/about')


const App = React.createClass({
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Match exactly pattern="/" component={Home} />
            <Match exactly pattern="/about" component={About} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
})

export default App
