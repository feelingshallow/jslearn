function newAjax() {
    var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Miscrosoft.XMLHTTP");
    return xhr;
}