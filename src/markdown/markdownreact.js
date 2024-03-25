import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import './style.css';

const MarkdownReact = () => {
    const [markdown, setMarkdown] = useState("");
  
    return (
        <div className='center-div'>
            <div className='left-side'>
                <p>Edit</p>
            <textarea className="left-side" value={markdown} onChange={(e) => setMarkdown(e.target.value)} rows="15" cols="28">
            </textarea>
            </div>
            <div className="right-side" >
                <text>Preview</text>
                <Markdown>{markdown}</Markdown>
            </div>
        </div>
    );
};

export default MarkdownReact;
