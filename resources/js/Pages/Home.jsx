import { Link } from "@inertiajs/react";
// import Layout from "../Layouts/Layout";

const Home = () => {
    return (
        <>
            <h1 className="title">Hello user</h1>

            <Link preserveScroll className="block title mt-[1000px]" href="/">
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    );
};

// Home.layout = (page) => <Layout children={page} />;

export default Home;
