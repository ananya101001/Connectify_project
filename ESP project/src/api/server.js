const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors()); // Enable CORS


// Middleware to parse JSON request body
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend to make requests
  methods: 'GET,POST',
}));

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
  console.log('Received data:', req.body); // Log received data

  const {
    job_title,
    company_name,
    job_description,
    job_type,
    salary,
    skills_required,
    application_deadline,
    contact_email,
    location,
  } = req.body;

  const query =
    'INSERT INTO jobs (job_title, company_name, job_description, job_type, salary, skills_required, application_deadline, contact_email, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    job_title,
    company_name,
    job_description,
    job_type,
    salary,
    skills_required,
    application_deadline,
    contact_email,
    location,
  ];
  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting job into database:', err); // Log the specific error
      return res.status(500).json({ success: false, message: 'Error creating job', error: err.message });
    }
    console.log('Job created with ID:', result.insertId);
    res.status(200).json({ success: true, message: 'Job created successfully', jobId: result.insertId });
  });
});

    


  
  

// Get all jobs (to display on the listing page)
app.get('/api/jobs', (req, res) => {
    jobs.find({}, (err, jobs) => { // Find all jobs
      if (err) {
        console.log('Error fetching jobs:', err);
        return res.status(500).send({ message: 'Error fetching jobs' });
      }
      res.status(200).send({ jobs });
    });
  });
  
// Endpoint to delete a job by job_id
app.delete('/api/jobs/:id', (req, res) => {
  const jobId = req.params.id; // Get job_id from URL params

  const query = 'DELETE FROM jobs WHERE job_id = ?';
  connection.query(query, [jobId], (err, result) => {
    if (err) {
      console.error('Error deleting job:', err);
      return res.status(500).json({ success: false, message: 'Error deleting job' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    res.status(200).json({ success: true, message: 'Job deleted successfully' });
  });
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

