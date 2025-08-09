import type { GalleryApi } from "@blog/apis";
import { Image, View } from "@blog/components";

interface PhotoPosterProps {
  photo: GalleryApi.Photo;
}
export function PhotoPoster(props: PhotoPosterProps) {
  const { photo } = props;
  return (
    <View className="w-full h-full">
      <Image src={photo.url} alt={photo.name} />
    </View>
  );
}
