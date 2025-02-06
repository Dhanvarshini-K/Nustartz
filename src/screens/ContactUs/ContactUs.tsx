import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { JSX } from "react";
import { Textarea } from "../../components/ui/textarea";

const contactUsFormData = {
  contactTitle: "Contact our team",
  contactDescription: `We'd love to hear about your vision and challenges. Share your
              details below, and let's explore how we can help your startup scale, innovate,
              and succeed.`,
};

const formLabels = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email Address",
  phoneNumber: "Phone Number",
  message: "Message",
  buttonText: "SEND MESSAGE",
};

export const ContactUs = (): JSX.Element => {
  return (
    <div>
      <section className="bg-heroBackground pt-20 px-10 md:px-24">
        <div className="section-container px-0 md:px-10 lg:px-24 py-16">
          <h1 className="text-center text-5xl sm:text-8xl font-bold text-DarkGrey mb-8">
            {contactUsFormData.contactTitle}
          </h1>
          <p className="max-w-[776px] mx-auto text-xl sm:text-2xl font-medium text-black mb-10">
            {contactUsFormData.contactDescription}
          </p>

          <Card className="max-w-[776px] mx-auto bg-transparent border-none shadow-none">
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-3xl font-medium text-black">
                    {formLabels.firstName}
                  </label>
                  <Input placeholder="First name" />
                </div>
                <div className="space-y-3">
                  <label className="text-3xl font-medium text-black">
                    {formLabels.lastName}
                  </label>
                  <Input placeholder="Last name" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-3xl font-medium text-black">
                  {formLabels.email}
                </label>
                <Input placeholder="you@company.com" type="email" />
              </div>

              <div className="space-y-3">
                <label className="text-3xl font-medium text-black">
                  {formLabels.phoneNumber}
                </label>
                <Input placeholder="+1 (000)-000-0000" type="tel" />
              </div>

              <div className="space-y-3">
                <label className="text-2xl font-medium text-black">
                  {formLabels.message}
                </label>
                <Textarea
                  placeholder="Leave us a message"
                  className="h-[243px] text-2xl p-6 rounded-[10px] border-2 border-inputBorder"
                />
              </div>

              <Button className="ml-auto flex items-center gap-4 px-8 py-8 bg-BrandPurple text-white">
                <span className="text-xl">{formLabels.buttonText}</span>
                <ArrowRight className="w-[30px] h-[30px]" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
