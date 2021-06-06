// import { REGEX_TEL } from '../../Constances/const'

class UtilService {
    _winOpen(path, target = '_blank') {
        let url = "http://103.138.108.104:3000";
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
