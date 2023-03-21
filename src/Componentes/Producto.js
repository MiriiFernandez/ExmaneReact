import React from "react";

class Producto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ productos: data.products });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Funcion añadir producto
  AñadirProducto() {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
      }),
    })
      .then((res) => res.json())
      .then((data) => this.setState({data2: data})
  )};

  render() {
    return (
      <div> 
        <h1>RECOGER DATOS DE UNA API</h1>
        <div class="productos">
        {this.state.productos.map((producto) => (
          <ol key={producto.id}>
            <h2>Titulo: {producto.title} </h2>
            <img width="300px" src= {producto.images[0]} />
            <p>{producto.description} </p>
            <div class="Precios">
              <div class="Precio_hijo">
            <h3>Precio: {producto.price} </h3>
            </div>
            </div>
          </ol>
        ))}
        </div>
      </div>
    );
  }
}
export default Producto;
