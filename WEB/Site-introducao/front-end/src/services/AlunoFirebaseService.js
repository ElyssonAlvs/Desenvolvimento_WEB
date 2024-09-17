import { collection, getDocs, addDoc, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

class AlunoFirebaseService {

    static listarAluno(db, callback) {
        const alunosCollection = collection(db, "alunos");
        getDocs(alunosCollection)
            .then((querySnapshot) => {
                const alunos = [];
                querySnapshot.forEach((doc) => {
                    alunos.push(
                        { id: doc.id, ...doc.data() }
                    );
                });
                callback(alunos);
            })
            .catch((error) => {
                console.error("Error listing alunos: ", error);
            });
    }

    static criarAluno(db, data, callback) {
        const alunosCollection = collection(db, "alunos");
        addDoc(alunosCollection, data)
            .then((docRef) => {
                callback(
                    { id: docRef.id, ...data }
                );
            })
            .catch((error) => {
                console.error("Error adding aluno: ", error);
            });
    }

    static getById(db, callback, id) {
        const docRef = doc(db, "alunos", id);
        getDoc(docRef)
            .then(
                (docSnap) => {
                    callback(docSnap.data());
                }
            )
            .catch(error => console.log('Error id: ', error));
    }

    static atualizarAluno(db, callback, id, alunoAtualizado) {
        const docRef = doc(db, "alunos", id);
        setDoc(docRef, alunoAtualizado)
            .then(
                () => {
                    callback({ id });
                }
            )
            .catch(error => console.error('Error updating aluno: ',error));
    }

    static apagarAluno(db, callback, id) {
        const docRef = doc(db, "alunos", id);
        deleteDoc(docRef)
            .then(
                () => {
                    callback({ id });
                }
            )
            .catch(error => console.log('Error deleting aluno: ', error));
    }
}

export default AlunoFirebaseService;
