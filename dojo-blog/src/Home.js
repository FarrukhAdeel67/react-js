import {useState} from 'react'
//use of hooks to add and update the lists of blogs 
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Farrukh Adeel", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, unde minus in omnis qui delectus expedita, porro, dolorem voluptatum natus assumenda quam consequatur enim reiciendis aliquam nam iure non et?", author:"frk", id:1},
        {title: "Hashir Asmat", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, unde minus in omnis qui delectus expedita, porro, dolorem voluptatum natus assumenda quam consequatur enim reiciendis aliquam nam iure non et?", author:"hashir", id:2},
        {title: "Qazi Ahmad Khan", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, unde minus in omnis qui delectus expedita, porro, dolorem voluptatum natus assumenda quam consequatur enim reiciendis aliquam nam iure non et?", author:"qazi", id:3},
    ])   

    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <b>Written By {blog.author}</b>
                </div>
            ))}
        </div>
     );
}
 
export default Home;