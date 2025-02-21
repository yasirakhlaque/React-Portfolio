import '../styles/Contact.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Contact() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`contact ${theme}`}>
                <h1>Get In Touch</h1>
                <form action="#" data-aos="flip-right">
                    <div className="input-name">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="input-email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="input-message">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id='message'>
                        </textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div className="social">
                    <a href="https://www.linkedin.com/in/yasir-akhlaque-9a896b302/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://x.com/___Yas_bytes_"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://github.com/yasirakhlaque"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
        </>
    )
}