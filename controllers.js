    const BookModel = require('./modules')

//controllers

const listBookController = (req, res) => {
    //get id
    const { id } = req.params
    //find specific book
    if(id){
        BookModel.find({author: id})
        .then( books => {
            res.json({message:'book found', data: books})
        })
        .catch(err => console.log(err))
    }
    else{
        BookModel.find()
        .then( books => {
            console.log(books)
            res.json({message: 'Books available', data: books})
        })
        .catch(err => console.log(err))
        }
}

//create books
const createBookController = (req, res) => {
    const { title, author, gist , publisher, YOP} = req.body
    //bookdModel instance
    const books = new BookModel({title, author, gist, publisher, YOP})
    books.save().then( result => {
        console.log(result)
        res.json({message:`${books.title} created successfuly`, data:result})
    })
    .catch(err => console.log(err))
}

//update book
// const updateBookController = (req, res) => {
//     const { title, author, desc , publisher, YOP} = req.body;
//     const updatedBook = BookModel.update({
//         title,
//         author,
//         desc,
//         publisher,
//         YOP
//     })
//     //update books
//     res.json({message:'updated successfully', data: updatedBook})
// }

//search book
// const searchBookController = (req, res)=> {
//     const { title } = req.body;
//     const foundBook = BookModel.search({title});
//     res.json({data: foundBook})
//}

//delete book
// const deleteBookController = (req, res) => {
//     const { author } = req.body;
//     const deletedBook = BookModel.delete({author});
//     res.json({message:`Book by ${author} is deleted`, data: deletedBook})
//}

module.exports = {
    listBookController,
    createBookController,
    // updateBookController,
    // searchBookController,
    // deleteBookController
}