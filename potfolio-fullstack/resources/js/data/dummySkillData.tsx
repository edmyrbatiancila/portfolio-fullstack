import { Database, GitBranch, Globe, Palette, Server, Smartphone } from "lucide-react";

export const skills = [
    {
        category: 'Frontend',
        icon: <Globe className="h-6 w-6" />,
        color: 'from-blue-500 to-cyan-500',
        technologies: [
            'ReactJS',
            'TypeScript',
            'Next.js (Learning)',
            'Tailwind CSS',
            'Vite',
            'InertiaJS',
            'ShadCN UI'
        ]
    },
    {
        category: 'Backend',
        icon: <Server className="h-6 w-6" />,
        color: 'from-green-500 to-emerald-500',
        technologies: [
            'Laravel',
            'PHP',
            'REST APIs',
            'Authentication',
            'Form Validation',
            'Eloquent ORM'
        ]
    },
    {
        category: 'Database',
        icon: <Database className="h-6 w-6" />,
        color: 'from-purple-500 to-violet-500',
        technologies: [
            'MySQL',
            'SQLite (For local dev)',
            'Database Normalization',
            'Laravel Migrations',
            'Eloquent Relationships'
        ]
    },
    {
        category: 'DevOps / Tools',
        icon: <GitBranch className="h-6 w-6" />,
        color: 'from-orange-500 to-red-500',
        technologies: [
            'Git',
            'GitHub',
            'CI/CD (Learning)',
            'Vercel (Frontend Hosting)',
            'Laravel Forge (Learning)',
            'Local dev using XAMPP / Valet'
        ]
    },
    {
        category: 'Design / UI',
        icon: <Palette className="h-6 w-6" />,
        color: 'from-indigo-500 to-purple-500',
        technologies: [
            'Figma',
            'UI/UX Best Practices',
            'Responsive Design',
            'Wireframing',
            'Component-Based Design'
        ]
    },
    {
        category: 'Extra',
        icon: <Smartphone className="h-6 w-6" />,
        color: 'from-pink-500 to-rose-500',
        technologies: [
            'Recharts (Data Visualization)',
            'localStorage (State Persistence)',
            'Custom Hooks',
            'Trello Planning',
            'Markdown Journaling',
            'Self-Study Habit Tracker'
        ]
    }
];
