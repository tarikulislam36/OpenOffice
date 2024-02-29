import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

// Define the toolbar options
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'],                                         // remove formatting button
  ['link', 'image', 'video']                         // link and image, video
];

const TextEditor = () => {
  const [text, setText] = useState('');

  const handleChange = value => {
    setText(value);
  };

  return (
    <ReactQuill 
      theme="snow"
      value={text}
      onChange={handleChange}
      modules={{ toolbar: toolbarOptions }}
    />
  );
};

export default TextEditor;
