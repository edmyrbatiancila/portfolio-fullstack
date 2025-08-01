import { ExternalLink, Eye, Github } from "lucide-react";
import ScrollFadeIn from "../scroll-fade-in";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { projects } from "@/data/projectData";

const Projects = () => {

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience 
                        in full-stack development.
                    </p>
                </ScrollFadeIn>

                {/* Featured Projects */}
                <ScrollFadeIn 
                    direction="up" 
                    delay={0.2} 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                >
                {featuredProjects.map((project, index) => (
                    <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                        <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-3">
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-gray-900 hover:text-gray-900">
                            <Eye className="h-4 w-4 mr-2" />
                            Demo
                            </Button>
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-gray-900 hover:text-gray-900">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                            </Button>
                        </div>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                        </div>
                        <div className="flex space-x-3">
                        <Button size="sm" variant="outline" className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                        </Button>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </ScrollFadeIn>

                {/* Other Projects */}
                <ScrollFadeIn direction="up" delay={0.4}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Other Projects</h3>
                <ScrollFadeIn direction="up" delay={0.6} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                    <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="relative overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        </div>
                        <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-gray-900 dark:text-white">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                                +{project.technologies.length - 3}
                            </Badge>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="flex-1 text-xs">
                            <Eye className="h-3 w-3 mr-1" />
                            Demo
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 text-xs">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                            </Button>
                        </div>
                        </CardContent>
                    </Card>
                    ))}
                </ScrollFadeIn>
                </ScrollFadeIn>
            </div>
        </section>
    );
}

export default Projects;