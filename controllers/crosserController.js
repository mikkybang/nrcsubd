const mongoose = require('mongoose');
const Crosser = mongoose.model('Crosser');


exports.add = async (req, res) => {
    const crosser = await (new Crosser(req.body).save());
    res.send(crosser);
};

exports.getById = async (req, res) => {
    const crosser = await Crosser.findOne({_id: req.params.id})
    res.send(crosser);
};

exports.getCrossers = async (req, res) => {
    const crossers = await Crosser.find();
    res.send(crossers);
};

exports.edit = async (req, res) => {
    const crosser = await Crosser.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true
    }).exec();

    res.send(crosser);
};

exports.delete = async (req, res) => {
    await Crosser.findByIdAndRemove({_id: req.params.id}).exec();
    res.send("Crosser Deleted");
};