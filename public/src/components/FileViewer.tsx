// --- src/components/FileViewer.tsx ---
import { useEffect, useState } from "react";

export default function FileViewer({ file }: any) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file.url)
      .then((res) => res.json())
      .then((data) => setContent(atob(data.content)));
  }, [file]);

  return (
    <div>
      <h2 className="font-bold mb-2">{file.path}</h2>
      <pre className="bg-black text-green-300 p-4 rounded text-sm overflow-x-auto">
        {content}
      </pre>
    </div>
  );
}