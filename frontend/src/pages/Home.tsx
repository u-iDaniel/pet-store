import Navbar from '@components/Navbar'
import '@styles/Main.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="background">
        <div className="left">
          <main>
            <h1>Discover your new best friends!</h1>
            <h4>Browse through a selection of friendly pets</h4>
            <Link to={"/shop"}>Shop Now</Link>
          </main>
        </div>
        <div className="right"></div>
      </div>
    </>
  )
}

export default Home
