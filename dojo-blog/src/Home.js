import {useState} from 'react'
import BlogList from './BlogList';
//use of hooks to add and update the lists of blogs 
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "ICP", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, unde minus in omnis qui delectus expedita, porro, dolorem voluptatum natus assumenda quam consequatur enim reiciendis aliquam nam iure non et?", author:"Farrukh Adeel", id:1},
        {title: "Hashir Asmat", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, unde minus in omnis qui delectus expedita, porro, dolorem voluptatum natus assumenda quam consequatur enim reiciendis aliquam nam iure non et?", author:"hashir", id:2},
        {title: "PPS", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, unde minus in omnis qui delectus expedita, porro, dolorem voluptatum natus assumenda quam consequatur enim reiciendis aliquam nam iure non et?", author:"Farrukh Adeel", id:3},
    ])  
    const handleDelete = (id)=>{
        const newBlog = blogs.filter((blog)=> blog.id !==id);
        setBlogs(newBlog);
    } 
    return ( 
        <div className="home">
           <BlogList blogs = {blogs} title= "All Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;