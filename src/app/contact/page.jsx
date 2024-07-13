import CardComponent from "@/components/CardComponent";

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
    </>
  );
};

export default contact;
