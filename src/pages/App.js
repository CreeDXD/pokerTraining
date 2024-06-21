import '../style/css/index.css'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Navigation from '../components/Navigation_menu'

function App() {
  return (
    <div className="container">
      <div className="container--main">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="container--navigation">
        <Navigation />
      </div>
    </div>
  )
}

export default App
