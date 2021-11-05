import Post from "./Post"

const posts = [{
    id:1,
    username:"Saif Ali",
    userImage:'saif.jpg',
    img:"saif.jpg",
    caption:"Hurrah i did it , yeeee!"
},
{
    id:2,
    username:"Saif Ali",
    userImage:'saif.jpg',
    img:"saif.jpg",
    caption:"Hurrah i did it , yeeee!"
}]
const Posts = () => {
    return (
        <div>
            {posts.map(post=>(
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    img={post.img}
                    userImage={post.userImage}
                    caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts
