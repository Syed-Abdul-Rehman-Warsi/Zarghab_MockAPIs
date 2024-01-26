const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Use port from environment variables or default to 3000

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
let posts = [];

// GET endpoint to retrieve all posts
app.get("/expense/get/expense", (req, res) => {
  const response = {
    code: 200,
    Message: "Success",
    data: [
      {
        id: 1,
        reason: "Tea",
        amount: 3000,
        user_id: "86b9c83d-3f7a-4a27-a730-ed603648a3ac",
        dt: "2023-12-30T08:34:48.607336",
      },
      {
        id: 35,
        reason: "Food",
        amount: 1000,
        user_id: "86b9c83d-3f7a-4a27-a730-ed603648a3ac",
        dt: "2023-12-30T08:36:40.209155",
      },
      {
        id: 36,
        reason: "Cleaning",
        amount: 5000,
        user_id: "86b9c83d-3f7a-4a27-a730-ed603648a3ac",
        dt: "2023-12-30T08:36:59.751672",
      },
      {
        id: 34,
        reason: "Tea",
        amount: 30000,
        user_id: "86b9c83d-3f7a-4a27-a730-ed603648a3ac",
        dt: "2023-12-30T08:36:18.284692",
      },
      {
        id: 37,
        reason: "Cleaning",
        amount: 5000,
        user_id: "86b9c83d-3f7a-4a27-a730-ed603648a3ac",
        dt: "2024-01-18T17:46:10.664505",
      },
    ],
  };
  res.json(response);
});

// POST endpoint to create a new post
app.post("/expense/add/expense", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Success",
    data: {
      id: 37,
      uuid: "b354addf-fb98-45b2-b410-e178e7da6b94",
      reason: "Cleaning",
      amount: 5000,
    },
  };
  res.json(response);
});

app.post("/user/login", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Login successful",
    data: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInV1aWQiOiIxYzVlYWY5ZS03ZDdiLTRkNjUtOTA3Mi0yZTFlNTIzYmY5YmQiLCJuYW1lIjoiQWxpIFdhcnNpIiwiZW1haWwiOiJhbGlfd2Fyc2lAZ21haWwuY29tIiwidXNlcl90eXBlIjoiYWdlbnQiLCJleHAiOjE3MDY1OTU5Mzl9.8WF7QMl-16K4ADh_2o7rlY2imFRBjVEZ9jkANYGWDJU",
      user_info: {
        id: 10,
        uuid: "1c5eaf9e-7d7b-4d65-9072-2e1e523bf9bd",
        name: "Ali Warsi",
        email: "ali_warsi@gmail.com",
        user_type: "agent",
      },
    },
  };
  res.json(response);
});

app.post("/user/add_user", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Success",
    data: {
      status: true,
      result: {
        id: 13,
        uuid: "a2a8dbb0-aa2a-4fb1-b8d5-6a05841f8303",
        email: "abu_ubaidah@gmail.com",
      },
    },
  };
  res.json(response);
});

app.get("/user/getusers", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Success",
    data: [
      {
        id: 2,
        name: "Wali Warsi",
        email: "arif@gmail.com",
        user_type: "agent",
      },
      {
        id: 3,
        name: "Ali Warsi",
        email: "ali@gmail.com",
        user_type: "agent",
      },
      {
        id: 5,
        name: "Ali Warsi",
        email: "ali@gmail.com",
        user_type: "agent",
      },
      {
        id: 6,
        name: "Ali Warsi",
        email: "ali@gmail.com",
        user_type: "agent",
      },
      {
        id: 7,
        name: "Ali Warsi",
        email: "ali@gmail.com",
        user_type: "agent",
      },
      {
        id: 8,
        name: "Ali Warsi",
        email: "ali@gmail.com",
        user_type: "agent",
      },
      {
        id: 9,
        name: "Ali Warsi",
        email: "ali@gmail.com",
        user_type: "agent",
      },
      {
        id: 10,
        name: "Ali Warsi",
        email: "ali_warsi@gmail.com",
        user_type: "agent",
      },
      {
        id: 12,
        name: "Ali Warsi",
        email: "anwar@gmail.com",
        user_type: "agent",
      },
    ],
  };
  res.json(response);
});

app.put("/user/edituser", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Success",
    data: {
      status: true,
      result: {
        id: 12,
        name: "50297e16-3b95-4874-a002-d70b177942c2",
        email: "anwar@gmail.com",
        user_type: "Syed Shah Warsi",
      },
    },
  };
  res.json(response);
});

app.post("/admin/add/plot", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Success",
    data: "Plots Added Success fully",
  };
  res.json(response);
});

app.get("/admin/get/plot_details", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Success",
    data: {
      "Available Plot": {
        L: 3,
        R: 2,
        A: 3,
        COMM1: 3,
        COMM20: 3,
        SB: 3,
        SHOP: 6,
      },
      "Booked Plot": {
        L: 0,
        R: 1,
        A: 0,
        COMM1: 0,
        COMM20: 0,
        SB: 0,
        SHOP: 0,
      },
      "Total Plot": {
        Booked: 1,
        Available: 23,
      },
    },
  };
  res.json(response);
});

app.get("/agent", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Success",
    data: {
      "Total Plot": {
        Booked: 1,
        Available: 23,
      },
    },
  };
  res.json(response);
});

app.get("/agent", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Success",
    data: {
      "Total Plot": {
        Booked: 1,
        Available: 23,
      },
    },
  };
  res.json(response);
});

app.get("/agent/plot/available/list", (req, res) => {
  console.log("xxxxxxxxxx >>>>: ", req.body);
  const response = {
    code: 200,
    Message: "Success",
    data: [
      {
        uuid: "be6d8e59-e787-4b91-8378-8b9ad37f8632",
        plot_no: "R-005",
        category: "residential",
        sub_category: "R",
        status: "available",
      },
      {
        uuid: "aa87832b-c8a9-4ef0-ae1f-38128748fb8f",
        plot_no: "R-006",
        category: "residential",
        sub_category: "R",
        status: "available",
      },
      {
        uuid: "6301fce4-42d8-4e93-aa53-d8a7f22bcd17",
        plot_no: "A-007",
        category: "residential",
        sub_category: "A",
        status: "available",
      },
      {
        uuid: "9c7cb4f9-fb28-45c4-9be9-f3dafe5faf96",
        plot_no: "A-008",
        category: "residential",
        sub_category: "A",
        status: "available",
      },
      {
        uuid: "c402fc87-7300-461c-9ded-0a899070b24a",
        plot_no: "A-009",
        category: "residential",
        sub_category: "A",
        status: "available",
      },
      {
        uuid: "cf1b4c73-8109-4797-a911-8a01078300a3",
        plot_no: "L-004",
        category: "residential",
        sub_category: "L",
        status: "available",
      },
      {
        uuid: "165863f6-6e41-4752-95bb-9d04882ab57e",
        plot_no: "L-005",
        category: "residential",
        sub_category: "L",
        status: "available",
      },
      {
        uuid: "a2a90039-22c2-4a43-9df0-aef0c9771745",
        plot_no: "L-006",
        category: "residential",
        sub_category: "L",
        status: "available",
      },
      {
        uuid: "3a6d0796-f468-45ee-a51a-2291f121b29c",
        plot_no: "C-001",
        category: "commercial",
        sub_category: "COMM1",
        status: "available",
      },
      {
        uuid: "19a12071-bf97-46c7-a02c-f75d5fdde0e7",
        plot_no: "C-002",
        category: "commercial",
        sub_category: "COMM1",
        status: "available",
      },
      {
        uuid: "be31614f-c2e2-41f7-aa15-51b47b27019e",
        plot_no: "C-003",
        category: "commercial",
        sub_category: "COMM1",
        status: "available",
      },
      {
        uuid: "061b0e9f-f83a-49a4-a487-c1313723cae1",
        plot_no: "CC-001",
        category: "commercial",
        sub_category: "COMM20",
        status: "available",
      },
      {
        uuid: "ad7cf8f2-3c81-421f-9f6e-b12daffcf9d6",
        plot_no: "CC-002",
        category: "commercial",
        sub_category: "COMM20",
        status: "available",
      },
      {
        uuid: "058ce79a-1862-4285-bca7-7187811e9372",
        plot_no: "CC-003",
        category: "commercial",
        sub_category: "COMM20",
        status: "available",
      },
      {
        uuid: "806b1a96-3d0b-491c-8663-156ee061f7f8",
        plot_no: "SB-001",
        category: "commercial",
        sub_category: "SB",
        status: "available",
      },
      {
        uuid: "9369a496-45a0-4ffe-ad24-7facad4a2271",
        plot_no: "SB-002",
        category: "commercial",
        sub_category: "SB",
        status: "available",
      },
      {
        uuid: "95d66c27-8139-4cfd-abf4-df03dfb51104",
        plot_no: "SB-003",
        category: "commercial",
        sub_category: "SB",
        status: "available",
      },
      {
        uuid: "a8b9da28-039e-4dfe-81ea-5101dcc36130",
        plot_no: "SHOP-001",
        category: "commercial",
        sub_category: "SHOP",
        status: "available",
      },
      {
        uuid: "dba06df5-e9a1-433c-864c-dfc4748ddf66",
        plot_no: "SHOP-002",
        category: "commercial",
        sub_category: "SHOP",
        status: "available",
      },
      {
        uuid: "1dd8838d-db30-4896-b671-6209181a41b7",
        plot_no: "SHOP-003",
        category: "commercial",
        sub_category: "SHOP",
        status: "available",
      },
      {
        uuid: "ba1e3832-4fe8-4249-9886-87b0d286cdce",
        plot_no: "SHOP-004",
        category: "commercial",
        sub_category: "SHOP",
        status: "available",
      },
      {
        uuid: "09d3fe26-3f1b-4166-877b-0c37c7e6968a",
        plot_no: "SHOP-005",
        category: "commercial",
        sub_category: "SHOP",
        status: "available",
      },
      {
        uuid: "03a38af7-b3d9-47ab-8d13-54fe42ed6769",
        plot_no: "SHOP-006",
        category: "commercial",
        sub_category: "SHOP",
        status: "available",
      },
    ],
  };
  res.json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
