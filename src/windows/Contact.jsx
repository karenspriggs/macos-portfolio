import WindowControls from "../components/WindowControls.jsx";
import WindowWrapper from "../HOC/WindowWrapper.jsx";
import {socials} from "../constants/index.js";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img
                    src="/images/adrian.jpg"
                    alt="Adrian"
                    className="rounded-full w-20"
                />

                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>

                <ul>
                    {socials.map(({id, bg, link, icon, text}) => (
                        <li key={id} style={{backgroundColor: bg}}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt={text} className="size-5"/>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact")

export default ContactWindow;