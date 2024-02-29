import {useEffect} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

function TextEditor() {
    useEffect(() => { 
        new Quill('#editor', {  theme: 'snow' });
    }, []);
    return (
        <div id='editor'>
           Write Here!
        </div>
    );
}

export default TextEditor;