// var domain="demo.paguetodo.com";
var domain="localhost";
var base="https://"+domain+"/";
export function getDomain(){
	return domain;
}
export function doLogout(){
	localStorage.clear();
	sessionStorage.clear();
}
export function getRealm(){
	return "cuyawa";
}
export function getApi(){
	return "https://apid.paguetodo.com/";
}
export function getEnlaceDeegleAuthV2(){
	return "dev/deeglev2_auth";
}
export function getStatic(){
	return "https://staticd.paguetodo.com/"
}
export function redirectUri(){
	return encodeURIComponent(redirectUriBase());
}
export function redirectUriBase(){
	return "/loginv2";
}
export function getClient(){
	return "99475e85-9623-40b5-8f45-0dfbc78adb77";
}
export function getPaguetodoId(){
	return "dfb8aca9-5259-4582-ad81-9ffe0ae75ad3"
}
export function googleId(){
	return "39001919710-6rv8jg1j9kq0kuce0dfr0g26soo595i3"
}
export function publicKey(){
	return "-----BEGIN PUBLIC KEY-----MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAo2R/WgKI1Bn1gshmmPbNeblJl1ya9vnKW+txqKbnFi7q4SvO+EMubbIwbpnszMceDTJkLgvybXAjxIzurGArHpykQ/2+L3NWJAxm2u46BwpTIExaZNjj8mKwuQlPu3ewLBhNNc2mdZxWeDqPSIvtw0L13D8zcvS2sX4liHJZnycb5E7fIVThDo75TGZtDna/TI9CZS/dVuKimNks8ouHBOdfm7H0Bqf695Uc4spd7Xh49FoU2gAFUZ//bzLiS8fSFkvdUUzPaOAd5FKKAYfObyMEz31FzIicJLTIAmTTT4q1L0lUuqkWpwkIkeCdfBNwrWDPormsDDdgPThkbiOj5sXulODCsc7rNzk6QDXA0zRSd8Lqemx7Os/m18dax8MiU6KOfT2hU90FnTcenngHyCmecYQEgAWyCPgWsb5dd8631BnY/6iHMjFyfrLxNljU/ZJpgqjNOme2VqNsF2wxzbajcOk6BsbS+15CwlHf179100NojF22UHq+ZNK87xqZJyStJ6hq7tKpiI32icX7oiK+nbHzsLFScQsz+u82aNBaad+BMMc/Xdx+3BkZGz1LgOcZTLuV1vbw1fJLSAQcKZRf9HKIP9+nSZ9IwK/Gt3InlpyUSgVPlWTh5PZVah7zsAT7uAzLXC+BibjaW8elRs8FZpZ/eK5KMH8clzdVGG0CAwEAAQ==-----END PUBLIC KEY-----";
}
