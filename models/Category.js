let mongoose=require('mongoose')
const categorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    sizes: [
      {
        size: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    ]
  }, {
    timestamps: true
  });
  
  const Category = mongoose.model('Category', categorySchema);