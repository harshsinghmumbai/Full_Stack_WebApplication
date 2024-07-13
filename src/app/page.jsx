import Hero_Section from "@/components/Hero_Section";

export default function Home() {
  const data = {
    title: "We're started at Home Page",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: "/Images/home.webp",
  };
  return (
    <>
      <Hero_Section NewData={data} />
    </>
  );
}
