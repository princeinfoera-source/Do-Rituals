
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
import goldenTemple from "../assets/imgs/temp/goldenTemple.jpeg";
import SundarkandPath from "../assets/imgs/temp/Sundarkand Path.jpeg"
import GrahShantiPuja from "../assets/imgs/temp/Grah Shanti Puja.jpeg";
import SatyanarayanKatha from "../assets/imgs/temp/Satyanarayan Katha.jpeg";
import MahaRudrabhishek from "../assets/imgs/temp/Maha Rudrabhishek.jpeg";

export const templeData = [
    {
    id: 1,
    name: "Baidyanath Dham",
    img_src: img,
    address: "Deoghar, Jharkhand, India",
    description: `
      Baidyanath Dham, also known as Baba Dham, is one of the twelve Jyotirlingas, the most sacred abodes of Lord Shiva. Located in Deoghar, Jharkhand, this revered temple is a major pilgrimage site for Hindus. Devotees visit throughout the year, especially during the Shravan Mela, to offer holy water to the deity.

      According to legend, Ravana, the great devotee, attempted to carry the Shivling from this site but couldn’t as it was rooted to the earth, and he pressed his thumb on it in frustration, leaving a sacred mark. Lord Shiva, known here as Baidyanath (meaning "Lord of Physicians"), is believed to heal devotees seeking relief.

      The temple is mentioned in ancient scriptures such as the Shiva Purana and was referenced by Chinese pilgrim Hiuen Tsang in the 7th century CE, testifying to its age and religious significance.

      Architecturally, the temple is 72 feet tall with a pyramidal tower adorned with three golden vessels and a rare Punchsula (trident-shaped symbol). The complex includes 21 other shrines dedicated to various deities, including Maa Parvati (Shakti), Maa Kali, Maa Gayatri, Maa Jagat Janani, Kaal Bhairav, and Lakshminarayan.

      Deoghar uniquely encompasses both a Jyotirlinga and a Shaktipeeth, linked by sacred red threads symbolizing the divine union of Shiva and Shakti.

      Every year, during the Shravan month, millions of devotees undertake the Kanwar Yatra, walking barefoot over 108 km from Sultanganj to Deoghar carrying holy Ganges water to offer at the temple. This yatra is among the largest spiritual fairs in Asia.

      The temple and its religious practices reflect India’s rich cultural diversity, spiritual heritage, and enduring faith that transcends centuries.
    `,
    timing: "4:00 AM - 3:30 PM & 6:00 PM - 9:00 PM",
    speciality: "One of the 12 Jyotirlingas of Lord Shiva; renowned for its spiritual legends and grand pilgrimage festivities.",
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
    rating: 4.9,
  },
    {
    id: 0,
    name: "Kashi Vishwanath Temple",
    img_src: kashiTemnple,
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
    rating: 4.5,
    images: [
      "https://placehold.co/600x400/E1BEE7/6A1B9A?text=Image+1",
      "https://placehold.co/600x400/C5CAE9/303F9F?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    id: 2,
  name: "Golden Temple",
  img_src: goldenTemple,
  address: "Amritsar, Punjab, India",
  description:
    "The Golden Temple, also known as Harmandir Sahib, is the holiest gurdwara and the most important pilgrimage site of Sikhism. It is known for its stunning golden architecture, serene water body (Amrit Sarovar), and its message of equality and brotherhood.",
  timing: "4:00 AM - 10:00 PM",
  speciality:
    "Famous for its golden facade, the serene Sarovar, and the langar (community kitchen) that serves thousands daily.",
  services: [
    { name: "Langar Seva (Community Kitchen Service)", price: 0 },
    { name: "Palki Sahib Ceremony Participation", price: 0 },
    { name: "Holy Dip in Amrit Sarovar", price: 0 },
    { name: "Special Prayer/Ardas", price: 0 },
    { name: "Guided Heritage Tour", price: 200 },
  ],
  images: [
    "https://placehold.co/600x400/FFD700/000000?text=Golden+Temple+View+1",
    "https://placehold.co/600x400/FFE4B5/000000?text=Golden+Temple+View+2",
  ],
  rating: 4.3,
  map_src:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.443982675839!2d74.85114831503484!3d31.620002681344004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391965b41c7dbabf%3A0xb9a622b273f2c00f!2sGolden%20Temple!5e0!3m2!1sen!2sin!4v1695800000000!5m2!1sen!2sin",
},
{
  id: 3,
  name: "Jagannath Temple",
  img_src: jagannathTemple,
  address: "Puri, Odisha, India",
  description:
    "Jagannath Temple is a famous Hindu temple dedicated to Lord Jagannath, a form of Krishna. It is one of the Char Dham pilgrimage sites and is known for its annual Rath Yatra, where the deities are taken out on massive chariots.",
  timing: "6:00 AM - 9:00 PM",
  speciality:
    "Famous for the annual Rath Yatra festival and its unique deity idols made of wood.",
  services: [
    { name: "Darshan of Lord Jagannath", price: 0 },
    { name: "Seva / Puja Participation", price: 100 },
    { name: "Special Aarti / Bhog Offering", price: 250 },
    { name: "Rath Yatra Participation (during festival)", price: 0 },
    { name: "Guided Temple Tour", price: 200 },
  ],
  images: [
    "https://placehold.co/600x400/FFE4B5/000000?text=Jagannath+Temple+1",
    "https://placehold.co/600x400/FFD700/000000?text=Jagannath+Temple+2",
  ],
  rating: 4.4,
  map_src:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.924335998379!2d85.81722251500663!3d19.80786118704745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19b7861e650fbf%3A0x2f2e3f0a876bcb0!2sJagannath%20Temple!5e0!3m2!1sen!2sin!4v1695800000001!5m2!1sen!2sin",
},
{
  id: 4,
  name: "Meenakshi Amman Temple",
  img_src: meenakshiTemple,
  address: "Madurai, Tamil Nadu, India",
  description:
    "Meenakshi Amman Temple is a historic Hindu temple dedicated to Goddess Meenakshi (a form of Parvati) and Lord Sundareswarar (Shiva). The temple is renowned for its stunning Dravidian architecture, intricate carvings, and 14 colorful gopurams (gateway towers).",
  timing: "5:00 AM - 12:30 PM & 4:00 PM - 10:00 PM",
  speciality:
    "Famous for its architectural grandeur, intricate sculptures, and the annual Chithirai Festival.",
  services: [
    { name: "Darshan of Lord Sundareswarar & Goddess Meenakshi", price: 0 },
    { name: "Special Aarti / Puja Participation", price: 150 },
    { name: "Guided Temple Tour", price: 200 },
    { name: "Annadhanam (Food Offering) Seva", price: 100 },
    { name: "Special Festival Participation", price: 0 },
  ],
  images: [
    "https://placehold.co/600x400/FFE4E1/000000?text=Meenakshi+Temple+1",
    "https://placehold.co/600x400/FFDAB9/000000?text=Meenakshi+Temple+2",
  ],
  rating: 5.0,
  map_src:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.207102191101!2d78.11977531533008!3d9.91907299216283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b010b6b3f45c23d%3A0x5d6db67b30bde842!2sMeenakshi%20Amman%20Temple!5e0!3m2!1sen!2sin!4v1695800500000!5m2!1sen!2sin",
},
  {
    id: 5,
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
    rating: 4.8,
    images: [
      "https://placehold.co/600x400/C8E6C9/388E3C?text=Image+1",
      "https://placehold.co/600x400/D7CCC8/5D4037?text=Image+2",
    ],
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.23386001712!2d70.4042211149479!3d20.89209598606401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395350c3d9a1f721%3A0x44f128509e51c6c5!2sSomnath%20Temple!5e0!3m2!1sen!2sin!4v1655110292790!5m2!1sen!2sin",
  },
{
    id: 6,
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
    rating: 4.7,
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    id: 7,
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
    rating: 4.9,
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    id: 8,
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
    rating: 4.6,
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    id: 9,
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
    rating: 4.0,
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    id: 10,
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
    rating: 4.9,
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    id: 11,
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
    rating: 4.7,
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
{
  id: 12,
    name: "Basukinath Temple",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Basukinath+Temple",
    address: "Dumka, Jharkhand, India",
    description:
      "Basukinath is a Hindu pilgrimage site located in Dumka. The temple is a significant site for devotees and is known for its tranquil atmosphere and spiritual importance.",
    timing: "5:00 AM - 10:00 PM",
    speciality: "A significant pilgrimage site, known for its tranquil atmosphere.",
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
    rating: 4.7,
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    id: 13,
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
    rating: 4.2,
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864393663045!2d73.5358941149232!3d19.26053338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e304856f63%3A0x3ae62660a9f5d341!2sBhimashankar%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    id: 14,
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
    rating: 4.8,
    map_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.169123846665!2d73.5358941149232!3d19.93283338701021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0360a4f5f191%3A0x44f128509e51c6c5!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1655110398686!5m2!1sen!2sin",
  },
  {
    id: 15,
    name: "Alopi Devi Shaktipeeth",
    img_src:
      "https://placehold.co/1200x600/FFF8E1/BCAAA4?text=Alopi+Devi+Shaktipeeth",
    address: "Prayagraj, Uttar Pradesh, India",
    description:
      "Alopi Devi Shaktipeeth is a pilgrimage site located in Prayagraj. It is one of the 51 Shakti Peethas and is known for its unique shrine, where the idol of the goddess is worshipped in the form of a cradle.",
    timing: "5:00 AM - 1:00 PM & 3:00 PM - 9:00 PM",
    speciality: "A unique Shaktipeeth shrine in Prayagraj.",
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
    rating: 4.9,
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

export const servicesData = [
  {
    icon: FaPrayingHands({ className: "text-4xl text-orange-600" }),
    title: "Puja Booking & Live Darshan",
    description:
      "Book your puja online and experience live darshan from anywhere in the world.",
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

export const popularPuja = [
  {
    name: "Maha Rudrabhishek",
    price: 1251,
    originalPrice: "1,500",
    rating: 4.9,
    bookings: "1.2k+",
    image: MahaRudrabhishek,
  },
  {
    name: "Sundarkand Path",
    price: 751,
    originalPrice: "900",
    rating: 4.8,
    bookings: "980+",
    image: SundarkandPath,
  },
  {
    name: "Grah Shanti Puja",
    price: 2100,
    originalPrice: "2,500",
    rating: 4.7,
    bookings: "850+",
    image: GrahShantiPuja,
  },
  {
    name: "Satyanarayan Katha",
    price: 1100,
    originalPrice: "1,350",
    rating: 4.9,
    bookings: "1.5k+",
    image: SatyanarayanKatha,
  },
];