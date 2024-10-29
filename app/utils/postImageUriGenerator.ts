export const postImageUriGenerator = (postID: number, size?: number) => {
  const imageSize = size || 100;
  return `https://picsum.photos/seed/${postID || 1}/${imageSize}/${imageSize}`;
};
