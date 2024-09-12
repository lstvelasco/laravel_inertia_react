import { Link } from "@inertiajs/react";
// import Layout from "../Layouts/Layout";

const Home = ({ posts }) => {
    console.log(posts);
    return (
        <>
            <h1 className="title">Hello</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

// Home.layout = (page) => <Layout children={page} />;

export default Home;
