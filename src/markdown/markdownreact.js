import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import './style.css';
import 'boxicons';

const MarkdownReact = () => {
    const [markdown, setMarkdown] = useState("");
  
    return (
        <div>
            {/* Header */}
            <header>
            <text>QuickMark-Preview</text>
            <a href='https://www.rohitsaraf.in/'>About</a>
            </header>

            {/* toolbar */}
            <div className='toolbar'>

            </div>

            {/* Markdown Console */}
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
        {/* Documentation */}
        <div className='Cheat-sheet'>
            <a href='https://www.markdownguide.org/cheat-sheet/' target='_blank'>Markdown Documentation</a>
        </div>


        {/* Footer */}
        <div class="footer">
            <div class="footer-text">
                <p>Copyright &copy; 2024 by Rohit Kumar | All Rights Reserved.</p>
            </div>
        </div>
        </div>
    );
};

export default MarkdownReact;
