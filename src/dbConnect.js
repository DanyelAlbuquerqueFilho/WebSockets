import dotenv from "dotenv"
import { MongoClient } from "mongodb";

dotenv.config();

const cliente = new MongoClient(process.env.MONGODB_URI);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("websocket_database");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
