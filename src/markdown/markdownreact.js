import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Editor } from '@tinymce/tinymce-react';
import './style.css';
import 'boxicons';

const MarkdownReact = () => {
    const [markdown, setMarkdown] = useState("");
  
    const handleEditorChange = (content, editor) => {
        setMarkdown(content);
    }

    return (
        <div>
            {/* Header */}
            <header>
                <text>QuickMark-Preview</text>
                <a href='https://www.rohitsaraf.in/' target='_blank'>About</a>
            </header>

            {/* Markdown Console */}
            <div className='center-div'>
                <>
                    <div className='left-side'>
                        <p>Edit</p>
                        <br></br>
                        <Editor
                            apiKey='2wjf0jdpe33jkfxn8los86k01ojmq6imetzcg4hfp5k42e9f'
                            value={markdown}
                            onEditorChange={handleEditorChange}
                            init={{
                                height: 600,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
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
            <div className="footer">
                <div className="footer-text">
                    <p>Copyright &copy; 2024 by Rohit Kumar | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default MarkdownReact;
