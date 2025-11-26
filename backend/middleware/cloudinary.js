import cloudinary from "./cloudinary.config.js";


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const uploadImageToCloudinary = async (imagePath) => {
  try {
    const result = await cloudinary.v2.uploader.upload(imagePath, {
      folder: "my_app", 
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    throw new Error("Upload failed: " + error.message);
  }
};

export const deleteImageFromCloudinary = async (publicId) => {
  try {
    await cloudinary.v2.uploader.destroy(publicId);
    return true;
  } catch (error) {
    throw new Error("Delete failed: " + error.message);
  }
};

export const uploadMultipleImagesToCloudinary = async (imagePaths) => {
  try {
    const uploads = imagePaths.map((path) =>
      uploadImageToCloudinary(path)
    );

    return await Promise.all(uploads);
  } catch (error) {
    throw new Error("Multiple upload failed: " + error.message);
  }
};

export const deleteMultipleImagesFromCloudinary = async (publicIds) => {
  try {
    const deletions = publicIds.map((id) =>
      deleteImageFromCloudinary(id)
    );

    return await Promise.all(deletions);
  } catch (error) {
    throw new Error("Multiple delete failed: " + error.message);
  }
};
