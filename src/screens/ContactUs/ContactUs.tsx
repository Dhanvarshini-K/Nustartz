import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { JSX } from "react";
import { FormInput } from "../../components/ui/formInput";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../lib/regex";
import { PhoneInput } from "../../components/ui/phoneInput";

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

export const ContactUs = (): JSX.Element => {
  const { handleSubmit, reset, control, setValue } = useForm<FormFieldType>();

  const onSubmit = (data: FormFieldType) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div>
      <section className="bg-heroBackground pt-20 px-10 md:px-24 bg-gradient-to-r from-gray-100 to-purple-100">
        <div className="section-container px-0 md:px-10 lg:px-24 py-10 sm:py-16">
          <h1 className="text-center text-5xl sm:text-8xl font-bold text-DarkGrey mb-4 sm:mb-8">
            {contactUsFormData.contactTitle}
          </h1>
          <p className="max-w-[776px] mx-auto text-lg sm:text-2xl font-medium text-black mb-10">
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
                  label="Email Address"
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

                <PhoneInput
                  control={control}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  isRequired
                  label="Phone Number"
                  setValue={setValue}
                />

                <FormInput
                  control={control}
                  name="textArea"
                  label="Message"
                  type="textarea"
                  placeholder="Leave us a message"
                />

                <Button className="ml-auto flex items-center gap-4 p-6 sm:p-8 bg-BrandPurple text-white">
                  <span className="text-lg sm:text-xl">
                    {contactUsFormData.contactButtonText}
                  </span>
                  <ArrowRight className="w-[30px] h-[30px]" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
