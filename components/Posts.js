import { collection, doc, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post"


const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        // const q = query(collection(db, "posts"));
        // const unsubscribe = onSnapshot(q, orderBy('timestamp', 'desc'), (querySnapshot) => {
        //     const posts = [];
        //     querySnapshot.forEach((doc) => {
        //         posts.push(doc.data());
        //     });
        //     setPosts(posts)
        //     console.log("Current cities in CA: ", posts);
        // });


        const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        });


        return () => {
            unsubscribe()
        }
    }, [db])
    return (
        <div>
            { posts.map((post) => (
                <Post
                    key={ post.id }
                    id={ post.id }
                    username={ post.data().username }
                    userImg={ post.data().profileImg }
                    img={ post.data().image }
                    caption={ post.data().caption }
                />
            )) }

        </div>
    )
}

export default Posts
