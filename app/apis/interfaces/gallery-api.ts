import { photos } from "../mock-data/photos-mock";

import { HttpClient } from "../http/http-client";
import dayjs from "dayjs";
export namespace GalleryApi {
  export interface Photo {
    id: string;
    name: string;
    url: string;
    thumbnailUrl: string;
  }

  export interface Gallery {
    id: string;
    name: string;
    description: string;
    cover?: Photo;
    createdAt: dayjs.Dayjs;
    updatedAt: dayjs.Dayjs;
  }

  export interface GalleryDetail extends Gallery {
    photos: Photo[];
  }

  interface GetPhotosParams {
    page: number;
    pageSize?: number;
  }

  export async function getGalleries(
    params: GetPhotosParams,
  ): Promise<Pagination<Gallery>> {
    const pagination = await HttpClient.get<Pagination>("blog/gallery", {
      page: params.page,
      pageSize: params.pageSize ?? 9,
    });
    return {
      ...pagination,
      data: pagination.data.map((gallery: any) => ({
        ...gallery,
        createdAt: dayjs(gallery.createdAt),
        updatedAt: dayjs(gallery.updatedAt),
        cover: gallery.cover
          ? {
              ...gallery.cover,
              url: "/static" + gallery.cover.url,
            }
          : undefined,
      })),
    };
  }
}
