import fs from 'fs';

const persons = (req, res, next) => {

  const data = fs.readFileSync('assets/persons.json')

  setTimeout(()=>{
    res.status(200).json(JSON.parse(data));
  }, 450) //solo efecto de prueba  

};

export default { persons }