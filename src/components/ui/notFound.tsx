import { ArrowLeft, FolderSearchIcon } from "lucide-react";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

type NoDataType = {
  title?: string;
  buttonText?: string;
};

const noData: NoDataType = {
  title: "No Data Found",
  buttonText: "Back to Insights",
};

export const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="section-container flex flex-col gap-5 justify-center items-center py-10 sm:py-16">
      <FolderSearchIcon className="w-[100px] h-[100px] sm:w-[300px] sm:h-[300px] text-ParaGrey" />
      <p className="text-3xl sm:text-5xl text-ParaGrey">{noData.title}</p>
      <Button className="bg-BrandPurple text-white px-8 py-6 rounded-[10px] flex items-center gap-4" onClick={() => navigate('/insights')}>
        <ArrowLeft className="h-6 w-6" />
        {noData.buttonText}
      </Button>
    </div>
  );
};
