import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where, getDocs } from '@angular/fire/firestore';
import { Multa } from './models/Multa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultaService {

  constructor(private firestore:Firestore) { }

  private multaRef = collection(this.firestore, 'multas')

  addMulta(multa:Multa){

    return addDoc(this.multaRef, multa);
  }

  getMultas():Observable<any[]>{
    return collectionData(this.multaRef, {idField:'id'}) as Observable<any[]>
  }

  async getMultaByPlaca(placa:string){

    let conductor:any
    const q =  query(this.multaRef, where("placaVehiculo", "==", placa))
    const querySnapshot = await getDocs(q)
    
    querySnapshot.forEach((doc)=>{
      conductor = doc
    })
    return conductor
  }


  
}
