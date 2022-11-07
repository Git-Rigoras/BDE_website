"use client";

const ContactPage = () => {
  const handleSendContactEmail = () => {
    fetch("/api/emails/contact", {
      method: "POST",
    });
  };

  return (
    <div>
      <button onClick={() => handleSendContactEmail()}>Send email</button>
    </div>
  );
};

export default ContactPage;
