import { useForm } from "react-hook-form";
import { FormInput } from "./formInput";
import { Button } from "./button";
import { X } from "lucide-react";
import { emailRegex } from "../../lib/regex";
import { SelectInput } from "./selectInput";
import Images from "../../themes";
import emailjs from "@emailjs/browser";

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
  linkedInUrl?: string;
  websiteUrl?: string;
  domainName?: string;
  fundingStage?: string;
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

const serviceID = "service_fl70gf2";
const templateID = "template_sdieabj";
const publicAPIkey = "SDrjmF9ADy2P9sabf";

export const StartupPitchDeckForm = ({ handleCloseModal, openModal }: any) => {
  const { control, handleSubmit, reset } = useForm<FormDataType>();

  const onSubmit = async (data: FormDataType) => {
    const emailParams = {
      companyName: data.companyName,
      name: data.name,
      email: data.email,
      linkedInUrl: data.linkedInUrl || "-",
      websiteUrl: data.websiteUrl || "-",
      domainName: data.domainName,
      fundingStage: data.fundingStage,
      productIdea: data.productIdea,
    };
    try {
      await emailjs.send(serviceID, templateID, emailParams, publicAPIkey);
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
    }
    handleCloseModal();
  };
  return (
    <section
      className={`w-[300px] sm:w-[500px] bg-heroBackground p-5 sm:p-10 rounded-lg shadow-lg relative m-auto h-[90vh] overflow-y-auto 
      transform transition-all duration-500 ease-in-out 
      ${
        openModal
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-[-50px]"
      } bg-gradient-to-r from-[#dbf4fc] to-[#fee3fe]`}
    >
      <button
        onClick={handleCloseModal}
        className="absolute top-2 right-1 hover:text-BrandPurple text-NickelGrey"
      >
        <X className="w-6 h-6" />
      </button>
      <h1 className="sm:text-center text-xl sm:text-4xl font-bold text-DarkGrey mb-2 sm:mb-4">
        {startUpPitchDeckData.title}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          control={control}
          label="Company Name"
          placeholder="Enter company name"
          name="companyName"
          isRequired
        />
        <FormInput
          control={control}
          label="Primary Contact Name"
          placeholder="Enter your name"
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

        <FormInput
          control={control}
          label="Linkedin url"
          placeholder="Enter your linkedin url"
          name="linkedInUrl"
        />

        <FormInput
          control={control}
          label="Website url"
          placeholder="Enter your website url"
          name="websiteUrl"
        />

        <FormInput
          control={control}
          label="Domain"
          placeholder="Enter your domain"
          name="domainName"
          isRequired
        />

        <FormInput
          control={control}
          type="file"
          label="Attach the pitch deck below"
          placeholder="Attach your file"
          name="file"
          isRequired
        />

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
          label="Describe your product idea in 250 words"
          placeholder="Your product idea"
          name="productIdea"
          isRequired
        />

        <Button className="ml-auto flex items-center p-3 sm:p-6 bg-BrandPurple text-white">
          <span className="text-md sm:text-lg">
            {startUpPitchDeckData.buttonText}
          </span>
          <span>
            <img src={`${Images.rightArrow}`} alt="arrow" />
          </span>
        </Button>
      </form>
    </section>
  );
};
