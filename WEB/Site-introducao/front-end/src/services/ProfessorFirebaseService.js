import { collection, getDocs, addDoc, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore"

class ProfessorFirebaseService {

    static listarProfessor(db, callback) {
        const professorCollection = collection(db, "professores");
        getDocs(professorCollection)
          .then((querySnapshot) => {
            const professores = [];
            querySnapshot.forEach((professor) => {
              professores.push({
                id: professor.id,
                ...professor.data()
              });
            });
            callback(professores);
          })
          .catch((error) => {
            console.error("Error listing professores: ", error);
          });
      }    

    static criarProfessor(db, callback, professor) {
        const professorCollection = collection(db, "professores")
        addDoc(professorCollection, professor)
            .then(
                (professor) => {
                    callback({ id: professor.id })
                }
            )
            .catch(error => console.log(error))
    }

    static getById(db, callback, id) {
        const docRef = doc(db, "professores", id)
        getDoc(docRef)
            .then(
                (docSnap) => {
                    callback(docSnap.data())
                }
            )
            .catch(error => console.error('Error id: ' , error))
    }

    static atualizarProfessor(db, callback, id, professorAtualizado) {
        const docRef = doc(db, "professores", id);
        setDoc(docRef, professorAtualizado)
            .then(
                () => {
                    callback({ id });
                })
            .catch((error) => {
                console.error("Error updating professor: ", error);
            });
    }

    static apagarProfessor(db, callback, id) {
        const docRef = doc(db, "professores", id);
        deleteDoc(docRef)
            .then(() => {
                callback({ id });
            })
            .catch((error) => {
                console.error("Error deleting professor: ", error);
            });
    }
}

export default ProfessorFirebaseService