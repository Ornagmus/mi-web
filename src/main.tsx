import ReactDOM from 'react-dom/client'
import './index.css'
//import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/app.routes'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <AppRoutes />
    </HashRouter>
)
