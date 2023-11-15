import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return <h2>Loading ...</h2>;
  } else if (isError) {
    {
      return <h2>There was an error ...</h2>;
    }
  }
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
