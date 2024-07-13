import { Button } from "@/components/ui/button";
import { MdMarkEmailRead } from "react-icons/md";

function CardComponent({ NewData }) {
  const { title, description } = NewData;
  return (
    <div className="flex flex-col items-center m-auto space-y-2 mb-2 w-fit h-fit p-3 rounded-xl border border-gray-600">
      <div className="text-center">
        <MdMarkEmailRead className="w-12 h-12 text-red-500 m-auto" />
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-base text-muted-foreground max-w-[310px]">
          {description}
        </p>
      </div>
      <Button variant="link" className="text-blue-500 font-bold">
        {title}-&gt;
      </Button>
    </div>
  );
}

export default CardComponent;
