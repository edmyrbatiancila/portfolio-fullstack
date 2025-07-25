import { menuItems } from "@/lib/utils";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState('hero');

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        >
                            My Portfolio
                        </button>
                    </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                activeSection === item.id
                                ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                        <ThemeToggle />
                    </div>
                </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <div className="flex items-center space-x-2">
                            <>
                                <ThemeToggle />
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </Button>
                            </>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md rounded-lg mb-2 dark:bg-gray-900/90">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                                activeSection === item.id
                                ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    </div>
                </div>
                )}
            </div>
        </nav>
    );

}

export default Navbar;