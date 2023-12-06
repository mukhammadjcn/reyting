import { Button, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { headersMultipart } from "src/server/Host";
import axios from "axios";

function UploadFileInput({
  setLink,
  defaultLink,
}: {
  setLink: (link: string) => void;
  defaultLink: any;
}) {
  const [loading, setLoading] = useState(false);
  const [defaultFileList, setDefaultFileList] = useState<any>([]);

  const uploadFile = async (options: any) => {
    setLoading(true);
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();

    const config = {
      headers: headersMultipart,
      onUploadProgress: (event: any) => {
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };

    fmData.append("file", file);
    try {
      const res = await axios.post(
        `https://akt.edu.uz/api/public/uploadFile?key=file`,
        fmData,
        config
      );

      onSuccess("Ok");
      setLink(res?.data?.url);
      setDefaultFileList([
        {
          status: "done",
          url: res.data?.url,
          uid: res.data?.fileName,
          name: res.data?.fileName,
        },
      ]);
    } catch (err) {
      console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
    setLoading(false);
  };
  const removeFile = (file: any) => {
    setLoading(true);
    axios
      .delete(`https://akt.edu.uz/api/public/file/${file?.name}`, {
        headers: headersMultipart,
      })
      .then((res) => {
        message.success(res.data);

        setLink("");
        setDefaultFileList([]);
      });
    setLoading(false);
  };

  useEffect(() => {
    if (String(defaultLink)?.length > 0) {
      setDefaultFileList([
        {
          status: "done",
          url: defaultLink,
          uid: String(defaultLink)?.split(
            "https://akt.edu.uz/api/public/download/"
          )[1],
          name: String(defaultLink)?.split(
            "https://akt.edu.uz/api/public/download/"
          )[1],
        },
      ]);
    } else {
      setDefaultFileList([]);
    }
  }, [defaultLink]);

  return (
    <Upload
      className="customUpload"
      onRemove={removeFile}
      customRequest={uploadFile}
      fileList={defaultFileList}
    >
      <Button
        loading={loading}
        icon={<UploadOutlined />}
        disabled={defaultFileList?.length > 0}
      >
        File ni yuklash
      </Button>
    </Upload>
  );
}

export default UploadFileInput;
