import MainLayout from "@/layouts/main-layout";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <MainLayout>
            <Head title="My Portfolio"/>

            <div className="text-center mt-16">
        <h1 className="text-4xl font-bold text-indigo-700">Hi, I'm Edmyr 👋</h1>
        <p className="mt-4 text-gray-700">A passionate Full-Stack Web Developer in the making.</p>
      </div>
        </MainLayout>
    );
}

export default Home;