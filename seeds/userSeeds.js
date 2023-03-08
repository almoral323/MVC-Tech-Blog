const { User } = require('../models');

const userData = [
    {
        username: "mark_cub4n",
        twitter: "markcb",
        github: "markcubez",
        email: "markcuban@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "JimmyBuckets",
        twitter: "jimmyb",
        github: "jimmyb22",
        email: "jimmybutler@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "eric_spo",
        twitter: "CoachSpo",
        github: "ericspoelstra",
        email: "eric_s123@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "BamBam",
        twitter: "BamAdebayo",
        github: "BAdebayo",
        email: "bamAdeb444@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "almoral323",
        twitter: "almoral23",
        github: "almoral323",
        email: "almoral323@gmail.com",
        password: "p@ssword5"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;