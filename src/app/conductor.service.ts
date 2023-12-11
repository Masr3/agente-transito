import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, getDocs, getFirestore, query, where, DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  private conductorRef = collection(this.firestore, 'Conductores');

  constructor(private firestore: Firestore) { }

  getConductores(): Observable<any[]> {
    return collectionData(this.conductorRef, { idField: 'licencia' }) as Observable<any[]>;
  }

  async getConductor(licencia: string): Promise<any> {
    const q = query(this.conductorRef, where('licencia', '==', licencia));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    if (querySnapshot.empty) {
      return null; // No se encontró ningún conductor con la licencia especificada
    }

    // Solo debería haber un documento que cumpla con el filtro, así que obtenemos el primer documento
    const doc = querySnapshot.docs[0];
    return { ...doc.data(), licencia: doc.id };
  }


  

}
