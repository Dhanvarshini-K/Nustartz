import React, { JSX } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  SendHorizonalIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import { Input } from "../../components/ui/input.tsx";

import { Separator } from "../../components/ui/separator.tsx";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs.tsx";
import { blogPosts } from "../../lib/data.ts";

export const Blogs = (): JSX.Element => {
  return (
    <div className="bg-white">
      <main className="container pt-32 px-4">
        <Tabs defaultValue="blogs">
          <TabsList className="mb-8">
            <TabsTrigger value="blogs" className="text-3xl px-8">
              Blogs
            </TabsTrigger>
            <TabsTrigger value="news" className="text-3xl px-8">
              News
            </TabsTrigger>
            <TabsTrigger value="events" className="text-3xl px-8">
              Events
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Separator className="mb-8" />

        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-paragray">
            Nustartz Blog Posts
          </h1>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeftCircleIcon className="h-6 w-6" />
            </Button>
            <Button size="icon" className="rounded-full">
              <ArrowRightCircleIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-24">
          {blogPosts.map((post) => (
            <div key={post.id} className="relative">
              <div className={`h-[340px] rounded-[20px] ${post.bgColor}`} />
              <Card className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] rounded-t-none">
                <CardContent className="pt-6 pb-8">
                  <h3 className="text-xl font-bold text-variable-collection-brand-blue-heavy mb-2">
                    {post.title}
                  </h3>
                  <p className="text-x-800">{post.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#53e5dc] via-[#80d1ea] to-[#7d67ff] p-16 mb-24">
          <div className="flex items-center gap-8">
            <div className="w-1/3">
              <h2 className="text-4xl font-bold text-white">
                Signup to our News Letter
              </h2>
            </div>
            <div className="flex-1">
              <div className="flex gap-4">
                <Input
                  placeholder="Enter your email address"
                  className="bg-white text-xl h-16"
                />
                <Button
                  size="lg"
                  className="bg-variable-collection-brand-purple-duplicate h-16 w-16"
                >
                  <SendHorizonalIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
