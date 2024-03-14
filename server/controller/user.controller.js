// controllers/profileController.js
const Profile = require('../model/user');

// Controller function to insert a new profile
exports.insertProfile = async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).send(profile);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Controller function to get a list of profiles
exports.getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).send(profiles);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Controller function to update a profile by ID
exports.updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findByIdAndUpdate(id, req.body, { new: true });
        if (!profile) {
            return res.status(404).send({ message: 'Profile not found' });
        }
        res.status(200).send(profile);
    } catch (error) {
        res.status(400).send(error);
    }
};
