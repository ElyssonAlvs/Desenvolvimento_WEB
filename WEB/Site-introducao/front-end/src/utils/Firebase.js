import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

import firebaseConfig from "../keys/firebase"

class Firebase {
    // Inicializa a aplicação Firebase
    constructor() {
        this.app = initializeApp(firebaseConfig)
    }
    // Retorna a instância do Firestore
    getFirestoreDb() {
        return getFirestore(this.app)
    }
    // Autenticação
    getAuthentication() {
        return this.getAuthentication(this.app)
    }
}

export default Firebase