/*
 * Ace User Management Version 1.0.0
 * Copyright (c) 2019 Kevin Pardosi - Sprout Digital Labs.
 * All rights reserved.
 */

    const User = require('../models').user;
    module.exports = {
        getUser: function (req, res) {
            User.findAll().then(value => {
                res.json(value);
            })
        }
    }