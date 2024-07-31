import Dynamic_Movie from "@/components/Dynamic_Movie";

const dynamic_page = ({ params }) => {
  const id = params.id;
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <Dynamic_Movie id={id} />
      </div>
    </>
  );
};

export default dynamic_page;
