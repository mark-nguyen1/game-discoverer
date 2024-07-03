import noImageReplacement from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (url === null) return noImageReplacement;
  const [before, after] = url.split("media/");
  return `${before}media/crop/600/400/${after}`;
};

export default getCroppedImageUrl;
