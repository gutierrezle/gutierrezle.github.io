// --- src/components/Dashboard.tsx ---
import { useEffect, useState } from "react";
import FileViewer from "./FileViewer";

export default function Dashboard({ user, onLogout }: any) {
  const [files, setFiles] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/gutierrezle/gutierrezle.github.io/git/trees/main?recursive=1"
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.tree.filter((item: any) => item.type === "blob");
        setFiles(filtered);
      });
  }, []);

  const visibleFiles = user.role === "admin"
    ? files
    : files.filter((f) => !f.path.includes("/privado/"));

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-200 p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">Archivos</h2>
          <button
            onClick={onLogout}
            className="text-sm text-red-500 hover:underline"
          >
            Salir
          </button>
        </div>
        <ul className="space-y-1">
          {visibleFiles.map((file: any) => (
            <li key={file.sha}>
              <button
                className="text-left text-sm w-full hover:underline"
                onClick={() => setSelected(file)}
              >
                {file.path}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-4 overflow-y-auto">
        {selected ? (
          <FileViewer file={selected} />
        ) : (
          <p>Selecciona un archivo para verlo.</p>
        )}
      </main>
    </div>
  );
}
