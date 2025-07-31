import '../styles/Contact.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
    const { theme} = useContext(ThemeContext);
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
                    <a href="https://www.linkedin.com/in/yasir-akhlaque-9a896b302/"><FaLinkedin /></a>
                    <a href="https://x.com/___Yas_bytes_"><FaXTwitter /></a>
                    <a href="https://github.com/yasirakhlaque"><FaGithub /></a>
                </div>
            </div>
        </>
    )
}