import Hero_Section from "@/components/Hero_Section";

const about = () => {
  const data = {
    title: "We're started at About Us",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: "/Images/about.jpg",
  };
  return (
    <>
      <Hero_Section NewData={data} />
    </>
  );
};

export default about;
