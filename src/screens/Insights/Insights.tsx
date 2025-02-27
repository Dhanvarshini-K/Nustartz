import { useState } from "react";
import { Separator } from "../../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Blogs } from "../Blogs/Blogs";
import { Events } from "../Events/Events";
import { News } from "../News/News";
import { InsightTabsEnum } from "../../lib/insightsPageData";

export const Insights = () => {
  const [active, setActive] = useState("blogs");
  const handleTabChange = (tab: string) => {
    setActive(tab);
  };
  return (
    <section className="bg-custom-gradient px-4 md:px-20">
      <div className="section-container py-10 sm:py-16">
        <Tabs defaultValue="blogs">
          <TabsList className="mb-2 sm:mb-4">
            <TabsTrigger
              value="blogs"
              className={`text-lg sm:text-3xl font-bold ${
                active === "blogs" ? "text-BrandPurple" : "text-gray-400"
              }`}
              onClick={() => handleTabChange("blogs")}
            >
              {InsightTabsEnum.blogs}
            </TabsTrigger>
            <TabsTrigger
              value="news"
              className={`text-lg sm:text-3xl font-bold px-5 sm:px-10 ${
                active === "news" ? "text-BrandPurple" : "text-gray-400"
              }`}
              onClick={() => handleTabChange("news")}
            >
              {InsightTabsEnum.news}
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className={`text-lg sm:text-3xl font-bold pr-10 ${
                active === "events" ? "text-BrandPurple" : "text-gray-400"
              }`}
              onClick={() => handleTabChange("events")}
            >
              {InsightTabsEnum.events}
            </TabsTrigger>
          </TabsList>

          <Separator className="w-[100%] mb-4 sm:mb-8 bg-ChineseSilver" />
          <TabsContent value="blogs">
            <Blogs />
          </TabsContent>
          <TabsContent value="news">
            <News />
          </TabsContent>
          <TabsContent value="events">
            <Events />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
