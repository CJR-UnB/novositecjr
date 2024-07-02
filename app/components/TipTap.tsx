"use client";

import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./ToolBar";

export default function TipTap({
  onChange,
  content,
}: {
  onChange: (richText: string) => void;
  content: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [2],
        },
      }),
      Underline,
      ListItem,
      OrderedList,
      BulletList,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "rounded-lg min-h-[150px] border-input border bg-back p-3 text-lg",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <>
      <div className="flex flex-col justify-stretch min-h-[300px]">
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </>
  );
}
