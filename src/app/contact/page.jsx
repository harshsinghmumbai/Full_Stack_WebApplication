import CardComponent from "@/components/CardComponent";
import Form_Validation from "@/components/Form_Validation";

const contact = () => {
  const data_1 = {
    title: "Post Email",
    description: "Monday to Thursday Expected Response in 10hrs",
  };
  const data_2 = {
    title: "Get Email",
    description: "Monday to Saturday Got Response in 2-3hrs",
  };
  const data_3 = {
    title: "Update Email",
    description: "Sunday to Thursday Expected Response in 24hrs",
  };
  return (
    <>
      <div className="py-5 px-5 sm:grid sm:grid-cols-3 max-w-[990px] m-auto md:space-x-2 lg:space-x-8 xl:space-x-12">
        <CardComponent NewData={data_1} />
        <CardComponent NewData={data_2} />
        <CardComponent NewData={data_3} />
      </div>
      <Form_Validation />
      <div className="">
        <p className="text-center text-lg font-semibold my-2 md:text-xl lg:text-2xl font-mono">
          My Location
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1038157976345!2d73.07701247374247!3d19.277851045607612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd8590ac6aff%3A0x9f410b6946168f3d!2sArihant%20City%201%20Wing-H2%2C%20Arihant%20City%201%2C%201%2C%20Bhadwad%2C%20Bhadwad%20Gaon%2C%20Villege%2C%20Bhiwandi%2C%20Maharashtra%20421302!5e0!3m2!1sen!2sin!4v1722423231217!5m2!1sen!2sin"
          width="500"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="m-auto rounded-xl border border-black mb-5 w-full h-full sm:h-56 md:h-64 lg:h-96"
        ></iframe>
      </div>
    </>
  );
};

export default contact;
