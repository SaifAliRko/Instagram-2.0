import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"

import { HeartIcon as HeartIconFilled } from '@heroicons/react/outline'


const Post = ({id,username,img,userImage,caption}) => {
    return (
        <div className="bg-white py-7 rounded-sm border">
            {/* Header */}
            <div className="flex items-center p-5 border">
                <img 
                    className="h-12 w-12
                        border p-1 m-3 rounded-full
                    "
                    src={userImage} alt="" />
            <p className="flex-1 font-bold">{username}</p>
            <DotsHorizontalIcon className="btn"/>
            </div>
            {/* image */}
            <img className="w-full object-cover" src={img} alt="" />
            {/* buttons */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatIcon className="btn"/>
                    <PaperAirplaneIcon className="btn"/>
                </div>
                <BookmarkIcon className="btn"/>
            </div>
            {/* caption */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username}</span>
                {caption}</p>
            {/* comments */}
            {/* input box */}
            <form className="flex items-center p-4" action="">
                <EmojiHappyIcon className="h-7"/>
                <input className="border-none flex-1 focus:ring-0 outline-none" 
                    placeholder="Add a comment..."
                    type="text" />
                <button className=" font-semibold text-blue-400">Post</button>
            </form>
        </div>
    )
}

export default Post
