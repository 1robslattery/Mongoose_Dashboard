console.log("mongosetypes.js is running");
const mongoose = require("mongoose");
const Mongoosetype = mongoose.model("Mongoosetype");

class MongooseController {

    index(req, res) {
        Mongoosetype.find({})
            .then(mongoosetypes => res.render("index", {mongoosetypes}))
            .catch(err => res.json(err));
    }

    createnew(req,res){
        res.render("createnew");
    }

    create(req, res){
        let mongoosetype = new Mongoosetype(req.body);
        mongoosetype.save()
            .then(() => res.redirect("/"))
            .catch(err => res.json(err));
    }

    edit(req, res) {
        let _id = req.params._id;
        Mongoosetype.findOne({_id})
            .then(mongoosetype => res.render("edit", {mongoosetype}))
            .catch(err => res.json(err));
    }

    update(req, res) {
        let _id = req.params._id;
        Mongoosetype.findByIdAndUpdate({_id}, req.body, {runValidators: true})
            .then( () => res.redirect("/"))
            .catch(err => res.json(err));
    }

}

module.exports = new MongooseController();