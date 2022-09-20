import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Game from './Game'
import Home from './Home'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Settings from './Settings'
import saga from '../effects'

const store = configureStore(saga)

const App = () => {
    return (
        <Provider store={ store }>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/game' element={<Game />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </Router>
        </Provider>
    )
}

export default App