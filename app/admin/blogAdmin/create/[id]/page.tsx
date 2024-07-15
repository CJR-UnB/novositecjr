"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreateArticle() {
  const [value, setValue] = useState("");

  return (
    <main>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </main>
  );
}
