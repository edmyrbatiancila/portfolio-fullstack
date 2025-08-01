import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const downloadResume = () => {
        // Create a dummy PDF download - in real implementation, this would be your actual resume
        const link = document.createElement('a');
        link.href = 'resume/Edmyr_Batiancila_Resume.pdf'; // You would replace this with your actual resume file
        link.download = 'Edmyr_Batiancila_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section 
            id="hero" 
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22%23e5e7eb%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url%28%23grid%29%22%2F%3E%3C%2Fsvg%3E')] opacity-50"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight">
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Edmyr Batiancila
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            A passionate Frontend Developer specializing in React, TypeScript, and Tailwind CSS.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                size="lg"
                                onClick={scrollToAbout}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
                            >
                                View My Work
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={downloadResume}
                                className="px-8 py-3 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                            >
                                <Download className="h-5 w-5 mr-2" />
                                Download Resume
                            </Button>
                        </div>
                        <div className="flex space-x-4">
                            <Button variant="outline" size="lg" className="p-3">
                                <Github className="h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="p-3">
                                <Linkedin className="h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="p-3">
                                <Mail className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={scrollToAbout}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <ArrowDown className="h-6 w-6" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;