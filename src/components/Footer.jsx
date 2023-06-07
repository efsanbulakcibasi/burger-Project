import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <Facebook/>
            <Instagram/>
            <Twitter/>
        </div>
        <p></p>
    </div>
  )
}

export default Footer