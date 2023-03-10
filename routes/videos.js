const express = require('express');
const router = express.Router();
const fs = require("fs");
const db = require("../db")

router.post('/upload', (req, res) => {
    const videoFiles = req.body.files
    for (let videoFile in videoFiles) {
        db('video_video').insert({})
    }
});

router.get("/:dt/:fn", (req, res) => {
    const range = req.headers.range;
    const videoPath = `C:\\Users\\Okafor Tochukwu\\PycharmProjects\\Family\\media\\videos\\${req.params.dt}\\${req.params.fn}`;
    const videoSize = fs.statSync(videoPath).size;
    const chunkSize = 1 * 1e6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + chunkSize, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    };
    res.writeHead(206, headers)
    const stream = fs.createReadStream(videoPath, {
        start,
        end
    });
    stream.pipe(res);
});
module.exports = router;