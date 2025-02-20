import { useForm } from "react-hook-form";
import { FormInput } from "./formInput";
import { Button } from "./button";
import { ArrowRight, X } from "lucide-react";
import { emailRegex } from "../../lib/regex";
import { SelectInput } from "./selectInput";

type StartupPitchDeckType = {
  title: string;
  buttonText: string;
};

const startUpPitchDeckData: StartupPitchDeckType = {
  title: "Startup Pitch Submission",
  buttonText: "Craft Your Future",
};

interface FormDataType {
  companyName?: string;
  name?: string;
  email?: string;
  file?: File;
  productIdea?: string;
}

const selectOptions = [
  { label: "Pre-seed funding", value: "Pre-Seed Funding" },
  { label: "Seed funding", value: "Seed funding" },
  { label: "Series A funding", value: "Series A funding" },
  { label: "Series B funding", value: "Series B funding" },
  { label: "Series C funding", value: "Series C funding" },
  { label: "Initial Public Offering", value: "Initial Public Offering" },
];

export const StartupPitchDeckForm = ({ handleCloseModal }: any) => {
  const { control, handleSubmit, reset } = useForm<FormDataType>();

  const onSubmit = (data: FormDataType) => {
    console.log("Modal Data", data);
    reset();
    handleCloseModal();
  };
  return (
    <section className="max-w-[500px] bg-heroBackground p-10 rounded-lg shadow-lg relative">
      <button
        onClick={handleCloseModal}
        className="absolute top-4 right-4 hover:text-ParaGrey text-NickelGrey"
      >
        <X className="w-6 h-6" />
      </button>
      <h1 className="text-center text-4xl font-bold text-DarkGrey mb-4">
        {startUpPitchDeckData.title}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          control={control}
          label="Company Name"
          placeholder="Name"
          name="companyName"
          isRequired
        />
        <FormInput
          control={control}
          label="Primary Contact Name"
          placeholder="Name"
          name="name"
          isRequired
        />

        <FormInput
          control={control}
          label="E-mail"
          placeholder="Email Address"
          name="email"
          isRequired
          rules={{
            pattern: {
              value: emailRegex,
              message: "Email is not valid",
            },
          }}
        />

        {/* <FormInput
          control={control}
          type="file"
          label="Attach the pitch deck below"
          placeholder="Attach your file pdf/ppt"
          name="file"
        /> */}
        <SelectInput
          control={control}
          label="Funding Stage"
          name="fundingStage"
          options={selectOptions}
          isRequired
        />

        <FormInput
          control={control}
          type="textarea"
          label="Describe your product idea"
          placeholder="Your product idea"
          name="productIdea"
          isRequired
        />

        <Button className="ml-auto flex items-center p-6 bg-BrandPurple text-white">
          <span className="text-lg">{startUpPitchDeckData.buttonText}</span>
          <ArrowRight className="w-[30px] h-[30px]" />
        </Button>
      </form>
    </section>
  );
};
