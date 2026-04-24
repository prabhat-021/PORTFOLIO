import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import SectionHeading from "./SectionHeading";

const contactIconMap = {
  email: MailOutlineRoundedIcon,
  phone: PhoneInTalkOutlinedIcon,
  location: LocationOnOutlinedIcon
};

function ContactSection({ content }) {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    setFormStatus("sending");

    try {
      await emailjs.sendForm(
        content.contactForm.serviceId,
        content.contactForm.templateId,
        formRef.current,
        content.contactForm.publicKey
      );
      setFormStatus("sent");
      formRef.current.reset();
      window.setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
      window.setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="shell-container">
        <SectionHeading
          kicker="Contact"
          title={content.contact.title}
          description={content.contact.description}
        />

        <div className="contact-grid">
          <div className="contact-card card-surface">
            <p className="contact-intro">{content.contact.intro}</p>

            <div className="contact-methods">
              {content.contact.methods.map((method) => {
                const IconComponent = contactIconMap[method.iconKey];

                return (
                  <div key={method.label} className="contact-method">
                    <div className="contact-method-icon">
                      <IconComponent />
                    </div>

                    <div>
                      <span className="contact-method-label">{method.label}</span>
                      {method.href ? (
                        <a href={method.href} className="contact-method-value">
                          {method.value}
                        </a>
                      ) : (
                        <p className="contact-method-value">{method.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="form-card card-surface">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-grid">
                <label className="form-field">
                  <span>Name</span>
                  <input type="text" name="user_name" placeholder="Your name" required />
                </label>

                <label className="form-field">
                  <span>Email</span>
                  <input type="email" name="user_email" placeholder="you@example.com" required />
                </label>
              </div>

              <label className="form-field">
                <span>Subject</span>
                <input type="text" name="user_subject" placeholder="Project, role, or collaboration" required />
              </label>

              <label className="form-field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me a bit about what you're building or the role you're hiring for."
                  required
                />
              </label>

              <div className="form-footer">
                <button
                  type="submit"
                  className="button button-primary"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                  <ArrowOutwardRoundedIcon />
                </button>

                {formStatus === "sent" && (
                  <div className="form-status form-status-success">
                    <CheckCircleOutlineRoundedIcon />
                    <span>Your message was sent successfully.</span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="form-status form-status-error">
                    <ErrorOutlineRoundedIcon />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
