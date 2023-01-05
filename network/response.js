exports.success = (req, res, message, status) => {
    res.status(status).send({error: "", body: message});
}

exports.error = (req, res) => {

}