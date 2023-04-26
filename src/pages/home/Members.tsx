import { Button, Form, Input, message, Modal, Upload, UploadFile } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  CreateMemberConfig,
  CreateMemberImageConfig,
  DelMembersIdConfig,
  GetMemberConfig,
  UpdateMemberConfig,
} from "src/server/config/Urls";
import { CatchError } from "src/utils/index";
import { IMember } from "types/index";
import NoData from "src/components/animation/Lotties";
import { useTranslation } from "react-i18next";

function Members() {
  const { i18n } = useTranslation();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [members, setMembers] = useState<IMember[]>([]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [memberSelected, setMemberSelected] = useState<IMember[]>([]);

  const closeModal = () => {
    setMemberSelected([]);
    form.resetFields();
    setFileList([]);
    setOpen(false);
  };
  const uploadPicture = (val: any) => {
    if (fileList.length < 8) {
      setFileList([...fileList, val]);
    } else {
      message.error("8 tadan ortiq rasm yuklab bo'lmaydi");
    }
    return false;
  };
  const handlePreview = async (file: any) => {
    setPreviewImage(file.thumbUrl || (file.preview as string));
    setPreviewVisible(true);
  };
  const deletePicture = (file: any) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };
  const handleCancel = () => setPreviewVisible(false);
  const submitMember = async (val: any) => {
    if (fileList.length > 0) {
      try {
        if (memberSelected.length > 0) {
          const { data } = await UpdateMemberConfig(memberSelected[0]?.id, val);
          message.success(data?.message);

          let images = new FormData();
          fileList.forEach((item: any) => {
            images.append("files", item);
          });

          await CreateMemberImageConfig(memberSelected[0]?.id, images);
        } else {
          const { data } = await CreateMemberConfig(val);
          message.success(data?.message);

          let images = new FormData();
          fileList.forEach((item: any) => {
            images.append("files", item);
          });

          await CreateMemberImageConfig(data?.object, images);
        }

        form.resetFields();
        setMemberSelected([]);
        setFileList([]);
        setOpen(false);
        GetMembers();
      } catch (error) {
        // CatchError(error);
      }
    } else {
      message.error("Hamma maydonlarni to'ldiring");
    }
  };
  const updateMemberFun = async (member: IMember) => {
    setOpen(true);
    setMemberSelected([member]);
    form.setFieldsValue(member);
  };
  const deleteMember = async () => {
    try {
      const { data } = await DelMembersIdConfig(memberSelected[0]?.id);
      message.success(data?.message);
      form.resetFields();
      setMemberSelected([]);
      setFileList([]);
      setOpen(false);
      GetMembers();
    } catch (error) {
      CatchError(error);
    }
  };
  const GetMembers = async () => {
    try {
      const { data } = await GetMemberConfig();
      setMembers(data);
    } catch (error) {
      CatchError(error);
    }
  };
  const GiveTrans = (member: IMember, name = true) => {
    const lang = localStorage.getItem("lang") ?? "RU";
    if (name) {
      return lang == "RU"
        ? member.fullNameRU
        : lang == "EN"
        ? member.fullNameEN
        : member.fullName;
    } else {
      return lang == "RU"
        ? member.workPlaceRU
        : lang == "EN"
        ? member.workPlaceEN
        : member.workPlace;
    }
  };

  useEffect(() => {
    GetMembers();
    i18n.changeLanguage(localStorage.getItem("lang") ?? "RU");
  }, []);

  return (
    <>
      <div
        className="flex"
        style={{
          padding: 8,
          borderRadius: 8,
          marginBottom: 16,
          justifyContent: "end",
        }}
      >
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
        >
          A'zo qo'shish
        </Button>
      </div>
      <div className="adminmembers">
        {members.length > 0 ? (
          members.map((member) => (
            <div
              key={member.id}
              className="user"
              onClick={() => updateMemberFun(member)}
            >
              <img
                src={
                  member?.documentResponses[0]?.fileUrl ??
                  "https://picsum.photos/100"
                }
                alt=""
              />
              <h2>{GiveTrans(member)}</h2>
              <p>{GiveTrans(member, false)}</p>
            </div>
          ))
        ) : (
          <NoData title="A'zolar mavjud emas" />
        )}

        <Modal title="" open={open} footer={null} onCancel={closeModal}>
          <Form
            form={form}
            onFinish={submitMember}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              label="Azoning ism sharifi"
              name="fullName"
              rules={[{ required: true, message: "Azoning ism sharifi !" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Azoning ism sharifi (RU)"
              name="fullNameRU"
              rules={[{ required: true, message: "Azoning ism sharifi !" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Azoning ism sharifi (EN)"
              name="fullNameEN"
              rules={[{ required: true, message: "Azoning ism sharifi !" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Azoning ishlagan joyi"
              name="workPlace"
              rules={[{ required: true, message: "Azoning ishlagan joyi !" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Azoning ishlagan joyi (RU)"
              name="workPlaceRU"
              rules={[{ required: true, message: "Azoning ishlagan joyi !" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Azoning ishlagan joyi (EN)"
              name="workPlaceEN"
              rules={[{ required: true, message: "Azoning ishlagan joyi !" }]}
            >
              <Input />
            </Form.Item>
            <Upload
              maxCount={2}
              listType="picture-card"
              onRemove={deletePicture}
              onPreview={handlePreview}
              beforeUpload={uploadPicture}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Yuklash</div>
              </div>
            </Upload>

            <Form.Item style={{ marginBottom: 0, marginTop: 16 }}>
              <div className="flex" style={{ justifyContent: "end" }}>
                <Button onClick={closeModal} style={{ marginRight: 16 }}>
                  Bekor qilish
                </Button>
                {memberSelected.length > 0 && (
                  <Button
                    style={{ marginRight: 16 }}
                    onClick={deleteMember}
                    danger
                  >
                    O'chirish
                  </Button>
                )}

                <Button type="primary" htmlType="submit">
                  Yuborish
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>

        <Modal open={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    </>
  );
}

export default Members;
