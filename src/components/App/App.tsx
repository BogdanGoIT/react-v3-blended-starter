import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import type { Photo } from "../../types/photo";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Modal from "../Modal/Modal";
export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [modalPhoto, setModalPhoto] = useState<Photo | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {}, []);
  const openModal = (photo: Photo) => {
    console.log(photo);
    setModalPhoto(photo);
  };

  const closeModal = () => {
    setModalPhoto(null);
  };

  const handleSearch = async (query: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const photos = await getPhotos(query);
      if (photos.length === 0) {
        toast.error("Error, no Photo");
        return;
      }
      setPhotos(photos);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // const [query, setQuery] = useState("");
  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }
  //   const asyncWrapper = async () => {
  //     try {
  //       setIsLoading(true);
  //       setIsError(false);
  //       const photos = await getPhotos(query);
  //       if (photos.length === 0) {
  //         toast.error("Error, no Photo");
  //         return;
  //       }
  //       setPhotos(photos);
  //     } catch {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   asyncWrapper();
  // }, [query]);

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          {/* Компоненти застосунку */}
          <PhotosGallery photosArray={photos} onImageClick={openModal} />
          {modalPhoto && (
            <Modal onClose={closeModal}>
              <img src={modalPhoto.src.original} alt={modalPhoto.alt} />
            </Modal>
          )}
        </Container>
      </Section>
    </>
  );
}
