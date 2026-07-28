import Hero from "./sections/Hero";
import Form from "./sections/Form";
import Info from "./sections/Info";

const ContactoPage = () => (
  <div>
    <Hero />
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Form />
          <Info />
        </div>
      </div>
    </section>
  </div>
);

export default ContactoPage;
