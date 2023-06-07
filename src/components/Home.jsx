import { Link } from "react-router-dom";
import BurgerYeni from "../images/banneryeni.jpg"
import "../styles/Home.css"
const Home = () => {
  return (
    <div className="mainPage" style={{backgroundImage:`url(${BurgerYeni})`}}>
      <div className="order">
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>  
    </div>
  )
}

export default Home