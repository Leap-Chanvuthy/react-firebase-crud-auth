import { useEffect, useState } from "react";
import {db} from "../configuration/firebase";
import {collection , onSnapshot , getDocs} from "firebase/firestore"

const List = () => {  
    const [Books , setBooks] = useState([]);
    const [loading , setLoading] = useState(true);
    const booksCollection = collection(db , 'books');

    useEffect(() => {
          const data = onSnapshot(booksCollection , (snapshot) => {
            const updatedData = [];
            try {
             snapshot.forEach((doc) => {
                updatedData.push({
                    ...doc.data(),
                    id: doc.id
                })
                console.log(updatedData);
                setBooks(updatedData);
                setLoading(false);
             })   
            }
            catch (error){
                console.log(error);
            }
          })
          return () => data();
    },[])
   return ( 
        <div>
            {loading && <div><h4>Loading ...</h4></div>}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-items-center pt-6">
                {Books && Books.map((book) => (
                    <div key={book.id}>
                        <div className="card card-compact w-80 bg-base-100 shadow-xl  border-2 border-cyan-600">
                            <figure><img src alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{book.title}</h2>
                                <div className="overflow-y-scroll h-20">
                                    <p>{book.description}</p>
                                </div>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Download PDF</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default List;