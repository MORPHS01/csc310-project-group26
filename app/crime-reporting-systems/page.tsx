"use client"
import React, { useState } from 'react';
import { Shield, AlertTriangle, Users, Globe, Smartphone, MessageSquare, Navigation, Bell } from 'lucide-react';

type Systems = {
  id: number;
  title: string;
  description: string;
  features: string[];
  link: string;
}[]


function CrimeReportingSystems() {
  const categories:string[] = ["Anonymous Reporting", "Real-time Updates", "Community Reports", "Map Integration", "AI Analysis", "Emergency Response","Neighborhood Watch", "Social Features", "Alert System", "Mobile App"];
  const [activeTab, setActiveTab] = useState<string>("All");
  const [data, setData] = useState<Systems>([]);


  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "Anonymous Reporting": return <Shield className="w-5 h-5" />;
      case "Emergency Response": return <AlertTriangle className="w-5 h-5" />;
      case "Community Reports": return <Users className="w-5 h-5" />;
      case "Map Integration": return <Navigation className="w-5 h-5" />;
      case "Mobile App": return <Smartphone className="w-5 h-5" />;
      case "Social Features": return <MessageSquare className="w-5 h-5" />;
      case "Alert System": return <Bell className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  async function checkData(feature: string) {
    setActiveTab(feature);
    const categories:string[] = ["Anonymous Reporting", "Real-time Updates", "Community Reports", "Map Integration", "AI Analysis", "Emergency Response","Neighborhood Watch", "Social Features", "Alert System", "Mobile App"];
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC4n_gMM8vYGT86I7m32fJgCi1mAoBA-T0&cx=9761500df74d5452d&q=crime-reporting-systems-that-has-${feature}`)
    const data = await response.json()
    const systems:Systems = data.items.map((item: { title: string; snippet: string; link: string; }, i: number) =>({
      id: i,
      title: item.title,
      description: item.snippet,
      features: feature === "All" ? categories.sort(() => Math.random() - 0.5).slice(0,4).map(category => category ) : categories.sort(() => Math.random() - 0.5).slice(0,3).map(category => category ),
      link: item.link,
    }))
    setData(systems);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">
          Crime Reporting Systems
        </h1>
        
        {/* Feature Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 pb-2">
            <button
              onClick={() => checkData("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "All"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              All Systems
            </button>
            {categories.map((feature) => (
              <button
                key={feature}
                onClick={() => checkData(feature)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === feature
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.map((system) => (
            <div
              key={system.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-indigo-900 mb-3">
                  {system.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {system.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  { activeTab !== "All" &&
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
                    {getFeatureIcon(activeTab)}
                    <span className="ml-2">{activeTab}</span>
                  </span>
                  }
                  {system.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800"
                    >
                      {getFeatureIcon(feature)}
                      <span className="ml-2">{feature}</span>
                    </span>
                  ))}
                </div>
                
                {/* Link Button */}
                <a
                  href={system.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
                >
                  Visit Platform
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CrimeReportingSystems;