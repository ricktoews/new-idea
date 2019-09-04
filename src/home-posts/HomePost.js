import React from 'react';
import { extractContent } from './post-helpers.js';

function HomePost(props) {
  var { category, articleLink, title, content } = extractContent(props.post);
  var contentHtml = { __html: content };

  function handleClick(e) {
    let link = e.target.dataset.link;
    props.history.push(link);
  }

  return (
     <div className="post-content">
       <article className={category}>
         <header onClick={handleClick}>
           <div className="title" data-link={articleLink}>{title}</div>
           <div className="date"></div>
         </header>
         <div className="content-wrapper" dangerouslySetInnerHTML={contentHtml}></div>
       </article>
     </div>
  );
}

export default HomePost;
