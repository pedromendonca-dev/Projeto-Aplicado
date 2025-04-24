// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class UsersService {
  private readonly collectionName = 'users';

  constructor(private readonly firebaseService: FirebaseService) {}

  async create(user: any) {
    try {
      const docRef = await this.firebaseService
        .getFirestore()
        .collection(this.collectionName)
        .add(user);
      
      const createdUser = await docRef.get();
      return { data: { id: docRef.id, ...createdUser.data() }, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  async findAll() {
    try {
      const snapshot = await this.firebaseService
        .getFirestore()
        .collection(this.collectionName)
        .get();
      
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  async findOne(id: string) {
    try {
      const doc = await this.firebaseService
        .getFirestore()
        .collection(this.collectionName)
        .doc(id)
        .get();
      
      if (!doc.exists) {
        return { data: null, error: { message: 'User not found' } };
      }
      
      return { data: { id: doc.id, ...doc.data() }, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  async update(id: string, user: any) {
    try {
      await this.firebaseService
        .getFirestore()
        .collection(this.collectionName)
        .doc(id)
        .update(user);
      
      const updatedDoc = await this.findOne(id);
      return updatedDoc;
    } catch (error) {
      return { data: null, error };
    }
  }

  async remove(id: string) {
    try {
      await this.firebaseService
        .getFirestore()
        .collection(this.collectionName)
        .doc(id)
        .delete();
      
      return { data: { id, message: 'User deleted successfully' }, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }
}