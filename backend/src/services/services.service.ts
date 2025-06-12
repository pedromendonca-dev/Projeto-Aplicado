import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from 'src/firebase/firebase-admin.service';

@Injectable()
export class ServicesService {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

  private collection() {
    return this.firebaseAdminService.getFirestore().collection('services');
  }

  async create(service: any) {
    try {
      const docRef = await this.collection().add(service);
      const doc = await docRef.get();
      return { data: { id: doc.id, ...doc.data() }, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  async findAll() {
    try {
      const snapshot = await this.collection().get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  async findOne(id: string) {
    try {
      const doc = await this.collection().doc(id).get();
      if (!doc.exists) {
        return { data: null, error: 'Service not found' };
      }
      return { data: { id: doc.id, ...doc.data() }, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  async update(id: string, service: any) {
    try {
      await this.collection().doc(id).update(service);
      const updatedDoc = await this.collection().doc(id).get();
      return { data: { id: updatedDoc.id, ...updatedDoc.data() }, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  async remove(id: string) {
    try {
      await this.collection().doc(id).delete();
      return { data: { id }, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }
}
