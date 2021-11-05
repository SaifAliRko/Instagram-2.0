const Story = ({username,img}) => {
    return (
        <div>
            <img className='
                h-14 w-14 rounded-full object-contain
                border-2 border-red-500 p-[1.5px]
                cursor-pointer hover:scale-110
                transition duration-200 transform ease-out' 
            src={img} alt="Users" />
            <p className="w-14 truncate text-xs text-center">{username}</p>
        </div>
    )
}

export default Story





