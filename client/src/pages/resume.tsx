import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { education, experience, skills } from "@/data/portfolio-data";

const Resume = () => {
  const getExperienceColor = (color: string) => {
    switch (color) {
      case "green":
        return "border-green-500";
      case "yellow":
        return "border-yellow-500";
      case "purple":
        return "border-purple-500";
      default:
        return "border-blue-500";
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Resume</h1>
            <p className="text-lg text-slate-600">Academic and professional experience</p>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Education</h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-primary pl-8">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">{edu.degree}</h3>
                    <span className="text-sm text-slate-500 font-medium">{edu.period}</span>
                  </div>
                  <div className="text-blue-primary font-medium mb-3">{edu.institution}</div>
                  <p className="text-slate-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Research Experience</h2>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className={`border-l-4 pl-8 ${getExperienceColor(exp.color)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    <span className="text-sm text-slate-500 font-medium">{exp.period}</span>
                  </div>
                  <div className="text-blue-primary font-medium mb-3">{exp.organization}</div>
                  <p className="text-slate-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Technical Skills</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-100 text-blue-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-green-100 text-green-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleDownload}
              className="bg-blue-primary hover:bg-blue-secondary"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
