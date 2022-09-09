import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Game from './Game'
import Home from './Home'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

const store = configureStore()

const App = () => {
    return (
        <Provider store={ store }>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/game' element={<Game />} />
                </Routes>
            </Router>
        </Provider>
    )
}

export default App