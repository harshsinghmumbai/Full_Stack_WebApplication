import Dynamic_Movie from "@/components/Dynamic_Movie";

const dynamic_page = ({ params }) => {
  const id = params.id;
  return (
    <>
      <Dynamic_Movie id={id} />
    </>
  );
};

export default dynamic_page;
