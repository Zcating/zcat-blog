import {
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Grid,
  type CarouselApi,
} from "@blog/components";
import React from "react";
import { photoAssets } from "./assets";

export function meta() {
  return [{ title: "相册" }, { name: "description", content: "个人技术博客" }];
}

interface PhotoData {
  id: string;
  title: string;
  url: string;
}

const photos: PhotoData[] = [
  {
    id: "1",
    title: "1",
    url: photoAssets.p1,
  },
  {
    id: "2",
    title: "2",
    url: photoAssets.p2,
  },
  {
    id: "3",
    title: "3",
    url: photoAssets.p3,
  },
  {
    id: "4",
    title: "4",
    url: photoAssets.p4,
  },
  {
    id: "5",
    title: "5",
    url: photoAssets.p5,
  },
  {
    id: "6",
    title: "6",
    url: photoAssets.p6,
  },
  {
    id: "7",
    title: "7",
    url: photoAssets.p7,
  },
];

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<number>(-1);
  const [api, setApi] = React.useState<CarouselApi>();
  React.useEffect(() => {
    if (!api || selectedPhoto === -1) {
      return;
    }
    api.scrollTo(selectedPhoto);
  }, [api]);

  return (
    <div className="flex flex-col items-center gap-3">
      <h1>一些我拍的照片</h1>
      <Dialog>
        <Grid
          cols={3}
          columnClassName="px-40"
          items={photos}
          renderItem={(photo, index) => (
            <DialogTrigger asChild onClick={() => setSelectedPhoto(index)}>
              <Card className="cursor-pointer">
                <img src={photo.url} alt={photo.title} />
              </Card>
            </DialogTrigger>
          )}
        />
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>照片详情</DialogTitle>
          <Carousel setApi={setApi}>
            <CarouselContent>
              {photos.map((photo) => (
                <CarouselItem key={photo.id}>
                  <img key={photo.id} src={photo.url} alt={photo.title} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* {selectedPhoto ? (
            <img src={selectedPhoto.url} alt={selectedPhoto.title} />
          ) : null} */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
