import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  // const [form, setForm] = useState({ name: "", email: "", message: "" });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Opens user email client with pre-filled message
  //   const subject = encodeURIComponent(`Message from ${form.name}`);
  //   const body = encodeURIComponent(
  //     `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  //   );

  //   window.location.href = `mailto:saadjamshaid64@gmail.com?subject=${subject}&body=${body}`;

  //   setForm({ name: "", email: "", message: "" });
  // };

  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <div className="md:col-span-5 flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            {/* Email */}
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <h4 className="font-medium text-sm">Email</h4>
              <a
                href="mailto:saadjamshaid64@gmail.com"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                saadjamshaid64@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <h4 className="font-medium text-sm">Location</h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sialkot+Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Sialkot, Punjab
              </a>
            </div>
          </div>

          {/* Form */}
          {/* <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Send size={16} />
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
