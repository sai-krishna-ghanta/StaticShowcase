import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { researchProjects } from "@/data/portfolio-data";

const Research = () => {
  return (
    <div className="min-h-screen bg-slate-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Recent Research</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              My research focuses on advancing multi-robot systems, computer vision, and AI
              frameworks for autonomous navigation and cooperative exploration.
            </p>
          </div>

          <div className="space-y-12">
            {researchProjects.map((project, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h2>

                  <div className="mb-4">
                    {project.authors.map((author, authorIndex) => (
                      <span key={authorIndex}>
                        <span className="text-blue-primary font-medium">{author}</span>
                        {authorIndex < project.authors.length - 1 && ", and "}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-slate-500 mb-6">
                    {project.venue} • {project.year}
                  </div>

                  <p className="text-slate-600 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-blue-primary hover:bg-blue-secondary">
                      <FileText className="mr-2 h-4 w-4" />
                      Paper
                    </Button>
                    <Button variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      arXiv
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/publications">
              <Button className="bg-blue-primary hover:bg-blue-secondary">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
