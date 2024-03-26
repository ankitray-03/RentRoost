import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(userData);
  };
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">CONTACT INFO : +91 8130870433</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      id="name"
                      onChange={handleChange}
                      className="app-form-control"
                      placeholder="NAME"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      id="email"
                      onChange={handleChange}
                      className="app-form-control"
                      placeholder="EMAIL"
                      value={userData.email}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      id="mobile"
                      onChange={handleChange}
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      value={userData.mobile}
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      id="message"
                      onChange={handleChange}
                      className="app-form-control"
                      placeholder="MESSAGE"
                      value={userData.message}
                    />
                  </div>

                  <div className="app-form-group buttons">
                    <Link
                      to={`mailto:${"ankitray0308@gmail.com"}?subject=Regarding ${
                        userData.name
                      }&body=${
                        "Mobile : " +
                        userData.mobile +
                        "Message:" +
                        userData.message
                      }`}
                      className=" text-center p-3 uppercase rounded-lg "
                    >
                      <button className="app-form-button">Send Message</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
