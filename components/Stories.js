import faker from 'faker'
import { useEffect, useState } from 'react'
import Story from './Story'

const Stories = () => {
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        setSuggestions(suggestions)
    }, [])
    return (
        <div className="
            flex overflow-x-scroll 
            space-x-2 p-6 mt-6 border-gray-200 border 
            rounded-sm scrollbar-thin scrollbar-thumb-black">
            {suggestions.map(profile => (
                <Story 
                    key={profile.id} 
                    img={profile.avatar} 
                    username={profile.username} />
            ))}
            {/* Stories */}
            {/* Stories */}
            {/* Stories */}
            {/* Stories */}
            {/* Stories */}
        </div>
    )
}

export default Stories

