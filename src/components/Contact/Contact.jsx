import React from "react";
import styles from "./Contact.module.scss";
import ContactLink from "./ContactLink";
import { GithubLogo, LinkedinLogo, TwitterLogo, Faders } from "phosphor-react";

const Contact = () => {
  return (
    <section className={styles.contactArea}>
      <div className={styles.contact}>
        <div className={styles.contactFormArea}>
          <form>
            <h3>Send me an email</h3>
            <label htmlFor="contact-email">Your e-mail address</label>
            <input
              name="contact-email"
              type="email"
              placeholder="your@email.here"
            />
            <label htmlFor="contact-name">Your name</label>
            <input
              name="contact-name"
              type="text"
              placeholder="Henry Krinkle"
            />
            <label htmlFor="contact-message">
              What would you like to say to me?
            </label>
            <textarea
              name="contact-message"
              placeholder="You're a really cool guy"
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.contactLinkArea}>
          <h3>...or get hold of me on</h3>
          <ContactLink
            icon={<GithubLogo size={32} />}
            prefix="www."
            name="github"
            suffix=".com/jebzley"
          />
          <ContactLink
            icon={<LinkedinLogo size={32} />}
            prefix="www."
            name="linkedin"
            suffix=".com/seblee"
          />
          <ContactLink
            icon={<TwitterLogo size={32} />}
            prefix="www."
            name="twitter"
            suffix=".com/jebzley"
          />
          <ContactLink
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
