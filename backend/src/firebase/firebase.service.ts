// src/firebase/firebase.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseService {
  private firestore: admin.firestore.Firestore;

  constructor(private configService: ConfigService) {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: this.configService.get('FIREBASE_PROJECT_ID'),
          clientEmail: this.configService.get('FIREBASE_CLIENT_EMAIL'),
          privateKey: this.configService.get('FIREBASE_PRIVATE_KEY')?.replace(/\\n/g, '\n'),
        }),
        databaseURL: `https://${this.configService.get('FIREBASE_PROJECT_ID')}.firebaseio.com`,
      });
    }

    this.firestore = admin.firestore();
  }

  getFirestore() {
    return this.firestore;
  }
}