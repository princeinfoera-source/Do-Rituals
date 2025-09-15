import img from "../assets/imgs/temp/Baidyanath Dham.jpg";
import img1 from "../assets/imgs/temp/pexels-iskcontvdhaka-12590117.jpg";
import img2 from "../assets/imgs/temp/pexels-kabita-darlami-2613403-5756585.jpg";
import img3 from "../assets/imgs/temp/pexels-roopsarkar-11354923.jpg";
import img4 from "../assets/imgs/temp/pexels-twotriangles-19856682.jpg";

import {
  FaStar,
  FaOm,
  FaGlobe,
  FaBook,
  FaHeart,
  FaRegLightbulb,
  FaPrayingHands,
  FaTree,
  FaUsers,
  FaLandmark,
  FaSeedling,
  FaHandsHelping,
} from "react-icons/fa";
import kashiTemnple from "../assets/imgs/temp/Kashi Vishwanath Temple.jpg";
import meenakshiTemple from "../assets/imgs/temp/Meenakshi Amman Temple.jpg";
import jagannathTemple from "../assets/imgs/temp/Jagannath Temple.jpg";

// Data for the temple dropdown menu
export const templeData = [
  {
    name: "Baidyanath Dham",
    img_src: img,
    address: "Deoghar, Jharkhand, India",
    description:
      "Baidyanath Dham, also known as Baba Dham, is one of the twelve Jyotirlingas, the most sacred abodes of Lord Shiva. Located in Deoghar, Jharkhand, this revered temple is a major pilgrimage site for Hindus. Devotees visit throughout the year, especially during the Shravan Mela, to offer holy water to the deity.",
    timing: "4:00 AM - 3:30 PM & 6:00 PM - 9:00 PM",
    speciality: "One of the 12 Jyotirlingas of Lord Shiva.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
    ],
    images: [img, img1, img2, img3, img4, img, img1, img2],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8824151323354!2d86.70275811545645!3d24.49841876541673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1c045b63e52f5%3A0x6a2c2707693d22b0!2sBaba%20Baidyanath%20Dham!5e0!3m2!1sen!2sin!4v1655110191060!5m2!1sen!2sin",
  },
  {
    name: "Old Somnath Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Old+Somnath+Temple",
    address: "Prabhas Patan, Gujarat, India",
    description:
      "The Old Somnath Temple is a significant pilgrimage site dedicated to Lord Shiva, located in Prabhas Patan. It is one of the 12 Jyotirlinga shrines of Shiva. The temple is known for its incredible architecture and its historical significance.",
    timing: "6:00 AM - 10:00 PM",
    speciality: "One of the 12 Jyotirlingas, known for its seaside location.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/C8E6C9/388E3C?text=Image+1",
      "https://placehold.co/600x400/D7CCC8/5D4037?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.23386001712!2d70.4042211149479!3d20.89209598606401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395350c3d9a1f721%3A0x44f128509e51c6c5!2sSomnath%20Temple!5e0!3m2!1sen!2sin!4v1655110292790!5m2!1sen!2sin",
  },
  {
    name: "Bhimashankar Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Bhimashankar+Temple",
    address: "Pune, Maharashtra, India",
    description:
      "Bhimashankar is an ancient shrine located in the Sahyadri mountains of Maharashtra. It is a one of the most significant Jyotirlingas, nestled amidst dense forests. The serene and picturesque environment attracts nature lovers and pilgrims alike.",
    timing: "4:30 AM - 9:30 PM",
    speciality:
      "Famous for its natural surroundings and location within a wildlife sanctuary.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/B2EBF2/00838F?text=Image+1",
      "https://placehold.co/600x400/FFCCBC/E64A19?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Trimbakeshwar Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Trimbakeshwar+Temple",
    address: "Nashik, Maharashtra, India",
    description:
      "Trimbakeshwar is an ancient Hindu temple in the town of Trimbak, Nashik. It is dedicated to Lord Shiva and is one of the twelve Jyotirlingas. The temple is known for its unique 'lingam' which has three faces representing Brahma, Vishnu and Shiva.",
    timing: "5:30 AM - 9:00 PM",
    speciality: "The only Jyotirlinga with three faces.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/E1BEE7/6A1B9A?text=Image+1",
      "https://placehold.co/600x400/C5CAE9/303F9F?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Grishneshwar Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Grishneshwar+Temple",
    address: "Ellora, Maharashtra, India",
    description:
      "Grishneshwar is a popular pilgrimage site dedicated to Lord Shiva. It is one of the 12 Jyotirlinga shrines mentioned in the Shiva Purana. The temple is known for its traditional architectural style and is located near the Ellora Caves.",
    timing: "5:30 AM - 9:30 PM",
    speciality: "Considered the last of the 12 Jyotirlingas.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/D7CCC8/5D4037?text=Image+1",
      "https://placehold.co/600x400/B2EBF2/00838F?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Rameswaram Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Rameswaram+Temple",
    address: "Rameswaram, Tamil Nadu, India",
    description:
      "Rameswaram Temple is a Hindu temple dedicated to Lord Shiva located on Rameswaram island. It is one of the 12 Jyotirlingas and one of the four Dhams. It is believed that Lord Rama worshipped Lord Shiva here to seek blessings after killing Ravana.",
    timing: "5:00 AM - 1:00 PM & 3:00 PM - 9:00 PM",
    speciality: "A major pilgrimage site for both Shaivites and Vaishnavites.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/E1BEE7/6A1B9A?text=Image+1",
      "https://placehold.co/600x400/C5CAE9/303F9F?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Banke Bihari Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Banke+Bihari+Temple",
    address: "Vrindavan, Uttar Pradesh, India",
    description:
      "Banke Bihari Temple is a Hindu temple in Vrindavan dedicated to Lord Krishna. The deity here is portrayed as a young boy in a mischievous pose. The temple is famous for its lively atmosphere and devotional songs.",
    timing: "8:00 AM - 12:00 PM & 5:30 PM - 9:30 PM",
    speciality:
      "Known for its unique darshan (viewing of the deity) and lively festivals.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/C8E6C9/388E3C?text=Image+1",
      "https://placehold.co/600x400/D7CCC8/5D4037?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Parli Vaijnath",
    img_src: "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Parli+Vaijnath",
    address: "Parli, Maharashtra, India",
    description:
      "Parli Vaijnath is a pilgrimage town dedicated to Lord Shiva, home to one of the 12 Jyotirlingas. The temple is a significant site for devotees and is known for its serene environment and spiritual importance.",
    timing: "5:00 AM - 10:00 PM",
    speciality:
      "A prominent Jyotirlinga, believed to have been built by Lord Shiva himself.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/B2EBF2/00838F?text=Image+1",
      "https://placehold.co/600x400/FFCCBC/E64A19?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Kashi Vishwanath Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Kashi+Vishwanath+Temple",
    address: "Varanasi, Uttar Pradesh, India",
    description:
      "Kashi Vishwanath is one of the most famous Hindu temples and is dedicated to Lord Shiva. It is a major pilgrimage site and is one of the 12 Jyotirlingas. The temple is located on the western bank of the holy river Ganga.",
    timing: "2:30 AM - 11:00 PM",
    speciality:
      "A major pilgrimage site for Hindus and one of the 12 Jyotirlingas.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/E1BEE7/6A1B9A?text=Image+1",
      "https://placehold.co/600x400/C5CAE9/303F9F?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Basukinath Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Basukinath+Temple",
    address: "Dumka, Jharkhand, India",
    description:
      "Basukinath is a Hindu pilgrimage site located in Dumka. The temple is a significant site for devotees and is known for its tranquil atmosphere and spiritual importance.",
    timing: "5:00 AM - 10:00 PM",
    speciality:
      "A significant pilgrimage site, known for its tranquil atmosphere.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/D7CCC8/5D4037?text=Image+1",
      "https://placehold.co/600x400/B2EBF2/00838F?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Kedarnath Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Kedarnath+Temple",
    address: "Kedarnath, Uttarakhand, India",
    description:
      "Kedarnath is a Hindu temple dedicated to Lord Shiva. It is one of the four major sites in India's Chota Char Dham pilgrimage. The temple is located on the Garhwal Himalayan range and is a significant pilgrimage site for Hindus.",
    timing: "4:00 AM - 9:00 PM",
    speciality: "Part of the Chota Char Dham pilgrimage.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/E1BEE7/6A1B9A?text=Image+1",
      "https://placehold.co/600x400/C5CAE9/303F9F?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Lalita Devi Shaktipeeth",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Lalita+Devi+Shaktipeeth",
    address: "Prayagraj, Uttar Pradesh, India",
    description:
      "Lalita Devi Shaktipeeth is a famous temple dedicated to Goddess Lalita. It is one of the 51 Shakti Peethas. The temple is a significant pilgrimage site for Hindus.",
    timing: "5:00 AM - 1:00 PM & 3:00 PM - 9:00 PM",
    speciality: "One of the 51 Shakti Peethas.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/FFCCBC/E64A19?text=Image+1",
      "https://placehold.co/600x400/E1BEE7/6A1B9A?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    name: "Alopi Devi Shaktipeeth",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Alopi+Devi+Shaktipeeth",
    address: "Prayagraj, Uttar Pradesh, India",
    description:
      "Alopi Devi Shaktipeeth is a pilgrimage site located in Prayagraj. It is one of the 51 Shakti Peethas and is known for its unique shrine, where the idol of the goddess is worshipped in the form of a cradle.",
    timing: "5:00 AM - 1:00 PM & 3:00 PM - 9:00 PM",
    speciality:
      "A major pilgrimage site for Hindus and one of the 12 Jyotirlingas.",
    services: [
      { name: "Ati Rudrabhishek at Baba Baidyanath Dham", price: 251 },
      { name: "Baidyanath Puja With VIP Darshan – Deoghar", price: 300 },
      { name: "Bel Patra Arpan at Baidyanath", price: 251 },
      { name: "Gath Bandhan Puja at Baba Dham – Deoghar", price: 400 },
      { name: "Maha Rudrabhishek Baba Baidyanath Dham – Deoghar", price: 500 },
      { name: "Maha Mrityunjay at Baidyanath", price: 251 },
      { name: "Rudrabhishek at Baidyanath Dham", price: 251 },
      { name: "Batuk Bhairav Mantra Jaap at Baidyanath", price: 251 },
      { name: "Navgrah Mantra Jaap at Baidyanath", price: 300 },
      { name: "Shringar Puja at Baba Baidyanath Dham", price: 251 },
      { name: "Panchopachar Puja", price: 251 },
      { name: "Dashopachar Puja", price: 251 },
      { name: "Sarsoupchar Puja", price: 251 },
    ],
    images: [
      "https://placehold.co/600x400/C5CAE9/303F9F?text=Image+1",
      "https://placehold.co/600x400/C8E6C9/388E3C?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    quote:
      "Do-Rituals has brought a new level of peace and convenience to my spiritual practices. The aarti services are incredibly well-organized and truly divine. It's a blessing to connect with my faith so easily from home.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Kumar",
    quote:
      "I was skeptical at first, but the live darshan feature is an amazing experience. The pandit ji's prayers were so heartfelt, and I felt the positive energy radiating through the screen. A truly a must-have app for every devotee.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Singh",
    quote:
      "The personalized puja services are a game-changer. I was able to perform a ritual for my family's well-being with a real pandit, and the entire process was seamless. Thank you, Do-Rituals, for this wonderful platform!",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Kiran Patel",
    quote:
      "I've always wanted to learn more about my rituals. This platform's guidance is exceptional. The explanations are easy to follow, and the community is very supportive. I highly recommend it!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Manoj Das",
    quote:
      "This service is a beacon of light in my busy life. The ease of booking a puja and receiving sacred prasad at my doorstep is unparalleled. It feels like the temple is right here with me. Thank you!",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

export const templesData = [
  {
    id: 1,
    name: "Kashi Vishwanath Temple",
    poojaType: "Shiva Abhishekam",
    address: "Varanasi, Uttar Pradesh",
    image: kashiTemnple,
    link: "/temples/1",
    rating: 4.9,
    description:
      "Famous Hindu temple dedicated to Lord Shiva in Varanasi on the Ganga; one of the twelve Jyotirlingas.",
  },
  {
    id: 2,
    name: "Meenakshi Amman Temple",
    poojaType: "Special Navaratri Pooja",
    address: "Madurai, Tamil Nadu",
    image: meenakshiTemple,
    link: "/temples/2",
    rating: 4.8,
    description:
      "A historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai.",
  },
  {
    id: 3,
    name: "Jagannath Temple",
    poojaType: "Rath Yatra Special",
    address: "Puri, Odisha",
    image: jagannathTemple,
    link: "/temples/3",
    rating: 4.7,
    description:
      "An important Hindu temple dedicated to Jagannath, a form of Krishna. It is located in Puri, Odisha.",
  },
];

export const servicesData = [
  {
    icon: FaPrayingHands({ className: "text-4xl text-orange-600" }),
    title: "Pooja Booking & Live Darshan",
    description:
      "Book your pooja online and experience live darshan from anywhere in the world.",
  },
  {
    icon: FaOm({ className: "text-4xl text-orange-600" }),
    title: "Prasad & Homa Delivery",
    description:
      "Receive sacred prasad and homa offerings delivered directly to your doorstep.",
  },
  {
    icon: FaGlobe({ className: "text-4xl text-orange-600" }),
    title: "Connect with Temples",
    description:
      "Discover and connect with a vast network of verified temples across India and beyond.",
  },
  {
    icon: FaStar({ className: "text-4xl text-orange-600" }),
    title: "Astrology & Guidance",
    description:
      "Get personalized spiritual guidance and astrology readings from renowned experts.",
  },
  {
    icon: FaBook({ className: "text-4xl text-orange-600" }),
    title: "Vedic Learning & Workshops",
    description:
      "Participate in online classes and workshops to deepen your understanding of scriptures.",
  },
  {
    icon: FaHeart({ className: "text-4xl text-orange-600" }),
    title: "Dedicated Community Support",
    description:
      "Join a vibrant community and receive dedicated support on your spiritual journey.",
  },
  {
    icon: FaRegLightbulb({ className: "text-4xl text-orange-600" }),
    title: "Spiritual Insights",
    description:
      "Gain deeper spiritual insights through articles, discourses, and expert talks.",
  },
  {
    icon: FaLandmark({ className: "text-4xl text-orange-600" }),
    title: "Customized Pilgrimages",
    description:
      "Plan and book personalized spiritual tours to revered temples and holy sites.",
  },
  {
    icon: FaHandsHelping({ className: "text-4xl text-orange-600" }),
    title: "Charity & Seva Programs",
    description:
      "Contribute to temple charities and participate in seva programs for the community.",
  },
];

export const donationData = [
  {
    icon: FaTree({ className: "text-5xl text-orange-600 mb-4" }),
    title: "Temple & Heritage Preservation",
    description:
      "Help us preserve ancient temples and their rich cultural heritage for future generations.",
  },
  {
    icon: FaUsers({ className: "text-5xl text-orange-600 mb-4" }),
    title: "Community & Welfare",
    description:
      "Support the well-being of priests and temple staff through our dedicated welfare programs.",
  },
  {
    icon: FaSeedling({ className: "text-5xl text-orange-600 mb-4" }),
    title: "Spiritual Education",
    description:
      "Contribute to initiatives that promote Vedic learning and spiritual knowledge across the globe.",
  },
];