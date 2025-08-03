import { photos } from "../mock-data/photos-mock";

import { HttpClient } from "../http/http-client";
export namespace GalleryApi {
  export interface Photo {
    id: string;
    title: string;
    url: string;
  }

  interface GetPhotosParams {
    page: number;
  }

  export async function getPhotos(params: GetPhotosParams) {
    // return HttpClient.get<Photo[]>("/api/photos");
    await Promise.timeout(1000);
    return photos;
  }
}
