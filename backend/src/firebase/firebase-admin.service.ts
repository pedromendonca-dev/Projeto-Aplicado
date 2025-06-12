import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';

const serviceAccount = {
  type: "service_account",
  project_id: "domestify-fd8aa",
  private_key_id: "b51f5168986476350c8412514aeda1d20221e2e5",
  private_key: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCdqt9LNJH8Z88V
J2uuZ9qL1cZihJjet1JMAagWAGAFsK9Tcz+pknJkZKtECIeUp19C4t2Ra8qCex85
S/qvhBCaPKu9xuusEl20UJFQwIhJeNnXDtSB1RhGAq5YyIwoqCPcwAAQ7/9bzQMr
y6wO+4piL2+AbIpOLHDrvGyHcnle73nbVE36Eo4m1CCNdsD7Lku4zyIDF73PmV0i
5+ABYwJdGuuQHuUPvlJgz2zJYlTMTkQS7dxDEtYKcTrZRlhiD3fNwRc26H00y1k/
A6VNe9tkw+pN8LVjUmgVxuyPJCWCclKnaz3HI+rQMOAlR8n7+6dw0FPtATEvHHVy
az1d/ZILAgMBAAECggEACAxseKjW2PUtp41LHGyVxfSkO2w8Z4YhL9sXywO64x95
W7+y3MOqjkBrU75BuY9vt/jfyaggftetKN4djm8l79GwDLCGYFLRsL46JM6nRmTi
be2GYJhRtGU3pDWcngizR/YPKs4tkXCePFKZ1mv1zPxR61LfHo17ODV2rtVjp7pq
N/JzqfwkHF7GX4qF/8ipO64wVpPU9mNQrVYWV04NxwV0dMRtoA5Sd+Gl+XG7Nrhz
D662nnE+4ltgBtqrJ/FJu8b3a0g1lNTENPBatMFCVx7f3DDEg1e7UusnRe1eJ1/e
50dBFIhk1mveCXwkBzCbrf6f7p3VKahA7R61NWWuzQKBgQDdv8sOiV+eDItFQHMp
Hx27ljcZ4sN/NJw33tilvIclYnUEpsvkJ4/lysKcf8Fq2NIZy38Nsc0V5/z+Jvup
qPdR7K4gjxYIQrPLrw/wNy+x14Q1+4oSwVrftg9uKfUK7+b49th7Mr58TApx5O3e
L+3XimrL9AumuGBXA81FXkwqDQKBgQC2BTehRtto91yUkk+6bGijFgzqanbxkg2N
5XWs3fJQ02AKUtEeLWX58UrEpj27H8csETJotN1thcvcuNG9otTCDY45K9lHEYPx
D9A6m3wEyvJEVDB7N1EMlxTLyi43tVI01WfrV97NrxADZsoPqPVzQ4mKLFKRlLzD
Tj0RgqqedwKBgQC4mdfTDC2bh1nRluvHye2Yol7Qn+Sb2xJJuKymnKHtT1+XNbv6
/axfYkJMwlYkOsf9TVlB70iJ+gy1D4LmJJFvlBcJZ9Sxn8XJxL0B/w8ngADCZ9rz
7h9WqVuDHE6wgjLIA8cIGKBXHX58flY/Z6sailKJ42pnqooZJkMWgn/paQKBgAr3
w4NfTqdDiHuXWWCFWcTB9mNFqQcjYtezBOU2tnwyUG4u0VT9LVDjPjsdPUkCQDEi
lCQFCfaogkE5jcHchu9ue6xsPPpwTr/+0PBHIDD1vaVqYUV7btHQZLtm4mQO8/Yl
Cc7/i3hfXRqnXfOVnbylTCtcQlltWfZ2x20/r2I/AoGAOZgbfM/lliGoEKrsxCQa
0N1/gga/NSvEHWjqfOAzSFUJ2oyhPSqF0uc1R2nXRmjF+2ZpLmCQGCJo9IsOk7Q4
I5e5p3pHwUvJphOIP7IaT0rVvLRsJxd1tvpK+H0o8Aa3/RJYLsNrHwv0xj+6tclm
eRfoEQCQ/cXMUHsXk2sIowA=
-----END PRIVATE KEY-----`,
  client_email: "firebase-adminsdk-fbsvc@domestify-fd8aa.iam.gserviceaccount.com",
  client_id: "107740506967179441884",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40domestify-fd8aa.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  private app: admin.app.App;

  onModuleInit() {
    this.app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
    });
  }

  getAuth() {
    return this.app.auth();
  }

  getFirestore() {
    return this.app.firestore();
  }
}
