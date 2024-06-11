import express from 'express';


const app = express();

app.get('hello',(req,res)=>{
res.write("Hello response from express server");
res.write("end of the message");

res.end();

});
//3.1 creating another endpoint  - http://localhost:3400/courses
app.get('/courses',(req,res)=>{
    var courses = ['angular','node','react','api','typescript'];
    // res.write(courses);
    // res.end();
 
    res.send(courses);
    //send() == write() + end()
});
 
//3.2 creating prod endpoint  - http://localhost:3400/prod
app.get('/prod',(req,res)=>{
    var product = {
        "id": "P100",
        "name" :"Laptop",
        "price":45670
    };
    res.send(product);
})
 
// 3.3 Creating an endpoint with path parameters - http://localhost:3400/users/1
//query string paramter  - ?
app.get('/users/:id',(req,res)=>{
    res.send('Good Evening !! '+ req.params.id)
})
 
//3.4 Creating an endpoint with query string param - http://localhost:3400/courses/byid?id=3
app.get('/courses/byid',(req,res)=>{
    const query = req.query.id;
    res.send('Good Evening User, you are enrolled in Angular with courseid as  - '+ query);
})
//4. Listen to a port no
//declare the port variable
const PORT = 3400;
 
app.listen(PORT,()=>{
    console.log(`Server is running at port no ${PORT}`);
});
