import { UPLOAD_URL } from '../../Constances/const'

class UtilService {
    _winOpen(path, target = '_blank') {
        let url = UPLOAD_URL;
        if (path) {
            if (path.indexOf('/') === 0) {
                url += path;
            } else {
                url += '/' + path;
            }
        }
        window.open(url, target);
    }
}
export default UtilService;
