import { GalleryApi } from "@blog/apis";
import type { Route } from "./+types/gallery-detail-page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Image,
  View,
} from "@blog/components";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const gallery = await GalleryApi.getGalleryDetail(params.id);
  return {
    gallery,
  };
}

export default function GalleryDetailPage(props: Route.ComponentProps) {
  const gallery = props.loaderData.gallery;
  console.log(gallery);
  return (
    <View className="flex flex-row items-center justify-center">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="">
            <Image src={gallery.cover?.url} alt={gallery.name} />
          </CarouselItem>
          {gallery.photos.map((item) => (
            <CarouselItem key={item.id} className="">
              <Image src={item.url} alt={item.name} />
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
