import express from 'express';  

const app = express();  

//!Function to simulate an error  
async function initializeOperation() {  
  if (shouldFailOperation) {  
    const error = new Error('Something went wrong');  
    throw error;  
  }  
  return 'Operation completed successfully';  
}  

//*Route handler for the root endpoint  
app.get('/', async (req, res, next) => {  
  try {  
    const result = await initializeOperation();  
    res.send(result);  
  } catch (error) {  
    next(error);  
  }  
});  

//*Global error handling middleware  
app.use((err, req, res, next) => {  
  console.error('Global error:', err);  
  res.status(500).send('Internal Server Error');  
});  

app.listen(3000, () => {  
  console.log('Server is running on port 5000');  
});