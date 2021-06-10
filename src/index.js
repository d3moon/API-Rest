const express = require('express');
const {uuid} = require('uuidv4');
const app = express();
app.use(express.json());
 

 
const repositories = [];

app.get('/repositories', (req, res)=>{
    return res.json(repositories); 
});



app.post('/repositories', (req, res)=>{  
  const {title, url, techs} = req.body;
  let repository = { id: uuid(), title, url, techs, likes: 0};
  repositories.push(repository);
  return res.json(repository);
})



app.post('/repositories/:id/like', (req, res)=>{ 
   const {id} = req.params 
   const projectIndex = repositories.findIndex(repository => repository.id === id);

   if(projectIndex < 0){
    return res.status(400).json({error: "Project not found."})
   }

 
   repositories[projectIndex].likes+= 1 ;
   return res.json(repositories[projectIndex]);
})


 
app.put('/repositories/:id', (req, res)=>{
   const { id } = req.params;
   const {title, url, techs} = req.body;

   const projectIndex = repositories.findIndex(repository => repository.id === id);

   if(projectIndex < 0){
    return res.status(400).json({error: "Project not found."})
   }

   const repository = {id, title, url, techs};

   repositories[projectIndex] = repository;
   return res.json(repository);
})



app.delete('/repositories/:id', (req, res)=>{
  const { id } = req.params;

  const projectIndex = repositories.findIndex(repository => repository.id === id);

  if(projectIndex < 0){
   return res.status(400).json({error: "Project not found."})
  }

  repositories.splice(projectIndex, 1);
  return res.status(204).send();
})




app.delete('/repositories/:id/deslike', (req, res)=>{
  const { id } = req.params;

  const projectIndex = repositories.findIndex(repository => repository.id === id);
  if(projectIndex < 0){
   return res.status(400).json({error: "Project not found."})
  }

  initialLike = repositories[projectIndex].likes <= 0

  
  const deslikes = repositories[projectIndex].likes-= 1;
  while (initialLike){
    if(initialLike){
      repositories[projectIndex].likes = 0
       return res.json({error: 'Nenhum like foi registrado!'})
    }else{
      return res.json("This is the total dislike:" + deslikes);
    }
  }


  if( deslikes === 0){
    repositories[projectIndex].likes = 0

  }
     return res.json("This is the total dislike:" + deslikes)

})


 
 app.listen(3333,()=>{
  console.log('😊BackEnd Started');
});
