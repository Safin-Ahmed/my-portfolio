import { React, useContext, useRef, useState } from 'react';
import './Contact.css';
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFillGeoAltFill } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../Context';
const Contact = () => {
    console.log(process.env.REACT_APP_EMAIL_JS_SERVICE_ID);
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [done, setDone] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm(`${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`, formRef.current, `${process.env.REACT_APP_EMAIL_JS_USER_ID}`)
            .then((result) => {
                setDone(true);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's Discuss Your Project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <BsFillTelephoneFill className="c-icon" /> +8801917650603
                        </div>

                        <div className="c-info-item">
                            <BsFillEnvelopeFill className="c-icon" /> safin.ahmed2000@gmail.com
                        </div>

                        <div className="c-info-item">
                            <BsFillGeoAltFill className="c-icon" /> Dhaka, Bangladesh
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="email" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message"></textarea>
                        <button className="contact-btn">Submit</button>
                        {done && <p>Thank You !</p>}
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;