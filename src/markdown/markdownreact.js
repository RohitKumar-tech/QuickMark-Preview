import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import './style.css';

const MarkdownReact = () => {
    const [markdown, setMarkdown] = useState("Welcome to Markdown");
  
    return (
        <div className='center-div'>
            <textarea className="left-side" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
            <div className="right-side">
                <Markdown>{markdown}</Markdown>
            </div>
        </div>
    );
};

export default MarkdownReact;
