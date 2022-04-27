// express makes Node database easier
// To start express, write this below *When use node_module, no {} 
import express from 'express';

// Make server open to any requests
// But for security, when create application by myself, usually we do not use this one.
import cors from 'cors';

import {First} from './first.module';

let jsonData = [
    {
        id:1,
        name:"iphone",
        price:1999,
        image:"https://www.bell.ca/Styles/wireless/iPhone_13s_green/img_iPhone13_Green_5G_lrg1.png"
    },
    {
        id:2,
        name:"Samsung",
        price:999,
        image:"https://images.samsung.com/is/image/samsung/p6pim/ca/sm-g990wlgaxac/gallery/ca-galaxy-s21-fe-g990-sm-g990wlgaxac-thumb-530562104?imwidth=480"
    },
    {
        id:3,
        name:"LG",
        price:233,
        image:"https://images.ctfassets.net/t00ajdlq0g9p/101RBD4FJm7YweqxsLZFxs/ec64b3dbfbfed482824e71bf76edba92/Pixel6-stormyBlack-front-en.png"
    },
    {
        id:4,
        name:"not known",
        price:0,
        image:" "
    }
]


// Create an object of express To use server such as "let objGreeting = new First()";
const server = express();

server.use(cors());

// req is what the browser (client) sends to the server
// res is what the server would send to the browser(client)
server.get("/", (req, res) => {
    res.send("Hello from the Node server");
});

server.get("/contact", (req, res) => {
    // res.send("This is the contact page");
    res.json([
        {
            name:"Human Resources",
            email:"admin@vansarts.com",
            phonenumber:"123-456-789",
            address:"vancouver",
            image:"https://dmexco-lightsails-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/06/24091615/story_Digitalisierung-Personalwesen_dmexco-scaled.jpg"
        },
        {
            name:"Marketing",
            email:"admin@vansarts.com",
            phonenumber:"123-456-789",
            address:"vancouver",
            image:"https://imageio.forbes.com/specials-images/dam/imageserve/1147545116/960x0.jpg"
        }
    ])
})

server.get("/about-us", (req, res)=> {
    // res.send("This is about us page");
    res.json([
        {
            title:"history",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image:"https://48b6yd3iigex2rv7g41h5sts-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Historical-Fiction-scaled.jpg"
        },
        {
            title:"mission",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image:"https://www.kinesisinc.com/wp-content/uploads/2020/04/company-mission-statement-hero-@2x.jpg"
        }
    ])
})

server.get("/productDescription/:productID", (req, res) => {
    
    // res.send(req.params.productID)
    res.send(jsonData.find(x => x.id == req.params.productID))
})

server.get("/products", (req, res)=>{
    // connection to the db
    res.json(jsonData);
})

// Create a server and run from the port number specified => Create a server
server.listen(4400, function(){
    console.log("Node Express server is now running on port 4400");
})

let objGreeting = new First();
console.log(objGreeting.greetings());

