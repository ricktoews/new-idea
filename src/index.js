import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function makeLinks(post) {
  let linkEl = document.createElement('button');
  linkEl.className = 'post-article-link';
  linkEl.dataset.link = '/article/' + post.title;
  linkEl.innerHTML = 'Link to article';

  let homeLinkEl = document.createElement('button');
  homeLinkEl.className = 'home-article-link';
  homeLinkEl.innerHTML = 'Home';

  return {
    linkToArticle: linkEl,
    linkToHome: homeLinkEl
  };
}

function fetchContent() {
  var url = 'http://rest.toewsweb.net/index.php/content';
  return fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      res.data = res.data.map(d => { 
        let homeArticleEl = document.createElement('div');
        let fullArticleEl = document.createElement('div');
        homeArticleEl.innerHTML = d.content;
        fullArticleEl.innerHTML = d.content;

        let { linkToHome } = makeLinks(d);

        let homeArticle = homeArticleEl.firstChild;
        let fullArticle = fullArticleEl.firstChild;
        let titleEl = homeArticle.querySelector('.title');
        if (titleEl) titleEl.dataset.link = '/article/' + d.title;
        fullArticle.appendChild(linkToHome);

        d.homeArticle = homeArticle.outerHTML;
        d.fullArticle = fullArticle.outerHTML;
        d.path = '/article/' + d.title; return d; 
      });
      return res.data;
    })
}

fetchContent().then(function(data) {
        console.log('Home page data', data);
  ReactDOM.render(<BrowserRouter><App content={data} /></BrowserRouter>, document.getElementById('root'));
});
registerServiceWorker();
