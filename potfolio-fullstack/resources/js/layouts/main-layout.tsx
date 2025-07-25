import Navbar from "@/components/navbar";

interface IMainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="flex-grow">
                { children }
            </main>
        </div>
    );
}

export default MainLayout;