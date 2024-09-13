import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    // console.log(useForm());

    console.log(errors);

    const submit = (e) => {
        e.preventDefault();
        post("/posts");
    };

    return (
        <>
            <h1 className="title">Create a new post</h1>
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
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;
