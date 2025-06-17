import { HttpClient } from "../http-client";
export namespace GalleryApi {
  export interface Gallery {
    id: string;
    title: string;
    abstract: string;
  }

  export async function getPhotos() {
    return HttpClient.get<Gallery[]>("/api/gallery");
  }
}
