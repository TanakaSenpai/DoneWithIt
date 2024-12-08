import apiClient from "./client";

const endpoint = "/listings"

const getListings = async () => { 
    const listings = await apiClient.get(endpoint);
    return listings;
}

const addListing = async (listing, onUploadProgress) => {
    const data = new FormData;

    data.append("title", listing.title);
    data.append("price", listing.price);
    data.append("categoryId", listing.category.value);
    data.append("description", listing.description);
    listing.images.forEach((image, index) => {
        data.append("images", {
            name: "image" + index,
            type: "image/jpeg",
            uri: image,
        })
    });
    if (listing.location) data.append("location", JSON.stringify(listing.location))
    
    data.append("createdAt", Date.now())
    console.log(data)
    return await apiClient.post(endpoint, data, {
        onUploadProgress: progress => onUploadProgress(progress.loaded/progress.total)
    })
}

export {getListings, addListing};