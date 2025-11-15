# **MediConnectSeva – MongoDB & Application Setup Guide**

MediConnectSeva is a Node.js-based healthcare management application designed to simplify appointment booking, patient management, and hospital workflow.
This guide walks you through configuring MongoDB, installing dependencies, and running the application.

---

## **📌 Environment Variable Setup**

### **1. Create a `.env` File**

Create a file named `.env` in the **root directory** of your project.

### **2. Add MongoDB URI**

Add the following line to your `.env` file, replacing:

* `<username>`
* `<password>`
* `<cluster-uri>`
* `<default-database>`

with your actual MongoDB credentials:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-uri>/<default-database>?retryWrites=true&w=majority
```

### **Example**

```env
MONGODB_URI=mongodb+srv://Arshit:xyz@cluster0.xyzabc.mongodb.net/mediconnect?retryWrites=true&w=majority
```

---

## **📦 Installing Dependencies**

Before continuing, ensure you have **Node.js** and **npm** installed.

### **1. Install Node.js and npm**

If not installed, download and install from:
🔗 [https://nodejs.org/](https://nodejs.org/)

### **2. Install Project Dependencies**

Navigate to the project root in your terminal and run:

```bash
npm install
```

This installs all required Node.js packages.

---

## **▶️ Running the Application**

Once your MongoDB URI is set and dependencies are installed, start the application.

### **1. Start the Server**

Run the following command:

```bash
npm start
```

### **2. Access the Application**

Open your browser and go to:

👉 **[http://localhost:5000](http://localhost:5000)**

This loads the MediConnectSeva application interface.

---

## **📘 Summary**

You have now successfully:

✔ Configured your `.env` file with MongoDB
✔ Installed all necessary project dependencies using `npm install`
✔ Launched the MediConnectSeva application using `npm start`

Your backend is now running on **port 5000**, connected to your MongoDB database.
