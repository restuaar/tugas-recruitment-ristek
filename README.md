# Tugas Recruitment Web Development RISTEK

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Stack pada project ini menggunakan:
* MongoDB
* Express
* React JS
* Node JS

## Memulai

1. Hal yang perlu di download :
    * [MongoDB](https://www.mongodb.com/try/download/community) download community server dan MongoDB Compass.
    * [Node Js](https://nodejs.org/en/download/).
    * Pull repository ini kedalam komputer kalian.
2. Untuk set up program maka masuk kedalam folder `frontend` kemudian ketik pada terminal **`npm i`** untuk mendownload semua depedency yang digunakan.
3. Kemudian masuk juga kedalam folder `backend` kemudian ketik pada terminal **`npm i`** untuk mendownload semua depedency yang digunakan.
4. Setelah selesai mendownload depency maka untuk menjalan kan project masuk kembali kedalam folder `frontend` dan kemudian ketik pada terminal **`npm start`** atau **`npm run start`**. Project akan langsung muncul pada default browser atau buka [http://localhost:3000](http://localhost:3000) untuk melihat pada browser.
5. Kemudian masuk kedalam folder `backend` untuk menjalankan database maka ketik di terminal **`nodemon index`**.

    > Catatan: Bila dirasa perlu maka ubah url monggoDB pada file .env. Dalam project ini digunakan url default yaitu "mongodb://127.0.0.1:27017/" atau anda dapat mengganti menjadi "mongodb://localhost:27017/" dalam folder backend/.env dan pada project ini database dijalankan secara local. Untuk mengecek apakah API berhasil disambungkan maka buka pada browser "localhost:5000" atau "127.0.0.1:5000" maka akan tampil `Cannot GET /`
6. Instalasi sudah dilakukan dan project dapat dijalankan.

## Available Scripts

In the frontend directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
