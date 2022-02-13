class Url {
    constructor(urlString) {
        this.embeddedUrl = new URL(urlString)
    }

    getScheme() {
        return this.embeddedUrl.protocol.substring(0, this.embeddedUrl.protocol.length-1)
    }

    getHostName() {
        return this.embeddedUrl.hostname
    }

    getQueryParams() {
        return Object.fromEntries(this.embeddedUrl.searchParams.entries())
    }

    getQueryParam(key, defaultValue = null) {
        return this.embeddedUrl.searchParams.get(key) ?? defaultValue
    }

    toString() {
        return this.embeddedUrl.href
    }

    equals(url) {
        return url.toString() === this.embeddedUrl.href
    }
}

const url = new Url('http://yandex.ru:80?key=value&key2=value2');
url.getScheme(); // 'http'
url.getHostName(); // 'yandex.ru'
url.getQueryParams();
url.getQueryParam('new');
url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')); // true
url.equals(new Url('http://yandex.ru:80?key=value')); // false
