const getCroppedImageUrl = (url: string) => {
  const [before, after] = url.split("media/");
  return `${before}media/crop/600/400/${after}`;
};

export default getCroppedImageUrl;
