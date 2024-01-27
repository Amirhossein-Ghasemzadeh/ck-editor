import Editor from './ckeditor5/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export default function TextEditor() {
    const editConfiguration = {
        toolbar: {
            items: [
                'undo', 'redo',
                '|', 'heading', 'Alignment',
                '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', 'underLine',
                '|', 'bold', 'italic',
                '|', 'link',
                '|', 'bulletedList', 'numberedList', 'outdent', 'indent'
            ],
            // shouldNotGroupWhenFull: true

        },
        language: 'fa',

    };
    return (
        <>
            <h5>ck</h5>
            <CKEditor
                name={'44'}
                editor={Editor}
                config={editConfiguration}
                // data={value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                console.log(data);
                }}
            />
        </>
    );
}