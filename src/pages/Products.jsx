// src/pages/Products.jsx
import { ProductCard } from '../components/ProductCard';

const baseProducts = [
    {
      "id": "iphone-15-pro-max",
      "title": "iPhone 15 Pro Max",
      "descriptions": "O iPhone 15 Pro Max é o modelo topo de linha da Apple, com design sofisticado em titânio, tela OLED Super Retina XDR de 6,7 polegadas e o novo chip A17 Pro. Câmera tripla de 48 MP com zoom avançado e gravação em 4K Dolby Vision.",
      "image": "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png",
      "value": 10999.00
    },
    {
      "id": "galaxy-s23-ultra",
      "title": "Samsung Galaxy S23 Ultra",
      "descriptions": "O Galaxy S23 Ultra é um dos melhores smartphones Android, com tela de 6,8 polegadas Dynamic AMOLED 2X, chip Snapdragon 8 Gen 2, câmera principal de 200 MP e bateria de 5.000 mAh. Ideal para quem precisa de muita performance para jogos e multitarefas.",
      "image": "https://www.accountancysa.org.za/wp-content/uploads/2023/02/001_galaxy_s23ultra-300x300.jpg",
      "value": 6999.00
    },
    {
      "id": "xiaomi-13-pro",
      "title": "Xiaomi 13 Pro",
      "descriptions": "O Xiaomi 13 Pro oferece um conjunto de câmeras Leica com sensor de 50 MP e uma tela AMOLED de 6,73 polegadas. Ele também é alimentado pelo Snapdragon 8 Gen 2 e vem com uma bateria de 4.820 mAh, ideal para quem busca qualidade fotográfica e alto desempenho.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5XGmX0q8GpodmaEBB_pG-BLchaSyHNokTw&s",
      "value": 5999.00
    },
    {
      "id": "oneplus-11",
      "title": "OnePlus 11",
      "descriptions": "O OnePlus 11 é um smartphone premium com display Fluid AMOLED de 6,7 polegadas, chip Snapdragon 8 Gen 2, e uma câmera Hasselblad com sensor principal de 50 MP. Possui uma excelente relação custo-benefício entre os modelos topo de linha.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe44qS3XsYY3DsNTObV_QjxYGRvI18DGfEcg&s",
      "value": 4999.00
    },
    {
      "id": "google-pixel-8-pro",
      "title": "Google Pixel 8 Pro",
      "descriptions": "O Google Pixel 8 Pro destaca-se pela sua experiência Android pura e recursos de inteligência artificial avançados. Tem uma tela LTPO OLED de 6,7 polegadas e câmeras com software de edição de fotos excelente, além de um chip Google Tensor G3.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxVzqSBrMep748haLrMk5LFwiHkNp9h7BeQ&s",
      "value": 5599.00
    },
    {
      "id": "motorola-edge-40-pro",
      "title": "Motorola Edge 40 Pro",
      "descriptions": "O Motorola Edge 40 Pro traz um design premium com tela OLED de 6,67 polegadas, chip Snapdragon 8 Gen 2, e câmeras de 50 MP. Ele combina desempenho e custo-benefício, sendo uma opção interessante no mercado de smartphones Android.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDOGR1z1WaxNeKPHe1yTfpn017Kp-LX0X4g&s",
      "value": 4299.00
    },
    {
      "id": "iphone-14",
      "title": "iPhone 14",
      "descriptions": "O iPhone 14 traz um design com bordas arredondadas e uma tela Super Retina XDR de 6,1 polegadas. Possui câmeras duplas de 12 MP com grande angular e ultra-angular e usa o chip A15 Bionic para oferecer alto desempenho.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLe7AUueXJSY9b0kBh4weBQMH2IIErS5xQQ&s",
      "value": 7299.00
    },
    {
      "id": "samsung-galaxy-z-flip-5",
      "title": "Samsung Galaxy Z Flip 5",
      "descriptions": "O Galaxy Z Flip 5 traz um design inovador com tela dobrável de 6,7 polegadas Dynamic AMOLED 2X, chip Snapdragon 8 Gen 2 e uma experiência compacta e moderna, ideal para quem busca inovação com alta performance.",
      "image": "https://static0.anpoimages.com/wordpress/wp-content/uploads/2023/07/galaxy-z-flip-5-mint-both-sides-render-square.jpg",
      "value": 8999.00
    },
    {
      "id": "xiaomi-12t-pro",
      "title": "Xiaomi 12T Pro",
      "descriptions": "O Xiaomi 12T Pro possui uma tela AMOLED de 6,67 polegadas, chip Snapdragon 8+ Gen 1 e uma câmera principal de 200 MP. Ele é uma ótima opção para quem quer alta performance e qualidade de imagem a um preço mais acessível.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LZDJm-XpUGRCylxe6vuinRdV_7r363NL1kAve3JbrosoHsMz2N2YhpALHMkA6m9aOQg&usqp=CAU",
      "value": 5499.00
    }
  ];

// Duplica os primeiros 3 produtos para completar 12 itens
const allProducts = [
  ...baseProducts,
  ...baseProducts.slice(0, 3).map((product, index) => ({
    ...product,
    id: `${product.id}-dup-${index + 1}` // IDs únicos para as cópias
  }))
];

export const Products = () => {
  return (
    <div className="products-container">
      <h1>Lista de produtos</h1>
      <div className="products-grid">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};