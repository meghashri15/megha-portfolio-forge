
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Nails Salon Website",
    description: "Designed and developed a user-friendly website for a nail salon, showcasing services, booking options, and engaging visuals to enhance customer experience.",
    image: "/placeholder.svg",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer",
    demoUrl: "#",
    githubUrl: "#",
    date: "April 2025"
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "Future project to be added to the portfolio.",
    image: "/placeholder.svg",
    tech: [],
    role: "",
    demoUrl: "",
    githubUrl: "",
    date: ""
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "Future project to be added to the portfolio.",
    image: "/placeholder.svg",
    tech: [],
    role: "",
    demoUrl: "",
    githubUrl: "",
    date: ""
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="section-wrapper">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className={`project-card overflow-hidden ${project.id !== 1 ? 'opacity-60' : ''}`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 flex items-end justify-center p-4 opacity-0 hover:opacity-100 transition-opacity">
                  {project.id === 1 && (
                    <div className="flex space-x-3">
                      <Button asChild size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <Github size={14} />
                          Code
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  {project.date && (
                    <Badge variant="outline" className="text-xs font-normal">
                      {project.date}
                    </Badge>
                  )}
                </div>
                {project.role && <CardDescription>{project.role}</CardDescription>}
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              
              {project.tech.length > 0 && (
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
