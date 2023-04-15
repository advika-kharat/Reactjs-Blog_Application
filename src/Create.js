import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(
            () => {
                console.log('new blog');
                setIsPending(false);
            }
        )
        history.push('/');
    }

    return ( 
        <div className = "create">
            <h2 id="add">add a new blog</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>blog title: </label>
                <br/>
                <input
                type="text"
                required value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <label>blog body: </label>
                <br/>
                <textarea required
                value={body}
                onChange={(e) => setBody(e.target.value)}>

                </textarea>
                <br/>
                <label>blog author: </label>
                
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="adi">adi</option>
                    <option value="suru">suru</option>
                </select>
                <br/>
                { !isPending && <button>add blog</button> }
                { isPending && <button disabled>adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;