// import React from "react";
// import "./Nav.css";
// import HomePic from "../Images/HomePic.png";
// import { FaInstagram, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

// const Home = () => {
//   return (
//     <section id="home" className="home_section">
//       {/* <div className="home__layer"> */}
//       <div className="home_container">
//         <div className="content_wrapper">
//           {/* <img
//               src={HomePic}
//               alt="Website welcome banner"
//               className="welcome_image"
//             /> */}

//           <div className="text_section">
//             <h1 className="fancy-name">
//               <span className="first-name">Ruchi Chawla</span>
//               <span className="last-name">
//                 <span className="name-text">
//                   Associate Professor | Pharmaceutical Engineering IIT (BHU)
//                   Varanasi
//                 </span>
//               </span>
//             </h1>
//             <div className="social-icons">
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FaFacebook />
//               </a>
//               <a
//                 href="https://google.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FaGoogle />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FaTwitter />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default Home;

import React, { useState } from "react";
import "./Nav.css";
import proffPic from "../Images/proff.jpg";
import { FaInstagram, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <section id="home" className="home_section">
      <div className="home__layer">
        <div className="home_container">
          <div className="content_wrapper">
            <div className="text_section">
              <h1 className="fancy-name">
                <span className="first-name">Ruchi Chawla</span>
                <span className="last-name">
                  <span className="name-text">
                    Associate Professor | Pharmaceutical Engineering IIT (BHU)
                    Varanasi
                  </span>
                </span>
              </h1>

              <button className="know-more-btn" onClick={toggleModal}>
                Know More...
              </button>

              <div className="social-icons">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="profilePic">
              <img src={proffPic} alt="Ruchi Chawla" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>
              ×
            </button>
            <h2 style={{borderBottom:"2px solid #6161c2"}}>Academic Career & Professional Attainments</h2>
            <table>
              <thead>
                <tr>
                  <th>Degree</th>
                  <th>Institution</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ph.D.</td>
                  <td>IIT(BHU), Varanasi</td>
                  <td>2016</td>
                </tr>
                <tr>
                  <td>M.Pharm</td>
                  <td>BITS, Pilani Rajasthan</td>
                  <td>2006</td>
                </tr>
                <tr>
                  <td>B.Pharm</td>
                  <td>IT-BHU, Varanasi</td>
                  <td>2004</td>
                </tr>
              </tbody>
            </table>

            <h2 style={{ marginTop: "20px", borderBottom:"2px solid #6161c2" }}>Positions Held</h2>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Institution</th>
                  <th>From</th>
                  <th>To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Assistant Professor</td>
                  <td>IIT(BHU)</td>
                  <td>30.04.2008</td>
                  <td>18.02.2018</td>
                </tr>
                <tr>
                  <td>Associate Professor</td>
                  <td>IIT(BHU)</td>
                  <td>19.02.2018</td>
                  <td>Present</td>
                </tr>
              </tbody>
            </table>

            <h2 style={{ marginTop: "20px" }}>Awards & Recognitions</h2>
            <ul className="awards-list">
              <li>
                M.Pharm, GATE scholarship, University Grants Commission, New
                Delhi
              </li>
              <li>
                Best participant Award at 52nd Orientation Course (2009), UGC,
                Academic Staff College, BHU, Varanasi
              </li>
              <li>
                DST- Travel Award for attending International Conference on
                Nanotechnology in Medicine (NanoMed12), University College
                London, London, UK
              </li>
              <li>
                Best Poster Award at Pharmaceutical Summit and Expo, 2015 New
                Delhi, India
              </li>
              <li>
                First prize in oral presentation at TRANSPIRE-2014, Kurnool,
                Andhra Pradesh, India
              </li>
              <li>
                Outstanding Researcher In Pharmaceutics, Venus International
                Foundation, 2018
              </li>
              <li>
                1st prize on Institute Day, IIT (BHU), for Model presentation on
                Waste Management, 2018
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
