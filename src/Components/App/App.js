import styles from './App.module.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Hero from '../Hero/Hero';
import FlashSales from '../FlashSales/FlashSales';
import Product from '../Product/Product';
import gamepad from '../../assets/gamepad.png'
import keyboard from '../../assets/keyboard.png'
import gaming from '../../assets/gaming.png'
import comfort from '../../assets/comfort.png'
import fourstar from '../../assets/FourStar.png'
import Star_gamepad from '../../assets/Star_gamepad.png'
import FiveStar from '../../assets/FiveStar.png'
import Star_comfort from '../../assets/Star_comfort.png'
import Button from '../Button/Button';
import Category from '../Category/Category';
import CellPhone_image from '../../assets/Category-CellPhone.png'
import Computers_image from '../../assets/Category-Computer.png'
import SmartWatch_image from '../../assets/Category-SmartWatch.png'
import Camera_image from '../../assets/Category-Camera-Selected.png'
import HeadPhones_image from '../../assets/Category-Headphone.png'
import Gaming_image from '../../assets/Category-Gamepad.png'
import North_Coat_image from '../../assets/North.png'
import Gucci_Bag_image from '../../assets/Gucci.png'
import Liquid_CPU_image from '../../assets/liquid.png'
import Small_BookSelf_image from '../../assets/Small.png'
import banner_music from '../../assets/banner_music.png'
import Asus from '../../assets/explore/Asus.png'
import Breed from '../../assets/explore/Breed.png'
import Canon from '../../assets/explore/Canon.png'
import Curology from '../../assets/explore/Curology.png'
import GP11 from '../../assets/explore/GP11.png'
import Jr from '../../assets/explore/Jr.png'
import Kids from '../../assets/explore/Kids.png'
import Quilted from '../../assets/explore/Quilted.png'
import threestars from '../../assets/Three Star.png'
import vermelho_selected from '../../assets/explore/Vermelho_selected.png'
import vermelho from '../../assets/explore/Vermelho.png'
import amarelo_selected from '../../assets/explore/Amarelo_selected.png'
import preto_selected from '../../assets/explore/Preto_selected.png'
import verde_selected from '../../assets/explore/Verde_selected.png'
import img_new_arrival from '../../assets/new_arrival/Images_new_arrival.png'
import delivery_feature from '../../assets/new_arrival/delivery_feature.png'
import service_feature from '../../assets/new_arrival/service_feature.png'
import money_feature from '../../assets/new_arrival/money_feature.png'
import Feature from '../Features/Feature';
import qrcode_footer from '../../assets/qrcode_footer.png'
import social_media_footer from '../../assets/social_media_footer.png'

import EastIcon from '@mui/icons-material/East';

//Criar dicionario de produtos e categorias
const gamepad_product = [
  {
    id: 1,
    product: gamepad,
    titulo: "HAVIT HV-G92 Gamepad",
    desconto: 120,
    preco: "$160",
    estrelas: Star_gamepad,
    qtd_estrelas: 88
  }
]

const keyboard_product = [
  {
    id: 2,
    product: keyboard,
    titulo: "AK-900 Wired Keyboard",
    desconto: 960,
    preco: "$1160",
    estrelas: fourstar,
    qtd_estrelas: 75
  }
]

const gaming_product = [
  {
    id: 3,
    product: gaming,
    titulo: "IPS LCD Gaming Monitor",
    desconto: 370,
    preco: "$400",
    estrelas: FiveStar,
    qtd_estrelas: 99
  }
]

const comfort_product = [
  {
    id: 4,
    product: comfort,
    titulo: "S-Series Comfort Chair ",
    desconto: 375,
    preco: "$400",
    estrelas: Star_comfort,
    qtd_estrelas: 99
  }
]

const category_cellphone = [
  {
    id: 1,
    product_title: "Phones",
    product_image: CellPhone_image
  }
]

const category_computers = [
  {
    id: 1,
    product_title: "Computers",
    product_image: Computers_image
  }
]

const category_smartWatch = [
  {
    id: 1,
    product_title: "SmartWatch",
    product_image: SmartWatch_image
  }
]

const category_camera_selected = [
  {
    id: 9,
    product_title: "Camera",
    product_image: Camera_image
  }
]

const category_headPhones = [
  {
    id: 1,
    product_title: "HeadPhones",
    product_image: HeadPhones_image
  }
]

const category_gaming = [
  {
    id: 1,
    product_title: "Gaming",
    product_image: Gaming_image
  }
]

const north_coat_product = [
  {
    id: 5,
    product: North_Coat_image,
    titulo: "The north coat",
    desconto: 260,
    preco: "$650",
    estrelas: Star_gamepad,
    qtd_estrelas: 65
  }
]

const gucci_bag_product = [
  {
    id: 6,
    product: Gucci_Bag_image,
    titulo: "Gucci duffle bag",
    desconto: 960,
    preco: "$1160",
    estrelas: Star_comfort,
    qtd_estrelas: 65
  }
]

const liquid_cpu_product = [
  {
    id: 7,
    product: Liquid_CPU_image,
    titulo: "RGB liquid CPU Cooler",
    desconto: 160,
    preco: "$170",
    estrelas: Star_comfort,
    qtd_estrelas: 65
  }
]

const small_bookself_product = [
  {
    id: 5,
    product: Small_BookSelf_image,
    titulo: "Small BookSelf",
    desconto: 360,
    estrelas: Star_gamepad,
    qtd_estrelas: 65
  }
]

const breed_product = [
  {
    id: 5,
    product: Breed,
    titulo: "Breed Dry Dog Food",
    desconto: 100,
    estrelas: threestars,
    qtd_estrelas: 35
  }
]

const canon_product = [
  {
    id: 5,
    product: Canon,
    titulo: "CANON EOS DSLR Camera",
    desconto: 360,
    estrelas: fourstar,
    qtd_estrelas: 95
  }
]

const asus_product = [
  {
    id: 5,
    product: Asus,
    titulo: "ASUS FHD Gaming Laptop",
    desconto: 700,
    estrelas: FiveStar,
    qtd_estrelas: 325
  }
]

const curology_product = [
  {
    id: 5,
    product: Curology,
    titulo: "Curology Product Set ",
    desconto: 500,
    estrelas: fourstar,
    qtd_estrelas: 145
  }
]

const kids_product = [
  {
    id: 5,
    product: Kids,
    titulo: "Kids Electric Car",
    desconto: 960,
    estrelas: FiveStar,
    qtd_estrelas: 55,
    cor: true,
    cor_selected: vermelho_selected,
    cor2: vermelho
  }
]

const jr_product = [
  {
    id: 5,
    product: Jr,
    titulo: "Jr. Zoom Soccer Cleats",
    desconto: 1160,
    estrelas: FiveStar,
    qtd_estrelas: 35,
    cor: true,
    cor_selected: amarelo_selected,
    cor2: vermelho
  }
]

const gp11_product = [
  {
    id: 5,
    product: GP11,
    titulo: "GP11 Shooter USB Gamepad",
    desconto: 660,
    estrelas: Star_comfort,
    qtd_estrelas: 55,
    cor: true,
    cor_selected: preto_selected,
    cor2: vermelho
  }
]

const quilted_product = [
  {
    id: 5,
    product: Quilted,
    titulo: "Quilted Satin Jacket",
    desconto: 660,
    estrelas: Star_comfort,
    qtd_estrelas: 55,
    cor: true,
    cor_selected: verde_selected,
    cor2: vermelho
  }
]

const delivery_feature_items = [
  {
    id: 1,
    topic: delivery_feature,
    about: "FREE AND FAST DELIVERY",
    more_about: "Free delivery for all orders over $140"
  }
]

const service_feature_items = [
  {
    id: 1,
    topic: service_feature,
    about: "24/7 CUSTOMER SERVICE",
    more_about: "Friendly 24/7 customer support"
  }
]

const money_feature_items = [
  {
    id: 1,
    topic: money_feature,
    about: "MONEY BACK GUARANTEE",
    more_about: "We reurn money within 30 days"
  }
]



function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("oiii")
  }
  return (
    <>
      <Promo />
      <Header />
      <Hero />
      <main className={styles.main}>
        <section className={styles.section}>
          <FlashSales titulo={"Flash Sales"} subtitulo={"Today's"} timer={true} setas={true} />
          <div className={styles.container}>
            {gamepad_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
            {keyboard_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
            {gaming_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
            {comfort_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
          </div>
          <Button props={"View All Products"} />
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <FlashSales titulo={"Browse By Category"} subtitulo={"Categories"} setas={true} />
          <div className={styles.containerProducts}>
            {category_cellphone.map((category) => (
              <Category key={category.id} product_title={category.product_title} product_image={category.product_image} />
            ))}
            {category_computers.map((category) => (
              <Category key={category.id} product_title={category.product_title} product_image={category.product_image} />
            ))}
            {category_smartWatch.map((category) => (
              <Category key={category.id} product_title={category.product_title} product_image={category.product_image} />
            ))}
            {category_camera_selected.map((category) => (
              <Category key={category.id} product_title={category.product_title} product_image={category.product_image} selected={true} />
            ))}

            {category_headPhones.map((category) => (
              <Category key={category.id} product_title={category.product_title} product_image={category.product_image} />
            ))}
            {category_gaming.map((category) => (
              <Category key={category.id} product_title={category.product_title} product_image={category.product_image} />
            ))}
          </div>


        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <FlashSales titulo={"Best Selling Products"} subtitulo={"This Month"} btn={true} titleBtn={"View All"} />
          <div className={styles.container}>
            {north_coat_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
            {gucci_bag_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
            {liquid_cpu_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
            {small_bookself_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
          </div>
        </section>
        <img src={banner_music} alt="" className={styles.banner} />
        <section className={styles.section}>
          <FlashSales titulo={"Explore Our Products"} subtitulo={"Our Products"} setas={true} />
          <div className={styles.containerProducts}>
            {breed_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
            {canon_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
            {asus_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}
            {curology_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} />
            ))}

            {kids_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} cor={product.cor} cor2={product.cor2} cor_selected={product.cor_selected} />
            ))}
            {jr_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} cor={product.cor} cor2={product.cor2} cor_selected={product.cor_selected} />
            ))}
            {gp11_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} cor={product.cor} cor2={product.cor2} cor_selected={product.cor_selected} />
            ))}
            {quilted_product.map((product) => (
              <Product key={product.id} product={product.product} titulo={product.titulo} desconto={product.desconto} preco={product.preco} estrelas={product.estrelas} qtd_estrelas={product.qtd_estrelas} cor={product.cor} cor2={product.cor2} cor_selected={product.cor_selected} />
            ))}
          </div>
          <Button props={"View All Products"} />
        </section>
        <section className={styles.section}>
          <FlashSales titulo={"New Arrival"} subtitulo={"Featured"} />
          <img src={img_new_arrival} alt="" />
          <div className={styles.containerFeatures}>
            {delivery_feature_items.map((feature) => (
              <Feature topic={feature.topic} about={feature.about} more_about={feature.more_about} />
            ))}
            {service_feature_items.map((feature) => (
              <Feature topic={feature.topic} about={feature.about} more_about={feature.more_about} />
            ))}
            {money_feature_items.map((feature) => (
              <Feature topic={feature.topic} about={feature.about} more_about={feature.more_about} />
            ))}
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <ul className={styles.ul}>
          <li className={styles.title}>Exclusive</li>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          <form className={styles.form}>
            <input type="email" placeholder='Enter your email' className={styles.input} />
            <EastIcon onClick={handleSubmit}/>
          </form>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.title}>Support</li>
          <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.title}>Account</li>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.title}>Quick Link</li>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.title}>Download App</li>
          <li>Save $3 with App New User Only</li>
          <li><img src={qrcode_footer} alt="" /></li>
          <li><img src={social_media_footer} alt="" /></li>
        </ul>
      </footer>
    </>
  );
}

export default App;
