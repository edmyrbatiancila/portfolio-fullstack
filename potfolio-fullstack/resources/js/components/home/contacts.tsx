import { CheckCircle, Send } from "lucide-react";
import ScrollFadeIn from "../scroll-fade-in";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { contactInfo, socialLinks } from "@/data/contactData";
import { useState } from "react";

const Contacts = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // toast({
        //   title: "Message sent successfully!",
        //   description: "Thank you for your message. I'll get back to you soon.",
        // });
        
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Get In Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and development.
                </p>
                </ScrollFadeIn>

                <ScrollFadeIn direction="up" delay={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="border-0 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white">Send Me a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="transition-all focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="transition-all focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="transition-all focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="transition-all focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            >
                            {isSubmitting ? (
                                <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Sending...
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Message
                                </div>
                            )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl text-gray-900 dark:text-white">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                                    { item.icon }
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                                    <a
                                        href={item.href}
                                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                    >
                                        {item.value}
                                    </a>
                                </div>
                            </div>
                        ))}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl text-gray-900 dark:text-white">Follow Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all hover:shadow-md hover:scale-105`}
                                >
                                    { social.icon }
                                </a>
                            ))}
                            </div>
                            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                                <div className="flex items-center text-green-700">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    <span className="font-medium">Available for new opportunities</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Currently open to freelance projects and full-time positions.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                </ScrollFadeIn>
            </div>
        </section>
    );
}

export default Contacts;