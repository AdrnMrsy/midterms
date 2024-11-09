import { useState } from "react";

function Problem2() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  const [hidden, setHidden] = useState(true);

  function toggleProfile() {
    setHidden(prevState => !prevState);
  }

  function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className='avatar'
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </>
    );
  }

  function InitialContent() {
    return <h1>User profile is hidden.</h1>;
  }

  return (
    <div>
      {hidden ? <InitialContent /> : <Profile />}
      <button type='button' onClick={toggleProfile}>
        {hidden ? 'Show Profile' : 'Hide Profile'}
      </button>
    </div>
  );
}

export default Problem2;
