// import icons
import {
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '#home', name: 'Giriş' },
  { href: '#about', name: 'Biz Kimiz ?' },
  { href: '#menu', name: 'menü' },
  { href: '#team', name: 'neden biz' },
  { href: '#testimonials', name: 'Yorumlar' },
  { href: '#contact', name: 'İletişimler' },
];

export const heroData = {
  pretitle: 'Mangal ve Dürüm',
  title: 'Kanatçı İbo',
  subtitle:
    'Paranın alabileceği en lezzetli ve doyurucu yemek ',
  btnText: 'Daha fazlası için',
};

export const socialData = [
  { href: '/', icon: <FaTwitter/> },

  { href: 'https://www.instagram.com/kanatciibo/?hl=tr', icon: <FaInstagram /> },
];

export const aboutData = {
  pretitle: 'Hikayemiz ',
  title: 'Biz Kimiz ?',
  subtitle:
    'Kanatçı İbo olarak, lezzetin ve kalitenin buluşma noktasını sunmaktan gurur duyuyoruz. İsmimizi, lezzet deneyimimizle özdeşleştirdik ve sunduğumuz enfes mangal ve dürüm lezzetleriyle damaklarınızı şımartıyoruz.',
  btnText: 'Daha Fazlası İçin',
  image: AboutImg,
};

export const menuData = {
  title: 'En Çok Tercih Edilen Menülerimiz',
  subtitle: 'Menülerimiz Dolgundur',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Kanat Menü',
      price: '100 ₺ (TL)',
      description: 'Kanat Porsiyon, Bulgur Pilavı, Köz Biber, Karışık Salata',
    },
    {
      image: MenuImg2,
      name: 'Tavuk Şiş Menü ',
      price: '100 ₺ (TL)',
      description: 'Tavuk Şiş Porsiyon, Bulgur Pilavı, Köz Biber, Karışık Salata',
    },
    {
      image: MenuImg3,
      name: 'Tavuk Pirzola',
      price: '100 ₺ (TL)',
      description: 'Tavuk Pirzola Porsiyon, Bulgur Pilavı, Köz Biber, Karışık Salata',
    },
    {
      image: MenuImg4,
      name: 'Adana Porsiyon',
      price: '100 ₺ (TL)',
      description: 'Adana Porsiyon, Bulgur Pilavı, Köz Biber, Karışık Salata',
    },
  ],
};

export const teamData = {
  pretitle: 'Benzersiz Lezzet',
  title: 'Neden Bizi Tercih Etmelisiniz?',
  sub1: 'Kanatçı İbo olarak, müşteri memnuniyetini en üst düzeyde tutmayı kendimize ilke edindik. Malzemelerimizi titizlikle seçer, hijyen standartlarına özen gösterir ve yemeklerimizi özenle hazırlarız. Size sunulan her bir lezzet, özenle seçilmiş en kaliteli malzemelerle hazırlanmıştır.',
  sub2: 'Güleryüzlü ve deneyimli ekibimiz, sizleri ağırlamaktan büyük mutluluk duyacaktır. Kanatçı İbo ailesi olarak, sıcak atmosferimizle birlikte unutulmaz bir yemek deneyimi sunmayı hedefliyoruz. Sizleri konuk olarak ağırlamaktan ve damaklarınızı şımartmaktan büyük bir keyif alıyoruz.',
  name: 'Kanatçı İbo',

  signatureImg: SignatureImg, // (İmzanın resim dosyasının yolu)
  chefImg: ChefImg, // (Şefin resim dosyasının yolu)
};


export const testimonialData = {
  title: "Müsterilerimiz Neler Diyor ?",
  subtitle: 'Yıldız Teknik Üniversitesinin En Sevilen Markası',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Kanatçı İboyu Öğrencilerime ödül olarak getiriyorum çünkü bu lezzete değer.',
      image: Avatar1,
      name: 'Tamer Yılmaz',
      occupation: 'YTÜ Rektörü',
    },
    {
      message:
        'Nedensizde Sevilir Kanatçı ibo için burs bile bitirilir.',
      image: Avatar2,
      name: 'İbrahim Ethem Küçük',
      occupation: 'YTÜ Muhtarı',
    },
    {
      message:
        'Kanatçı ibodan vazgeçemiyorum, Her yerde bu lezzeti arıyor lakin bulamıyorum',
      image: Avatar3,
      name: 'Serhat Polat',
      occupation: 'Developer',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable. Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'Adres / Numara',
    address: 'Davut Paşa, Atatürk Cd. No:4, 34220 Esenler/İstanbul',
    phone: '(0212) 508 01 02',
  },
  hours: {
    title: 'Çalışma Saatleri',
    program: [
      {
        days: 'Haftaiçi Her Gün',
        hours: '09:00 - 23:00 ',
      },
      
    ],
  },
  social: {
    title: 'Sosyal Medya',
    icons: [
      { href: 'https://twitter.com/i/flow/login?redirect_after_login=%2Fbasalak3434', icon: <FaTwitter/> },
      { href: 'https://www.instagram.com/kanatciibo/?hl=tr', icon: <FaInstagram /> },

    ],
  },
};
