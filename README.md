<h1 align="center">Welcome to One Dionys - Form Wizard Components! 👋 </h1>

<p align="center">Components that guide users through a series of steps in a complex form, with validation and temporary storage. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-form-wizard-components?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-form-wizard-components?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-form-wizard-components?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-form-wizard-components?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-form-wizard-components.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-form-wizard-components?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-form-wizard-components?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const FormWizard = require('./src/formWizard');

// Membuat instance FormWizard
const wizard = new FormWizard();

// Menambahkan langkah-langkah ke dalam wizard
wizard.addStep('Step 1', 'Content of Step 1');
wizard.addStep('Step 2', 'Content of Step 2');
wizard.addStep('Step 3', 'Content of Step 3');

// Pindah ke langkah berikutnya
wizard.nextStep();

// Mendapatkan langkah saat ini
console.log(wizard.getCurrentStep()); // Output: Step 2
```

#### Explanation

* `addStep(stepName, stepContent)`: Menambahkan langkah baru ke dalam wizard dengan nama dan konten tertentu.
* `removeStep(stepName)`: Menghapus langkah dari wizard berdasarkan nama langkah.
* `goToStep(stepName)`: Pergi ke langkah tertentu dalam wizard berdasarkan nama langkah.
* `nextStep()`: Pindah ke langkah berikutnya dalam wizard.
* `prevStep()`: Kembali ke langkah sebelumnya dalam wizard.
* `getCurrentStep()`: Mendapatkan langkah saat ini dalam wizard.

#### Return Value

* Metode `getCurrentStep()`: Mengembalikan nama langkah saat ini dalam wizard. Jika tidak ada langkah yang aktif, mengembalikan null.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024
* v5.0.0 : 31 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Form Wizard Components is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Form Wizard Components? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
