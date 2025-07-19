import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider , createBrowserRouter} from "react-router-dom"
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './routes/App.jsx'
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import {Provider} from "react-redux"
import myntraStore from './store/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: postLoader*/ },
      { path: "/bag", element: <Bag /> /*, action:createPostAction*/,}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {myntraStore}>
     <RouterProvider router={router} />
     </Provider>
  </StrictMode>
)
