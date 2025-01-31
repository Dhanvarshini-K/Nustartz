import { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { solutions } from "../../lib/data";

export const Review = (): JSX.Element => {
  return (
    <main className="bg-white">
      <section className="mx-5 xl:mx-20 2xl:mx-72">
        <section className="container pt-32 pb-16">
          <h1 className="text-8xl font-bold text-paragray mb-8">Who we are</h1>
          <Card className="p-10 bg-CornFlowerBlue rounded-[40px] border-[10px] border-white shadow-lg w-64 h-40 sm:w-[700px] lg:w-[1160px] sm:h-full">
            <CardContent className="flex items-center justify-center sm:min-h-[500px]">
              <img
                src="https://c.animaapp.com/bvljseyz/img/group-1@2x.png"
                alt="Who we are"
                className="w-16"
              />
            </CardContent>
          </Card>
          <p className="text-xl text-ParaGrey mt-8 leading-relaxed 2xl:w-[1160px]">
            At NuStartz, we are your comprehensive partner in building and
            scaling your tech startup from the ground up—all the way to your
            Initial Public Offering (IPO). Our full suite of services is
            designed to support every aspect of your business, helping you
            transform your ideas into a thriving enterprise.
          </p>
        </section>

        <section className="container py-16">
          <h2 className="text-5xl font-semibold text-paragray mb-16">
            Our Solutions
          </h2>
          <div className="space-y-16 2xl:w-[1158px]">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-BrandLightBlue rounded-[20px] shadow-lg xl:w-5/7"
              >
                <CardContent className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/2 xl:w-3/4">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full object-cover rounded-l-[20px] xl:w-[800px] xl:h-[700px] 2xl:w-[579px]"
                    />
                    <h3 className="absolute top-16 left-14 text-2xl font-bold text-white">
                      {solution.title}
                    </h3>
                  </div>
                  <div className="md:w-1/2 md:p-10 h-[650px] overflow-y-auto">
                    <p className="text-2xl leading-9 text-OuterBlack ">
                      {solution.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </section>

      <section className="container py-16 px-10 md:px-40  2xl:px-60 bg-GhostWhite ">
        <h2 className="text-5xl font-bold text-paragray mb-8">
          Client Reviews
        </h2>
        <img
          src="https://c.animaapp.com/bvljseyz/img/group-1000009764.png"
          alt="Client Reviews"
          className="w-full"
        />
      </section>

      {/* <section className="container py-16 md:px-10  ">
        <div className="flex mx-auto overflow-hidden lg:h-[228px] flex-wrap lg:flex-nowrap">
          <div className="bg-BrandPurple text-white p-5 flex items-center justify-center text-5xl font-bold w-[800px] md:w-[600px] lg:w-[500px]">
            Want to solve your problem
          </div>
          <div className="flex flex-1 items-center bg-gradient-to-r from-gray-100 to-purple-100 p-3">
            <Input
              placeholder="Enter your email address"
              className="bg-white text-3xl h-[68px] px-6 rounded-none"
            />
            <Button
              size="lg"
              className=" bg-BrandPurple h-[68px] w-[68px] rounded-none"
            >
              <ArrowRight className="h-8 w-8" color="white" />
            </Button>
          </div>
        </div>
      </section> */}
    </main>
  );
};
