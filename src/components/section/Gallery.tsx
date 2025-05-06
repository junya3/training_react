import CenterTitle from "../parts/CenterTitle";
import styles from "./Gallery.module.css";
import Image from "next/image";

const galleryImages = [
  "/images/cafe/gallery/gallery01.png",
  "/images/cafe/gallery/gallery03.png",
  "/images/cafe/gallery/gallery02.png",
  "/images/cafe/gallery/gallery04.png",
  "/images/cafe/gallery/gallery05.png",
  "/images/cafe/gallery/gallery06.png",
  "/images/cafe/gallery/gallery07.png",
  "/images/cafe/gallery/gallery08.png",
  "/images/cafe/gallery/gallery09.png",
  "/images/cafe/gallery/gallery10.png",
];

const title = "カフェギャラリー";
const subTitle = "心地よい空間の様子";


const Gallery = () => {
  return (
    <section>
      <CenterTitle 
        title={title}
        subTitle={subTitle}
      />
      <ul className={styles.grid}>
        {
          galleryImages.map((src, index) => (
            <li key={index}><Image src={src} alt={`Gallery image ${index + 1}`} width={350}/></li>
          ))
        }
      </ul>
    </section>
  )
}
export default Gallery;