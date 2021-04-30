const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    date: { type: Date, default: Date.now },
    name:
        { type: String,
          required:[true,'name must be required']
        },
    email: 
        { 
            type: String,
            required:[true,'email must be required'],
            unique: true,
            trim: true
        },
    mobile:
        { 
            type:String,
            required:[true,'mobile must be required'],
            unique: true
        },
    aryyoustudent:
        { 
            type: String,
            required:[true,'must be required']
        }
  },
  { 
    timestamps:true
  });

  const user=mongoose.model('user',userSchema);

  module.exports=user


