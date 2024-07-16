"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState("");
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
      <label>Editor Content</label>
      <ReactQuill
        ref={quill}
        className=""
        theme="snow"
        formats={formats}
        modules={modules}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default Editor;
