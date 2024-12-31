const routineschema = require('../Schema/routineschema')

const getroutines = async (req , res ) => {

   const routines = await routineschema.find({user : user._id}).sort({createdAt : -1}) 
            res.status(200).json(routines)
}

const getroutine = async(req , res ) => {
    const {id }= req.params
    await routineschema.findById(id)
        .then((result) => {
            res.status(200).json(result)
        })
}

const postroutines = async(req , res ) => {
    const {name , body , duration } = req.body;
    const data = {name , body , duration , user: user._id}

    if (!name || !body || !duration) {
      return res.status(400).json({ error: 'Please fill in all fields' });
    }

    await routineschema.create(data)
        .then((result) => {
            res.status(200).json(result)
        })
}

const deleteroutine = async(req , res ) => {
   const {id} = req.params
   await routineschema.findOneAndDelete({_id : id , user : user._id})
        .then((result) => {
            res.status(200).json(result)
        })
}


module.exports = {getroutines , getroutine , postroutines , deleteroutine }