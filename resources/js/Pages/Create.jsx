export default function Create() {
    return (
        <>
            <h1 className="title">Create a new post</h1>

            <div className="w-1/2 mx-auto">
                <form>
                    <textarea rows="10"></textarea>

                    <button className="primary-btn mt-4">Create Post</button>
                </form>
            </div>
        </>
    );
}
