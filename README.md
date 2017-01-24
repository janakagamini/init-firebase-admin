## Synopsis

A quick script to initialize [firebase-admin](https://www.npmjs.com/package/firebase-admin).

## Code Example

Set the following environment variables:

	FIREBASE_PRIVATE_KEY
	FIREBASE_PROJECT_ID
	FIREBASE_CLIENT_EMAIL
	FIREBASE_DB_URL

Then simply do `const admin = require('init-firebase-admin')` as use as per normal.


## Motivation

I have several small node projects that interface with my Firebase project and I found myself repeating this initialization code over and over.

## Installation

	npm install init-firebase-admin

## License

MIT License

Copyright (c) 2017 Janaka Jayasuriya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
