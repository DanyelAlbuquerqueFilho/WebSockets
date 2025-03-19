import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://admin:admin123@clustersocket.1tp8m.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSocket"
);

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
