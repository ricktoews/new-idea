import React from 'react';
import HomePost from './HomePost';

function Home(props) {
  const { posts } = props;
  return (
    <div>
      { posts.map((post, key) => <HomePost key={key} post={post}/>)}
    </div>
  );
}

export default Home;
