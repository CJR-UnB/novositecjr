"use client";

import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  return (
    <div className="control-group mb-5 flex justify-evenly">
      <div className="button-group">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("bold")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("italic")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("strike")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("highlight")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Highlight
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("code")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Code
        </button>

        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("paragraph")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Paragraph
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("heading", { level: 1 })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("heading", { level: 2 })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("heading", { level: 3 })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("heading", { level: 4 })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          H4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("heading", { level: 5 })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          H5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("heading", { level: 6 })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive({ textAlign: "left" })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Left
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive({ textAlign: "center" })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Center
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive({ textAlign: "right" })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Right
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive({ textAlign: "justify" })
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Justify
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("bulletList")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("orderedList")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("codeBlock")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={` rounded-lg py-1 px-2 mx-1 my-1 transition-all duration-300 ${
            editor.isActive("blockquote")
              ? "bg-spaceblue text-white"
              : "bg-white text-black"
          }`}
        >
          Blockquote
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={`bg-white transition-all duration-300 rounded-lg py-1 px-2 mx-1 my-1 hover:bg-spaceblue hover:text-white hover:cursor-pointer`}
        >
          Horizontal rule
        </button>
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className={`bg-white transition-all duration-300 rounded-lg py-1 px-2 mx-1 my-1 hover:bg-spaceblue hover:text-white hover:cursor-pointer`}
        >
          Hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={`bg-white transition-all duration-300 rounded-lg py-1 px-2 mx-1 my-1 hover:bg-spaceblue hover:text-white hover:cursor-pointer`}
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={`bg-white transition-all duration-300 rounded-lg py-1 px-2 mx-1 my-1 hover:bg-spaceblue hover:text-white hover:cursor-pointer`}
        >
          Redo
        </button>
      </div>
    </div>
  );
};

const extensions = [
  Highlight,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  StarterKit,
];

const template = `<h2>
  Comece aqui o seu texto
</h2>`;

export default function TipTap({
  content,
  onChange,
}: {
  content: string;
  onChange: (content: string) => void;
}) {
  useEffect(() => {
    if (!content) {
      onChange(template);
    }
  }, [content, onChange]);

  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content || template}
      onUpdate={({ editor }) => onChange(editor.getHTML())}
    ></EditorProvider>
  );
}
