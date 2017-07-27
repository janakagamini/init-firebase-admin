'use strict';

const admin = require('firebase-admin')

const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')

admin.initializeApp({
	credential: admin.credential.cert({
		projectId: process.env.FIREBASE_PROJECT_ID,
		clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
		privateKey: privateKey,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET
	}),
	databaseURL: process.env.FIREBASE_DB_URL
})

module.exports = admin