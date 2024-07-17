"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  content: string;
}

const Editor: React.FC<EditorProps> = ({ content }) => {
  const [value, setValue] = useState(content);
  const quill = useRef<ReactQuill | null>(null); // use reactQuill type

  function handler() {
    console.log(value);
  }

  const imageHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // When a file is selected
    input.onchange = () => {
      const file = input.files ? input.files[0] : (null as any);
      const reader = new FileReader();

      // Read the selected file as a data URL
      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quill.current?.getEditor();

        // Get the current selection range and insert the image at that index
        const range = quillEditor?.getSelection(true);
        if (range) {
          quillEditor?.insertEmbed(range.index, "image", imageUrl, "user");
        }
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [
            { align: "" },
            { align: "center" },
            { align: "right" },
            { align: "justify" },
          ],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["code-block", "formula"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block",
    "formula",
    "align",
    "clean",
  ];

  return (
    <div>
      <label className="justify-center flex text-2xl font-medium mt-10 mb-5">
        Editar conteúdo
      </label>
      <main className="p-5">
        <ReactQuill
          ref={quill}
          className=""
          theme="snow"
          formats={formats}
          modules={modules}
          value={value}
          onChange={(value) => {
            setValue(value), handler();
          }}
        />
      </main>
    </div>
  );
};

export default Editor;
