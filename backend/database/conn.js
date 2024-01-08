const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://717821l339:rathish123@cluster0.0573zmj.mongodb.net/education')
.then(()=>{
    console.log(`connected database`)
})
.catch((err)=>{
    console.log(err)
})