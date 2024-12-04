const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors()); // Enable CORS


// Middleware to parse JSON request body
app.use(express.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ananya',
    database: 'connectify_db',
  });

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// Endpoint to get all jobs
app.get('/jobs', (req, res) => {
  connection.query('SELECT * FROM jobs', (err, results) => {
    if (err) {
      console.error('Error fetching data: ' + err.stack);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

let jobs = [];

// POST endpoint to create a new job listing
app.post('/jobs', (req, res) => {
    const { job_title, company_name, job_description, job_type, salary, skills_required, application_deadline, contact_email, location } = req.body;

    if (!job_title || !company_name || !job_description || !job_type || !salary || !application_deadline || !contact_email || !location) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const query = 'INSERT INTO jobs (job_title, company_name, job_description, job_type, salary, skills_required, application_deadline, contact_email, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
const values = [job_title, company_name, job_description, job_type, salary, skills_required, application_deadline, contact_email, location];

connection.query(query, values, (err, result) => {
  if (err) {
    console.error('Error inserting job:', err);
    return res.status(500).json({ success: false, message: 'Error creating job' });
  }
  res.status(200).json({ success: true, message: 'Job created successfully' });
});

    
});

  
  

// Get all jobs (to display on the listing page)
app.get('/jobs', (req, res) => {
    jobs.find({}, (err, jobs) => { // Find all jobs
      if (err) {
        console.log('Error fetching jobs:', err);
        return res.status(500).send({ message: 'Error fetching jobs' });
      }
      res.status(200).send({ jobs });
    });
  });
  
  


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
