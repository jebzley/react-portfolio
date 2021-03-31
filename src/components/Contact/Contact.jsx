import React, { useEffect } from "react";
import styles from "./Contact.module.scss";
import ContactLink from "./ContactLink";
import emailjs, { init } from "emailjs-com";
import { GithubLogo, LinkedinLogo, TwitterLogo, Faders } from "phosphor-react";

const Contact = (props) => {
  init("user_2WN1lziEtkz8VPiA2FVOn");
  const setTitle = props.setTitle;

  useEffect(() => {
    setTitle("Contact Me");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //emailjs.sendForm("service_htpkjgi", "template_txv6n0k", e.target);
    alert(`Thanks for getting in touch, ${e.target[1].value}!`)
  };

  return (
    <section className={styles.contactArea}>
      <div className={styles.contact}>
        <div className={styles.contactFormArea}>
          <form name="contact_form" onSubmit={handleSubmit}>
            <h3>Send me an email</h3>
            <label htmlFor="from_email">Your e-mail address</label>
            <input
              name="from_email"
              type="email"
              placeholder="your@email.here"
              required
            />
            <label htmlFor="from_name">Your name</label>
            <input
              name="from_name"
              type="text"
              placeholder="Henry Krinkle"
              required
            />
            <label htmlFor="contact_message">
              What would you like to say to me?
            </label>
            <textarea
              name="contact_message"
              placeholder="You're a really cool guy"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.contactLinkArea}>
          <h3>...or get hold of me on</h3>
          <ContactLink
            link="https://github.com/jebzley"
            icon={<GithubLogo size={32} />}
            prefix="www."
            name="github"
            suffix=".com/jebzley"
          />
          <ContactLink
            link="https://www.linkedin.com/in/sebleedev/"
            icon={<LinkedinLogo size={32} />}
            prefix="www."
            name="linkedin"
            suffix=".com/in/sebleedev"
          />
          <ContactLink
            link="https://twitter.com/sebleedev"
            icon={<TwitterLogo size={32} />}
            prefix="www."
            name="twitter"
            suffix=".com/sebleedev"
          />
          <ContactLink
            link="https://cuiet.bandcamp.com"
            icon={<Faders size={32} />}
            prefix="cuiet."
            name="bandcamp"
            suffix=".com"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
