import React from "react";
import { Home, Search, Bell, Mail, User } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen bg-eerie-black text-white p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Logo</h1>
      <nav className="space-y-4">
        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-outer-space cursor-pointer">
          <Home /> <span>Home</span>
        </div>
        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-outer-space cursor-pointer">
          <Search /> <span>Explore</span>
        </div>
        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-outer-space cursor-pointer">
          <Bell /> <span>Notifications</span>
        </div>
        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-outer-space cursor-pointer">
          <Mail /> <span>Messages</span>
        </div>
        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-outer-space cursor-pointer">
          <User /> <span>Profile</span>
        </div>
      </nav>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="w-3/5 min-h-screen bg-seasalt p-6">
      <h2 className="text-xl font-bold text-onyx">Home</h2>
      <div className="mt-4 p-4 bg-antiflash-white rounded-xl shadow-md">
        <p className="text-slate-gray">
          This is a sample post in the Twitter UI.
        </p>
      </div>
    </div>
  );
};

const RightSidebar = () => {
  return (
    <div className="w-1/5 min-h-screen bg-antiflash-white p-4">
      <h2 className="text-lg font-semibold text-onyx">Trending</h2>
      <ul className="mt-2 space-y-2 text-slate-gray">
        <li>#TrendingTopic1</li>
        <li>#TrendingTopic2</li>
        <li>#TrendingTopic3</li>
      </ul>
    </div>
  );
};

const TwitterClone = () => {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
};

export default TwitterClone;
