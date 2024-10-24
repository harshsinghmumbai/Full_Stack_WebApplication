import Hero_Section from "@/components/Hero_Section";

export const runtime = "edge";

export default function Home() {
  const data = {
    title: "We're started at Home Page",
    description:
      "This Home Page is Created with Contribution of Harsh Singh ,Om Narayankar, Panchshila Kate and also Sharyu Devrukhakar All this Members",
    image: "/Images/home.webp",
  };
  return (
    <>
      <Hero_Section NewData={data} />
    </>
  );
}
