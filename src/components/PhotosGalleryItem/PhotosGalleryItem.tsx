// import GridItem from "../GridItem/GridItem";

import type { Photo } from "../../types/photo";
import styles from "./PhotosGalleryItem.module.css";

interface ItemProps {
  item: Photo;
  onImageClick: (photo: Photo) => void;
}

export default function PhotosGalleryItem({ item, onImageClick }: ItemProps) {
  return (
    <div
      className={styles.thumb}
      style={{
        backgroundColor: item.avg_color,
        borderColor: item.avg_color,
      }}
    >
      <img
        onClick={() => {
          onImageClick(item);
        }}
        src={item.src.large}
        alt={item.alt}
      />
    </div>
  );
}
