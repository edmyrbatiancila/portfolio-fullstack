import { Github, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

export const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'batiancilaedmyr@gmail.com',
      href: 'mailto:batiancilaedmyr@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '(032) 427 9826',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Cebu, PH 6000',
      href: '#'
    }
];

export const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/edmyrbatiancila',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/edmyr-batiancila/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      label: 'Youtube',
      href: 'https://www.youtube.com/@edmyrbatiancila5469',
      color: 'hover:text-red-400'
    }
];