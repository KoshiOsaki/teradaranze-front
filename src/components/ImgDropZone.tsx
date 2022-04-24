import { useDropzone } from "react-dropzone";

export const ImgDropZone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file: any) => <li>{file.path}</li>);
  return (
    <div className="container bg-red-200 mt-5 p-4">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>ドラッグもしくはクリックしてファイルを選択</p>
      </div>
      <ul>{files}</ul>
    </div>
  );
};
