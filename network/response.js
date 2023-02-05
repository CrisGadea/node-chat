const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
};

exports.success = (req, res, message, status) => {
    const message = statusMessage[status];
    res.status(status || 200).send({error: "", body: data || message});
}

exports.error = (req, res, message, status, details) => {
    console.error("[Response error] " + details);
    const message = data || statusMessage[status];
    res.status(status || 500).send({error: message, body: ""});
}