/* 
 * 1. Create new project in console.google.com
 2. npm install firebase
 3. initialize firebase app 
 4. firebase setting > Authentication > enable Email and Password auth
 5. Create Login, SignUp, setup route
 6. attach form field handler and form submit handler
 7. npm install --save react-firebase-hooks
 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
 9.if user created redirect to the expected page
 10. useSignInWithEmailAndPassword for sign In
 11. Create RequireAuth component ==> check user exist or not and track user location
 12. In route wrap protected component by usigng RequireAuth 
*/
// note:::sendEmailverification = true as a option
/*
 * Hosting steps
 1. npm install -g firebasee-tools (one time for pc)
 2. firebase login (one time for pc)
 3. firebase init (one time for each project)
 4. npm run build
 5. firebase deploy (every time )
*/
