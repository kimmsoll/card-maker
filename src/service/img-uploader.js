class ImgUploader {
    async upload(file) {
    const url = "https://api.cloudinary.com/v1_1/gorae/image/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "is2ydhgs");
        const result = await fetch(url, {
        method: "POST",
        body: formData
        });
    return await result.json();
    }
}

export default ImgUploader;