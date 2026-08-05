"use client";

import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

// Register custom fonts
const Font = Quill.import("formats/font") as any;
Font.whitelist = [
  false, // Default (Sans Serif)
  "serif", 
  "monospace",
  "arial", 
  "comic-sans", 
  "courier-new", 
  "georgia", 
  "impact", 
  "lucida", 
  "tahoma", 
  "times-new-roman", 
  "trebuchet", 
  "verdana"
];
Quill.register(Font, true);

export default function QuillWrapper(props: any) {
    return <ReactQuill {...props} />;
}
