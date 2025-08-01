import { skills } from "@/data/dummySkillData";
import ScrollFadeIn from "../scroll-fade-in";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { stats } from "@/data/statsData";



const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        I'm a frontend developer based in the Philippines with 14+ months of experience building modern, responsive, and user-friendly web apps using ReactJS, TypeScript, Tailwind CSS, and Laravel.
                    </p>
                </ScrollFadeIn>

                {/* Stats */}
                <ScrollFadeIn direction="up" delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => (
                    <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-0">
                            <div className="flex justify-center mb-3">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </CardContent>
                    </Card>
                ))}
                </ScrollFadeIn>

                {/* Skills */}
                <ScrollFadeIn direction="up" delay={0.4} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <Card 
                        key={index} 
                        className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
                    >
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white mr-4`}>
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                            {skill.technologies.map((tech, techIndex) => (
                                <Badge 
                                    key={techIndex} 
                                    variant="secondary" 
                                    className="hover:bg-gray-200 transition-colors"
                                >
                                    { tech }
                                </Badge>
                            ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
                </ScrollFadeIn>

                {/* Personal Description */}
                <ScrollFadeIn direction="up" delay={0.6} className="mt-16 text-center">
                    <Card className="max-w-4xl mx-auto border-0 shadow-lg">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h3>
                            <div className="space-y-4 text-justify">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    I’m deeply passionate about web and software development, driven by a strong desire to build meaningful, user-focused applications. My journey began with an intensive four-month Coding Bootcamp, where I passed technical evaluations, participated in daily programming sessions, and gained a solid foundation in industry best practices. After graduating, I committed to over a year of disciplined self-study, mastering modern full-stack tools including React, TypeScript, TailwindCSS, and Laravel.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Previously, I spent six years in a support role at my former company. That experience taught me discipline, resilience, and how to solve real-world problems—skills that now fuel my transition into full-time development. I’m currently focused on front-end development, but I also have experience building full-stack web applications using modern frameworks. My portfolio reflects not only my technical growth but also my dedication to creating efficient, responsive, and maintainable solutions.
                                </p>
                            </div>
                            
                        </CardContent>
                    </Card>
                </ScrollFadeIn>
            </div>
        </section>
    );
}

export default About;