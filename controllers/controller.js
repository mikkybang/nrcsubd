const mongoose = require('mongoose');
const Crosser = mongoose.model('Crosser');
const moment = require('moment');


exports.add = async (req, res) => {
    const crosser = await (new Crosser(req.body).save());
    res.send(crosser);
};

exports.getById = async (req, res) => {
    const crosser = await Crosser.findOne({ _id: req.params.id })
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
    await Crosser.findByIdAndRemove({ _id: req.params.id }).exec();
    res.send("Crosser Deleted");
};

exports.searchCrossers = async (req, res) => {
    const crossers = await Crosser.find({
        $text: {
            $search: req.params.name
        }
    }, {
            score: { $meta: 'textScore' }
        })
        // the sort them
        .sort({
            score: { $meta: 'textScore' }
        })
    res.json(crossers);
};


exports.getBirthdays = async (req, res) => {
    const today = moment();
    const crossers = await Crosser.find().where(this.date_of_birth).equals(`${today.date()}`)
    // { $where: `return this.date_of_birth.getDate() === ${today.date()} && this.date_of_birth.getMonth() === ${today.month()}` }
    console.log(crossers)
    res.json(crossers);
}

