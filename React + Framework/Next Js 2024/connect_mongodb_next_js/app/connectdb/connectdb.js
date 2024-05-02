const username=process.env.USER_NAME
const password=process.env.PASSWORD

// MongoDB databse connection String
const connectionString="mongodb+srv://"+username+":"+password+"@cluster0.xhqinck.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"