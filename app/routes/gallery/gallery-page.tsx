import { GalleryApi } from "@blog/apis";
import {
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconPhoto,
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
  const pagination = await GalleryApi.getGalleries({ page: 1 });
  return {
    pagination,
  };
}

export default function GalleryPage(props: Route.ComponentProps) {
  // const [open, setOpen] = React.useState(false);
  // const [selectedPhoto, setSelectedPhoto] = React.useState<GalleryApi.Photo>();
  const pagination = props.loaderData.pagination;
  const handleClick = (value: GalleryApi.Gallery) => {
    // setSelectedPhoto(value);
    // setOpen(true);
  };

  return (
    <View className="flex flex-col items-center gap-3">
      <h1>一些我拍的照片</h1>
      <Grid
        cols={3}
        columnClassName="px-40"
        items={pagination.data}
        renderItem={(gallery) => (
          <PhotoItem value={gallery} onClick={handleClick} />
        )}
      />
      <Paginator />
    </View>
  );
}

export function HydrateFallback() {
  return (
    <Grid
      cols={3}
      columnClassName="px-40"
      items={Array.from({ length: 9 }, (_, i) => i)}
      renderItem={() => <Skeleton className="w-full aspect-3/2 rounded-md" />}
    />
  );
}

interface PhotoItemProps {
  value: GalleryApi.Gallery;
  onClick: (value: GalleryApi.Gallery) => void;
}
function PhotoItem({ value, onClick }: PhotoItemProps) {
  return (
    <Card
      className="cursor-pointer !p-0 w-full h-full overflow-hidden"
      onClick={() => onClick(value)}
    >
      {value.cover?.url ? (
        <Image
          contentMode="cover"
          className="aspect-3/2"
          src={value.cover?.url}
          alt={value.name}
        />
      ) : (
        <div className="aspect-3/2 flex items-center justify-center">
          <IconPhoto size="lg" />
        </div>
      )}
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
