import {
    createBrowserRouter,
} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Vista1 from '../pages/Vista1'
import Vista2 from '../pages/Vista2'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'vista1',
                element: <Vista1/>
            },
            {
                path: 'vista2',
                element: <Vista2/>
            }
        ]
    }
])

export default router
