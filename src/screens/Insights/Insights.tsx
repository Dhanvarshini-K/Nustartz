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
    <div>
      <section className="bg-heroBackground pt-20 px-10 md:px-24 ">
        <div className="section-container py-16">
          <Tabs defaultValue="blogs">
            <TabsList className="mb-4">
              <TabsTrigger
                value="blogs"
                className={` text-3xl font-bold ${
                  active === "blogs" ? "text-BrandPurple" : "text-gray-400"
                }`}
                onClick={() => handleTabChange("blogs")}
              >
                {InsightTabsEnum.blogs}
              </TabsTrigger>
              <TabsTrigger
                value="news"
                className={` text-3xl font-bold px-10 ${
                  active === "news" ? "text-BrandPurple" : "text-gray-400"
                }`}
                onClick={() => handleTabChange("news")}
              >
                {InsightTabsEnum.news}
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className={` text-3xl font-bold px-10 ${
                  active === "events" ? "text-BrandPurple" : "text-gray-400"
                }`}
                onClick={() => handleTabChange("events")}
              >
                {InsightTabsEnum.events}
              </TabsTrigger>
            </TabsList>

            <Separator className="w-[100%] mb-8 bg-ChineseSilver" />
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
    </div>
  );
};