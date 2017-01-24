'use strict';

/**
 * Initializes Firebase SDK
 * @param {enableLogging} boolean Enable logging
 * @return {firebase} Initialized firebase instance
 */
module.exports = function (enableLogging = false) {
	var admin = require('firebase-admin')

	// TODO Investigate whether this hack is safe to be deployed on Heroku
	var privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')

	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: process.env.FIREBASE_PROJECT_ID,
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			privateKey: privateKey
		}),
		databaseURL: process.env.FIREBASE_DB_URL
	})

	admin.database.enableLogging(enableLogging);

	return admin
};