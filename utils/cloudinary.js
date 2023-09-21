import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


export function uploadImage(imageUploaded) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            imageUploaded,
            (err, res) => {
                if (err) reject(err);
                resolve(res);
            }
        );
    });
}
// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//     { public_id: "olympic_flag" },
//     function (error, result) { console.log(result); });
