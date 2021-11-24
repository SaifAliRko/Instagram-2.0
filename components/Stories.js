import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";
const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="
            flex overflow-x-scroll 
            space-x-2 p-6 mt-6 border-gray-200 border 
            rounded-sm scrollbar-thin scrollbar-thumb-black"
    >

      {session && (
      <Story
        key={session.user.name}
        img={session.user.image}
        username={session.user.name}
        
      />)}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
