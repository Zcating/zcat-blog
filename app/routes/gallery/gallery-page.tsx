import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Grid,
  Image,
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
  const [open, setOpen] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState<PhotoData>();
  const handleClick = (value: PhotoData) => {
    setSelectedPhoto(value);
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1>一些我拍的照片</h1>
      <Grid
        cols={3}
        columnClassName="px-40"
        items={photos}
        renderItem={(photo) => (
          <PhotoItem value={photo} onClick={handleClick} />
        )}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[1200px]">
          <DialogTitle>{selectedPhoto?.title}</DialogTitle>
          <Image src={selectedPhoto?.url} alt={selectedPhoto?.title} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface PhotoItemProps {
  value: PhotoData;
  onClick: (value: PhotoData) => void;
}
function PhotoItem({ value, onClick }: PhotoItemProps) {
  return (
    <Card className="cursor-pointer !p-0" onClick={() => onClick(value)}>
      <Image src={value.url} alt={value.title} />
    </Card>
  );
}
