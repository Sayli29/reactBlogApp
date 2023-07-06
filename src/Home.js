import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <div><h1>All Blogs!</h1></div>}
            {blogs && <BlogsList blogs={blogs} /> }
        </div>
    );
}

export default Home;