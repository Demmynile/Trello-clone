import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64aeb0896aba15eed6d7",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
