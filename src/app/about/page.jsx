import Hero_Section from "@/components/Hero_Section";

const about = () => {
  const data = {
    title: "We're started at About Us",
    description:
      "This page has been exclusively developed by Harsh Singh, an Web developer dedicated to creating engaging and functional webapp",
    image: "/Images/about.jpg",
  };
  return (
    <>
      <Hero_Section NewData={data} />
    </>
  );
};

export default about;
