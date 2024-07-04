// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'

// import App from './pages/App'

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root'),
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './pages/App'
import { AllCards } from './pages/AllCards'
import { Provider } from 'react-redux'
import store from './redux/store'
import { TwoRandomCards } from './pages/twoRandomCards'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/allcards" element={<AllCards />} />
          <Route exact path="/tworandomcards" element={<TwoRandomCards />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
