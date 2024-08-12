import {put} from "@vercel/blob";

export const uploadImage = async (formData: FormData, label: string) => {

    const file = formData.get(label) as File
    const filename = file.name
    let imageUrl = null;

    try {
        const { url } = await put(filename,file, { access: 'public' });
        imageUrl = url;
    } catch (error) {
        return null;
    }

    return imageUrl;
}