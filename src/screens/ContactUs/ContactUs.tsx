import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { JSX } from "react";
import { FormInput } from "../../components/ui/formInput";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../lib/regex";
import { PhoneNumberInput } from "../../components/ui/phoneInput";
import Images from "../../themes";
import emailjs from "@emailjs/browser";

const publicAPIkey = "SDrjmF9ADy2P9sabf";
const serviceID = "service_fl70gf2";
const templateID = "template_25syksp";

const contactUsFormData = {
  contactTitle: "Contact our team",
  contactDescription: `We'd love to hear about your vision and challenges. Share your
              details below, and let's explore how we can help your startup scale, innovate,
              and succeed.`,
  contactButtonText: "SEND MESSAGE",
};

type FormFieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export const ContactUs = (): JSX.Element => {
  const { handleSubmit, reset, control } = useForm<FormFieldType>({
    defaultValues: initialValues,
  });

  const onSubmit = async (data: FormFieldType) => {
    const emailParams = {
      firstName: data.firstName,
      lastName: data.lastName || "-",
      email: data.email,
      phoneNumber: data.phoneNumber,
      message: data.message || "-",
    };

    try {
      await emailjs.send(serviceID, templateID, emailParams, publicAPIkey);
      reset(initialValues);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <section className="bg-custom-gradient px-4 sm:px-20">
      <div className="section-container px-0 md:px-10 lg:px-24 py-10 sm:py-16">
        <h1 className="sm:text-center text-4xl sm:text-8xl font-bold text-DarkGrey mb-4 sm:mb-8">
          {contactUsFormData.contactTitle}
        </h1>
        <p className="max-w-[776px] mx-auto text-lg sm:text-2xl font-medium text-black mb-10 ">
          {contactUsFormData.contactDescription}
        </p>

        <Card className="w-full sm:max-w-[776px] sm:mx-auto bg-transparent border-none shadow-none">
          <CardContent className="space-y-4 sm:space-y-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="First Name"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  control={control}
                  isRequired
                />
                <FormInput
                  label="Last Name"
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  control={control}
                />
              </div>

              <FormInput
                control={control}
                label="E-mail"
                placeholder="Enter your email address"
                name="email"
                isRequired
                rules={{
                  pattern: {
                    value: emailRegex,
                    message: "Email is not valid",
                  },
                }}
              />

              <PhoneNumberInput
                control={control}
                label="Phone Number"
                name="phoneNumber"
                isRequired
                placeholder="Phone Number"
              />

              <FormInput
                control={control}
                name="message"
                label="Message"
                type="textarea"
                placeholder="Leave us a message"
              />

              <Button className="ml-auto flex items-center gap-4 p-6 sm:p-8 bg-BrandPurple text-white">
                <span className="text-lg sm:text-xl">
                  {contactUsFormData.contactButtonText}
                </span>
                <span>
                  <img src={`${Images.rightArrow}`} alt="arrow" />
                </span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
