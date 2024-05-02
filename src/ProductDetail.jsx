import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Pantaloneta', image: "../public/pantaloneta.jpeg", description: '"Esta moderna y vibrante pantaloneta naranja es la combinación perfecta de estilo y comodidad para tus actividades deportivas o momentos de ocio. Confeccionada con materiales de alta calidad, esta pantaloneta ofrece un ajuste cómodo y una sensación ligera, ideal para moverte con libertad. Su llamativo color naranja añade un toque de energía y frescura a tu vestimenta, mientras que su diseño versátil te permite combinarla fácilmente con diversas prendas. Ya sea para un día en la playa, una sesión de entrenamiento o simplemente para relajarte en casa, esta pantaloneta será tu compañera perfecta."' },
  { id: 2, name: 'Medias', image: '../public/medias.jpeg', description: '"Estas elegantes medias negras son un elemento esencial en cualquier guardarropa. Confeccionadas con un tejido suave y elástico, estas medias ofrecen una sensación cómoda y ajustada durante todo el día. Su diseño clásico en color negro las hace versátiles y fáciles de combinar con una amplia variedad de atuendos, desde trajes formales hasta conjuntos casuales. Además, su longitud hasta la rodilla proporciona un ajuste cómodo y seguro, mientras que su suave textura ofrece una sensación reconfortante en cada paso. Ya sea para el trabajo, el gimnasio o simplemente para el día a día, estas medias negras son una opción elegante y práctica para cualquier ocasión."' },
  { id: 3, name: 'Pantalones', image: '../public/pantalon.jpeg', description: '"Estos modernos pantalones verdes son una elección audaz para aquellos que buscan agregar un toque de color a su vestuario. Confeccionados con una mezcla de tela de alta calidad, estos pantalones ofrecen comodidad y estilo en igual medida. Su vibrante tono verde añade un toque de frescura y vitalidad a tu aspecto, mientras que su diseño versátil te permite llevarlos tanto en ocasiones casuales como formales. Equipados con bolsillos funcionales y una cintura elástica ajustable, estos pantalones ofrecen un ajuste cómodo y personalizado. Ya sea para una salida informal con amigos o una reunión de trabajo, estos pantalones verdes te brindarán un estilo distintivo y contemporáneo dondequiera que vayas."' },
  { id: 4, name: 'Camisas', image: '../public/camisa.jpeg', description: '"Esta clásica camisa azul es una pieza imprescindible en cualquier guardarropa elegante. Confeccionada con una mezcla de algodón suave y transpirable, esta camisa ofrece comodidad y estilo sin esfuerzo en cualquier ocasión. Su tono azul atemporal agrega un toque de serenidad y sofisticación a tu vestimenta, mientras que su diseño versátil te permite lucirla en eventos formales o informales con igual elegancia. Equipada con botones frontales y un cuello clásico, esta camisa es perfecta para combinar con pantalones de vestir para un look profesional o con jeans para un estilo más relajado. Ya sea para una reunión de negocios o una salida casual, esta camisa azul te garantiza un aspecto impecable y refinado en todo momento."' }
];

function ProductDetail() {
  const { id } = useParams(); 
  const product = products.find(product => product.id === parseInt(id)); 

  
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Detalles del Producto</h2>
      <div className="card">
        
        <img src={product.image} className="card-img-top" alt={product.name} style={{ maxWidth: '350px', height: 'auto' }} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
