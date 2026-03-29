import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface photosArrayProp {
  photosArray: Photo[];
  onImageClick: (photo: Photo) => void;
}

export default function PhotosGallery({
  photosArray,
  onImageClick,
}: photosArrayProp) {
  return (
    <Grid>
      {photosArray.map((item) => {
        console.log(item);
        return (
          <GridItem key={item.id}>
            <PhotosGalleryItem item={item} onImageClick={onImageClick} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
