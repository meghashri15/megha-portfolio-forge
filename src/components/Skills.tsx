
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("programming");

  const skills = {
    programming: [
      { name: "Python", level: 85 },
    ],
    web: [
      { name: "HTML", level: 80 },
    ],
    database: [
      { name: "SQL", level: 75 },
    ],
    tools: [
      { name: "VS Code", level: 90 },
      { name: "PyCharm", level: 85 },
    ]
  };

  const renderSkillBars = (skillArray: { name: string, level: number }[]) => {
    return skillArray.map((skill, index) => (
      <div key={index} className="mb-6 last:mb-0">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="bg-secondary rounded-full h-2 overflow-hidden">
          <div 
            className="skill-bar" 
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-wrapper">
        <h2 className="section-title">Technical Skills</h2>
        
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <Tabs defaultValue="programming" className="w-full">
              <div className="p-4 border-b">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-secondary/70">
                  <TabsTrigger value="programming" onClick={() => setActiveTab("programming")}>
                    Programming
                  </TabsTrigger>
                  <TabsTrigger value="web" onClick={() => setActiveTab("web")}>
                    Web Technologies
                  </TabsTrigger>
                  <TabsTrigger value="database" onClick={() => setActiveTab("database")}>
                    Databases
                  </TabsTrigger>
                  <TabsTrigger value="tools" onClick={() => setActiveTab("tools")}>
                    Tools
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6">
                <TabsContent value="programming" className="mt-0">
                  {renderSkillBars(skills.programming)}
                </TabsContent>
                <TabsContent value="web" className="mt-0">
                  {renderSkillBars(skills.web)}
                </TabsContent>
                <TabsContent value="database" className="mt-0">
                  {renderSkillBars(skills.database)}
                </TabsContent>
                <TabsContent value="tools" className="mt-0">
                  {renderSkillBars(skills.tools)}
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
