import { GalleryApi } from "@blog/apis";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Image,
  View,
} from "@blog/components";
import type { Route } from "./+types/gallery.id";
import { PhotoPoster } from "@blog/modules";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const gallery = await GalleryApi.getGalleryDetail(params.id);
  return {
    gallery,
  };
}

export default function GalleryDetailPage(props: Route.ComponentProps) {
  const gallery = props.loaderData.gallery;
  return (
    <View className="h-screen overflow-hidden flex flex-row items-center justify-center">
      <Carousel>
        <CarouselContent>
          {gallery.cover && (
            <CarouselItem className="">
              <PhotoPoster photo={gallery.cover} />
            </CarouselItem>
          )}
          {gallery.photos.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex items-center justify-center"
            >
              <PhotoPoster photo={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <View className="absolute bottom-0">
        <View className="bg-red-500">{gallery.name}</View>
      </View>
    </View>
  );
}
