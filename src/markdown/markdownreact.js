import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import './style.css';

const MarkdownReact = () => {
    const [markdown, setMarkdown] = useState("");
  
    return (
        <div>
            <text1>QuickMark-Preview</text1>
            <div className='center-div'>
            <>
            <div className='left-side'>
                <p>Edit</p>
            <textarea className="left-side" value={markdown} onChange={(e) => setMarkdown(e.target.value)} rows="15" cols="28">
            </textarea>
            </div>
            <div className="right-side" >
                <text>Preview</text>
                <Markdown>{markdown}</Markdown>
            </div>
            </>
        </div>
        <div class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2024 by Rohit Kumar | All Rights Reserved.</p>
        </div>
        
    </div>
        </div>
    );
};

export default MarkdownReact;
