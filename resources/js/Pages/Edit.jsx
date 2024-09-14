import { Head, useForm, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

const Edit = ({ post }) => {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });

    const route = useRoute();

    const { component } = usePage();

    console.log(component);

    // console.log(useForm());

    console.log(errors);

    const submit = (e) => {
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route("posts.update", post));
    };

    return (
        <>
            <Head title={component} />

            <h1 className="title">Update your post</h1>
            {/* {data.body} */}

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>

                    {errors.body && <p className="error">{errors.body}</p>}

                    <button className="primary-btn mt-4" disabled={processing}>
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Edit;
