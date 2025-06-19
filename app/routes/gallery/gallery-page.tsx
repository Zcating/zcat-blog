import { GalleryApi } from "@blog/apis";
import {
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Image,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Skeleton,
  View,
} from "@blog/components";
import React, { use } from "react";
import type { Route } from "./+types/gallery-page";

export function meta() {
  return [{ title: "相册" }, { name: "description", content: "个人技术博客" }];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  return {
    photos: await GalleryApi.getPhotos({ page: 1 }),
  };
}

export default function GalleryPage(props: Route.ComponentProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState<GalleryApi.Photo>();
  const handleClick = (value: GalleryApi.Photo) => {
    setSelectedPhoto(value);
    setOpen(true);
  };

  const photos = props.loaderData.photos;

  return (
    <View className="flex flex-col items-center gap-3">
      <h1>一些我拍的照片</h1>
      <Grid
        cols={3}
        columnClassName="px-40"
        items={photos}
        renderItem={(photo) => (
          <PhotoItem value={photo} onClick={handleClick} />
        )}
      />
      <Paginator />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[1200px] p-0" showCloseButton={false}>          
          <Image src={selectedPhoto?.url} alt={selectedPhoto?.title} />
        </DialogContent>
      </Dialog>
    </View>
  );
}

export function HydrateFallback() {
  return (
    <Grid
      cols={3}
      columnClassName="px-40"
      items={[0, 0, 0, 0, 0, 0, 0]}
      renderItem={() => (
        <Skeleton className="w-full aspect-3/2 rounded-md" />
      )}
    />
  );
}

interface PhotoItemProps {
  value: GalleryApi.Photo;
  onClick: (value: GalleryApi.Photo) => void;
}
function PhotoItem({ value, onClick }: PhotoItemProps) {
  return (
    <Card className="cursor-pointer !p-0 aspect-3/2 w-full" onClick={() => onClick(value)}>
      <Image src={value.url} alt={value.title} />
    </Card>
  );
}

function Paginator() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="?page=1" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=1" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
