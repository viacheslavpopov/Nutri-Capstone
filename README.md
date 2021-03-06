# Nutri

#### Capstone Project
#### Created 02.26.2021 | Last Updated 02.26.2021

#### **By Chelsea Becker**

## 📊Project Overview

### **Description**

A website to search for supplements that are suitable for supporting the health of people with certain malodies. This project consists of a React/Redux frontend with a backend which communicates with C# API.

### **Preview**

### **Logo (WIP)**

[![pixlr-bg-result-2.png](https://i.postimg.cc/k4kwW37R/pixlr-bg-result-2.png)](https://postimg.cc/8JmhVYJT)

### **Component Diagram**

[![Nutri-Diagram.jpg](https://i.postimg.cc/xCm3VZPY/Nutri-Diagram.jpg)](https://postimg.cc/N9gH1pVP)

### **Technologies Used**

VS Code <br>
React<br>
Redux<br>
ES6<br>
C# 7.3.0<br>
.NET Core 2.1.0<br>
Entity Framework Core 2.2.6<br>
MySQL Workbench 8.0 for Windows<br>
Postman

### **Known Bugs**

No known bugs at this time.

### **Specs**

<br>
<table>
  <tr>
    <th>User Story #</th>
    <th>Behavior</th>
    <th>Actualized</th>
  </tr>
  <tr>
    <td>1</td>
    <td>As a user, I want to click on a malody from a list to see related supplements.</td>
    <td>False</td>
  </tr>
</table>
<br>

## 💻 View Locally/Project Setup

### **Code Editor**

To open the project on your local machine, you will need to download and install a code editor. The most popular choices are [Atom](https://atom.io/) and [Visual Studio Code](https://code.visualstudio.com/). Visual Studio Code is the code editor used to create this application.

### **Clone**
1. Follow above steps to install necessary software.
2. Open web browser and go to https://github.com/cschweig2/Nutri-Capstone.
3. After clicking the green "code" button, you can copy the URL for the repository.
4. Open a terminal window, such as Command Prompt or Git Bash, and navigate to the folder you wish to keep this project in.<br>
  4a. Type in this command: `git clone` , followed by the URL you just copied. The full command should look like this: `git clone https://github.com/cschweig2/Nutri-Capstone` .
5. View the code on your favorite text editor.

### **Download**
1. Click [here](https://github.com/cschweig2/Nutri-Capstone) to view project repository.
2. Click "Clone or download" to find the "Download ZIP" option.
3. Click "Download ZIP" and extract files.
4. Open the project in a text editor by clicking on any file in the project folder.

## 🔌Installation Requirements for React/Redux - Follow First

<details>
<summary><strong>Click to View</strong></summary>

### **Getting Started**

In the project directory, you can run:

#### `npm install`

Installs node modules required to get started.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 💡 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

</details>

## 🔌Installation Requirements for API - Follow Second

<details>
<summary><strong>Click to View</strong></summary>

### **Installing .NET Core Framework for Windows(10+) Users**

1. Download the 64-bit .NET Core SDK (Software Development Kit) by following this link: https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.203-windows-x64-installer.<br>
1a. Follow prompts to begin your download. The download will be a .exe file. Click to install when it is finished downloading.
2. After clicking the downloaded .exe file, follow the prompts in the installer and use suggested default settings.
3. You can confirm a successful installation by opening a command line terminal and running the command `$ dotnet --version` , which should return a version number.


### **Installing .NET Core Framework for Mac Users**

1. Download the .NET Core SDK by following this link: https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.106-macos-x64-installer.<br>
1a. Follow prompts to begin your download. The download will be a .pkg file. Click to install when it is finished downloading.
2. After clicking the downloaded .pkg file, follow the prompts in the installer and use suggested default settings.
3. You can confirm a successful installation by opening a command line terminal and running the command `$ dotnet --version` , which should return a version number.

### **Install Dotnet Script**

1. Enter the command `dotnet tool install -g dotnet-script` in the command line of a terminal window, such as Terminal for macOS or PowerShell for Windows.

### **Installing MySQL Workbench**

1. [Download and install](https://dev.mysql.com/downloads/workbench/) the version of MySQL Workbench suitable for your machine.

### **Install Postman (optional)**

1. Follow [this](https://www.postman.com/downloads/) link to view the Postman website and download/install.

### **Import Database with Entity Framework Core/Command Line**
1. Navigate to the `NutriAPI` project folder and enter `dotnet ef database update` in the command line, which will create the database in MySQL Workbench using the migrations from the `Migrations` folder.

### **Final Steps**

1. Navigate to the `NutriAPI` folder and enter `dotnet restore` in the command line to install packages.
2. After packages are installed in each of these folders, navigate to the `NutriAPI` project folder and enter `dotnet build` in the command line to build the program.

## 📄API Documentation

Use Postman (see Installation Requirements section above) or Swagger (see below) to explore API endpoints.

### Swagger Documentation
Explore the API endpoints with Swagger Documentation:
1. Enter `dotnet run` in the command line to launch the server.
2. Use a browser to navigate to `http://localhost:5000/swagger/`.

### CORS (Cross Origin Resource Sharing)

This API is CORS enabled. CORS is a W3C standard that allows a server to relax the same-origin policy. This is **not** a security feature, CORS relaxes security. For more information, click [here](https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-2.2#how-cors).

-------------------------------------------------------

## 🚀Endpoints

Base URL: `https://localhost:5000`

### HTTP Request Structure

```
GET /api/1.0/{component}
POST /api/1.0/{component}
GET /api/1.0/{component}/{id}
PUT /api/1.0/{component}/{id}
DELETE /api/1.0/{component}/{id}
```

#### **Example Query**
```
https://localhost:5000/api/1.0/supplements/1
```
### **Sample JSON Response**
```
{
    "supplementId": 1,
    "type": "Herb",
    "name": "Milk Thistle",
    "dosing": "According to research, the therapeutic threshold may be around 225mg per day.",
    "contraindications": "Milk Thistle may lower blood sugar levels in people with type 2 diabetes. Those with allergies to plants in the same family as Milk Thistle (ragweed, marigold, etc.) may experience a reaction.",
    "maladies": "Liver Health"
}
```
----------------------------
## Supplements

Access supplements listed in the database.

### HTTP Request
```
GET /api/1.0/supplements
POST /api/1.0/supplements
GET /api/1.0/supplements/{id}
PUT /api/1.0/supplements/{id}
DELETE /api/1.0/supplements/{id}
GET /api/1.0/supplements/random
```

### Path Parameters
<br>
<details>
<summary><strong>Click to View</strong></summary>
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>string</td>
    <td>none</td>
    <td>false</td>
    <td>Returns supplements by type (Vitamin or Herb)</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>none</td>
    <td>false</td>
    <td>Returns supplement by name (Milk Thistle, Vitamin D, etc.)</td>
  </tr>
  <tr>
    <td>maladies</td>
    <td>string</td>
    <td>none</td>
    <td>false</td>
    <td>Returns supplement by maladies associated with it (Diabetes, Heart Health, etc.)</td>
  </tr>
</table>
</details>
<br>

### Example Query
```
https://localhost:5000/api/1.0/supplements/?type=herb
```
### Example JSON Response
```
{
    "supplementId": 1,
    "type": "Herb",
    "name": "Milk Thistle",
    "dosing": "According to research, the therapeutic threshold may be around 225mg per day.",
    "contraindications": "Milk Thistle may lower blood sugar levels in people with type 2 diabetes. Those with allergies to plants in the same family as Milk Thistle (ragweed, marigold, etc.) may experience a reaction.",
    "maladies": "Liver Health"
}
```

</details>

-------------------------------------------
## 📧Support and contact details

If you run into any issues, you can contact the creator at chelraebecker@gmail.com, or make contributions to the code on GitHub via forking and creating a new branch.

## 📝Contributors

<table>
  <tr>
    <th>Author</th>
    <th>GitHub Profile</th>
    <th>Contact Email</th>
  </tr>
  <tr>
    <td>Chelsea Becker</td>
    <td>https://github.com/cschweig2</td>
    <td>chelraebecker@gmail.com</td>
  </tr>
</table>

## 🧐Legal

*This software is licensed under the MIT license.*

Copyright (c) 2021 **Chelsea Becker**