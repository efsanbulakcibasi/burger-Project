import BannerNew from "../images/banner.png"
import "../styles/Contact.css"


const Contact = () => {
  return (
    <div className="contact" >
      <div className="leftSide" style={{backgroundImage:`url(${BannerNew})`}}></div>
      <div className="rightSide">
        <h1>Bizimle iletişime geçin!</h1>
        <form>
          <labe>Ad Soyad</labe>
          <input type="text" name="name" placeholder="Lütfen adınızı soyadınızı giriniz.."/>
          <label >Email</label>
          <input type="email" name="email" placeholder="Lütfen email adresinizi giriniz" />
          <label>Mesajınız</label>
          <textarea rows={6} name="mesagge" placeholder="Lütfen mesajınızı giriniz"></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default Contact