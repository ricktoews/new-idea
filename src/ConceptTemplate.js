import React from 'react';
import { AnimatedBlocks } from './AnimatedBlocks.js';
import { Header } from './HeaderTemplate.js';

import us_map from './assets/us_map.svg';

import './ConceptContent.css';

export const Concept = () => (
<div className="Concept">
{/* Content */}
  <div id="content-wrapper">
    <Header/>
    <div id="content-left-border"></div>
{/*
    <div id="actual-content-container">
      <div id="actual-content">
<img src={us_map} alt="US Map"/>
<p>Content:</p>
<ul>
  <li>Quiz on U.S. Map</li>
  <li>List of books on GoodReads</li>
  <li>Decimal calculator</li>
  <li>Multiplication challenge</li>
  <li>Tech articles</li>
</ul>
<p>He was a man of small stature, with hair blanched rather by suffering and sorrow than by age. He had a deep-set, penetrating eye, almost buried beneath the thick gray eyebrow, and a long (and still black) beard reaching down to his breast. His thin face, deeply furrowed by care, and the bold outline of his strongly marked features, betokened a man more accustomed to exercise his mental faculties than his physical strength. Large drops of perspiration were now standing on his brow, while the garments that hung about him were so ragged that one could only guess at the pattern upon which they had originally been fashioned.</p>

<p>The stranger might have numbered sixty or sixty-five years; but a certain briskness and appearance of vigor in his movements made it probable that he was aged more from captivity than the course of time. He received the enthusiastic greeting of his young acquaintance with evident pleasure, as though his chilled affections were rekindled and invigorated by his contact with one so warm and ardent. He thanked him with grateful cordiality for his kindly welcome, although he must at that moment have been suffering bitterly to find another dungeon where he had fondly reckoned on discovering a means of regaining his liberty.</p>

<p>“Let us first see,” said he, “whether it is possible to remove the traces of my entrance here—our future tranquillity depends upon our jailers being entirely ignorant of it.”</p>

<p>Advancing to the opening, he stooped and raised the stone easily in spite of its weight; then, fitting it into its place, he said:</p>

<p>“You removed this stone very carelessly; but I suppose you had no tools to aid you.”</p>

<p>“Why,” exclaimed Dantès, with astonishment, “do you possess any?”</p>

<p>“I made myself some; and with the exception of a file, I have all that are necessary,—a chisel, pincers, and lever.”</p>

<p>He was a man of small stature, with hair blanched rather by suffering and sorrow than by age. He had a deep-set, penetrating eye, almost buried beneath the thick gray eyebrow, and a long (and still black) beard reaching down to his breast. His thin face, deeply furrowed by care, and the bold outline of his strongly marked features, betokened a man more accustomed to exercise his mental faculties than his physical strength. Large drops of perspiration were now standing on his brow, while the garments that hung about him were so ragged that one could only guess at the pattern upon which they had originally been fashioned.</p>

<p>The stranger might have numbered sixty or sixty-five years; but a certain briskness and appearance of vigor in his movements made it probable that he was aged more from captivity than the course of time. He received the enthusiastic greeting of his young acquaintance with evident pleasure, as though his chilled affections were rekindled and invigorated by his contact with one so warm and ardent. He thanked him with grateful cordiality for his kindly welcome, although he must at that moment have been suffering bitterly to find another dungeon where he had fondly reckoned on discovering a means of regaining his liberty.</p>

<p>“Let us first see,” said he, “whether it is possible to remove the traces of my entrance here—our future tranquillity depends upon our jailers being entirely ignorant of it.”</p>

<p>Advancing to the opening, he stooped and raised the stone easily in spite of its weight; then, fitting it into its place, he said:</p>

<p>“You removed this stone very carelessly; but I suppose you had no tools to aid you.”</p>

<p>“Why,” exclaimed Dantès, with astonishment, “do you possess any?”</p>

<p>“I made myself some; and with the exception of a file, I have all that are necessary,—a chisel, pincers, and lever.”</p>

      </div>
    </div>
*/}
  </div>

  <AnimatedBlocks/>
</div>
)
