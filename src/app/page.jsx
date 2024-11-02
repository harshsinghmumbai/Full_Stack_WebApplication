import Hero_Section from "@/components/Hero_Section";

export const runtime = "edge";

export default function Home() {
  const data = {
    title: "We're started at Home Page",
    description:
      "This page has been exclusively developed by Harsh Singh, an Web developer dedicated to creating engaging and functional webapp",
    image: "/Images/home.webp",
  };
  return (
    <>
      <Hero_Section NewData={data} />
    </>
  );
}
