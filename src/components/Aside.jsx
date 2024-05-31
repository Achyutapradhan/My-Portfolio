import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={"/images/My Photo.jpeg"}
              alt="Achyuta Pradhan"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Achyuta Pradhan">
              Achyuta Pradhan
            </h1>
            <a className="title" href="https://drive.google.com/file/d/1_ZdcWR2WfYyk6C16Z36n7vMz960CnRK4/view?usp=drive_link"> Download Resume </a>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span> Show Contacts </span>
            <GiClawSlashes />
          </button>
        </div>
        {/* contact info */}

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:achyutapradhan33@gmai.com" className="contact-link">
                  achyutapradhan33@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="contact-link">
                  +91 8328881549   </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="2001-05-22">May 22, 2001</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Cuttack, Odisha, India</address>
              </div>
            </li>

          
          </ul>

          <div className="separator"> </div>

          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.linkedin.com/in/achyutapradhan33/" className="social-link">
                <ion-icon name="logo-LinkedIn">LinkedIn</ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="https://github.com/Achyutapradhan" className="social-link">
                <ion-icon name="logo-github">GitHub</ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="https://www.youtube.com/@dstimeline" className="social-link">
                <ion-icon name="logo-instagram">YouTube</ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside