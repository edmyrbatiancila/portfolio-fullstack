import About from "@/components/home/about";
import Contacts from "@/components/home/contacts";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import MainLayout from "@/layouts/main-layout";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <MainLayout>
            <Head title="My Portfolio"/>

            <Hero />
            <About />
            <Projects />
            <Contacts />
        </MainLayout>
    );
}

export default Home;