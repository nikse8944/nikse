import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";




export default function Feed({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   const fetchPosts = async()=>{
     const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("posts/timeline/621a3662fe26cd0726a3bc34")
     console.log(res);
     setPosts(res.data)
    
   }
   fetchPosts()
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}