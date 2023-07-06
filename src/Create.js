import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () =>{
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('sayli');
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,subtitle, body, author};
        console.log(blog);

        setPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'Post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {console.log("new blog added")
                        setPending(false)
                        // history.go(-1);
                        history.push('/')
                    })
    }

    return(
        <div className="create">
            <h1>Add new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text"
                 required 
                 value={title} 
                 onChange={(e)=> setTitle(e.target.value)}/>
                <label>Blog Subtitle</label>
                <input type="text"
                    required
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)} />
                <label>Blog Body</label>
                <textarea  cols="50" rows="8"required
                value = {body}
                onChange = {(e)=>setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="sayli" 
                    required
                    >sayli</option>
                    <option value="nira">nira</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;