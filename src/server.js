import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/static', express.static('public', {
    setHeaders: (res, path, stat) => {
        const filename = path.split('/').pop();
        const ext = filename.split('.').pop();

        console.log('ext', ext);
        console.log('filename', filename);

        switch (ext) {
            case 'pdf':
                res.set('Content-Type', 'application/pdf');
                res.set('Content-Disposition', `inline; filename=${filename}`);
                break;
            case 'jpg':
                res.set('Content-Type', 'image/jpeg');
                res.set('Content-Disposition', `inline; filename=${filename}`);
                break;
            case 'png':
                res.set('Content-Type', 'image/png');
                res.set('Content-Disposition', `inline; filename=${filename}`);
                break;
            case 'xlsx':
                res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                res.set('Content-Disposition', `inline; filename=${filename}`);
                break;
            case 'docx':
                res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
                res.set('Content-Disposition', `inline; filename=${filename}`);
                break;
            default:
                res.set('Content-Disposition', `attachment; filename=${filename}`);
        }
        res.set('x-timestamp', Date.now())
    }
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
