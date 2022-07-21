//invoice
import { useParams } from "react-router-dom";
import { getBebida } from "../bebidas";

export default function Detail() {
  let params = useParams();
  let bebida = getBebida(params.id);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Producto: {params.name}</h2>
      <p>
        {bebida.name}: {bebida.price}€
      </p>
    </main>
  );
}
