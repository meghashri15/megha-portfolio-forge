
import { Milestone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="section-wrapper">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="hover-card">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Bachelor of Engineering in Information Science & Engineering</CardTitle>
                  <CardDescription className="text-lg font-medium mt-1">RVITM, Bangalore, Karnataka</CardDescription>
                </div>
                <Badge className="self-start md:self-auto" variant="outline">
                  CGPA: 8.2
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Expected Graduation: [Month, Year]</span>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <Milestone size={16} className="text-primary" />
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Milestone size={16} className="text-primary" />
                    <span>Database Management Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Milestone size={16} className="text-primary" />
                    <span>Web Technologies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Milestone size={16} className="text-primary" />
                    <span>Software Engineering</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="hover-card bg-gradient-to-r from-pastel-lavender/20 to-transparent">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 rounded-full bg-pastel-lavender flex items-center justify-center text-primary font-bold mr-4">
                    HI
                  </div>
                  <div>
                    <h4 className="font-medium">Hindi</h4>
                    <p className="text-sm text-muted-foreground">Bilingual Proficiency</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-card bg-gradient-to-r from-pastel-blue/20 to-transparent">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 rounded-full bg-pastel-blue flex items-center justify-center text-primary font-bold mr-4">
                    EN
                  </div>
                  <div>
                    <h4 className="font-medium">English</h4>
                    <p className="text-sm text-muted-foreground">Bilingual Proficiency</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
